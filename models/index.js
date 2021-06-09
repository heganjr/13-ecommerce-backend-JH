// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  // entry point - Product belongs to Category and the category id is what links the two tables to each other
  // PRODUCT CAN ONLY BELONG TO ONE CATEGORY

});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  // Category has many products and it is linked to products via category_id
  // I am telling products that you will be an array with multiple objects!

});


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  // 
});
// Dont have to do Foreign keys

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  // Tag belongs to many Products through ProductTag - foreign
});
// Foreign Key setup

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
