// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(ProductTag, {
  through: "product_tag",
  // foreignKey: "product_tag_id",
});
// Dont have to do Foreign keys

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: "product_tag",
  // foreignKey: "tag",
});
// Foreign Key setup

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
