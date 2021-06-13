const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      AllowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      references : {
        model: "product",
        key: "id"
      }
      
    },
    // Might not need this column defined

     tag_id: {
      type: DataTypes.INTEGER,
      references : {
        model: "tag",
        key: "id"
      }
      // Might not need these!
      
    }
        
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

// Creates a product_tag_id ??????

module.exports = ProductTag;
