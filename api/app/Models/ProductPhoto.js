/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProductPhoto extends Model {
  product() {
    return this.belongsTo("App/Models/Product");
  }

  file() {
    return this.hasOne("App/Models/File");
  }
}

module.exports = ProductPhoto;
