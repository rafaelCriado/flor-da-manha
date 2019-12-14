/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class OrderIten extends Model {
  order() {
    return this.belongsTo("App/Models/Order");
  }

  product() {
    return this.hasOne("App/Models/Product");
  }
}

module.exports = OrderIten;
