const { Schema, model } = require("mongoose");

const ProductCategorieSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    products : [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'product' 
      }
    ]
  },
  { timestamps: true }
);

module.exports = model("productCategorie", ProductCategorieSchema);
