const { test, trait } = use("Test/Suite")("User");

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

trait("Test/ApiClient");
trait("DatabaseTransactions");

test("it should create an user and return their id", async ({
  assert,
  client
}) => {
  const dataNewUser = {
    name: "Rafael Criado",
    phone: "(17)981832768",
    email: "rafael@teste.com.br",
    password: "123456"
  };

  const response = await client
    .post("/users")
    .send(dataNewUser)
    .end();

  response.assertStatus(200);
  assert.exists(response.body.id);
  assert.equal(response.body.name, dataNewUser.name);
});
