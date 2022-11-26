const { Schema, model } = require("mongoose");

const AddressSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    document: {
      type: String,
      required: true
    },
    address: { 
        type: Schema.Types.ObjectId, 
        ref: 'address' 
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    companyCategorie: { 
      type: Schema.Types.ObjectId, 
      ref: 'companyCategorie' 
    },
    typerequest: {
      type: String,
      default: "local",
      enum: ["local", "localpickup", "delivery"]
    },
    paymenttype: {
      type: String,
      default: "debitcard",
      enum: ["debitcard", "creditcard", "cash", "pix"]
    },
    timeWork: {
      type: String,
      required: true
    },
    invoicing: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    working: {
      type: Schema.Types.ObjectId, 
      ref: 'working' 
    },
    fullWorking: {
      type: Boolean,
      required: true
    },
    productsCategorie: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'productCategorie' 
      }
    ],
    plan: {
      type: String,
      default: "free",
      enum: ["free", "premium", "professional"]
    },
    opened: {
      type: Boolean,
      required: true
    },
    requests: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'request' 
      }
    ],
  },
  { timestamps: true }
);

module.exports = model("address", AddressSchema);
