const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    ARStatus: {
      type: String,
      default: "donthave",
      enum: ["donthave", "requested", "available", "active"]
    },
    virtualObject: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("product", ProductSchema);
