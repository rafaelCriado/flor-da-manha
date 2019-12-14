const { randomBytes } = require("crypto");
const { promisify } = require("util");

const Mail = use("Mail");
const Env = use("Env");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use("App/Models/User");

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input("email");

      const user = await User.findByOrFail("email", email);

      const random = await promisify(randomBytes)(24);
      const token = random.toString("hex");
      const resetPasswordUrl = `${Env.get("FRONT_URL")}/reset?token=${token}`;

      await user.tokens().create({
        token,
        type: "forgotpassword"
      });

      await Mail.send(
        "emails.forgotpassword",
        { name: user.name, resetPasswordUrl },
        message => {
          message
            .to(user.email)
            .from("oi@flordamanha.com.br", "Contato | Flor da Manhã")
            .subject("Flor da Manhã - Recuperação de Senha");
        }
      );
    } catch (error) {
      return response
        .status(error.status)
        .json({ error: "Verifique se esse e-mail é valido" });
    }
  }
}

module.exports = ForgotPasswordController;
