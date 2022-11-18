const { Schema, model } = require("mongoose");

const AddressSchema = new Schema(
  {
    district: {
      type: String,
      required: true
    },
    road: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    complement: {
      type: String,
      required: true
    },
    cep: {
      type: String,
      required: true
    },
    reference: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("address", AddressSchema);
