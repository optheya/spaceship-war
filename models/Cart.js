const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    typerequest: {
      type: String,
      default: "local",
      enum: ["local", "localpickup", "delivery"]
    },
    dish: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'product' 
      }
    ],
    tablenumber: {
      type: Number,
      required: true
    },
    paymenttype: {
      type: String,
      default: "debitcard",
      enum: ["debitcard", "creditcard", "cash", "pix"]
    },
    shiping: {
      type: Number,
      required: true
    },
    totalValueCart: {
      type: Number,
      required: true
    },
    requestStatus: {
      type: String,
      default: "waiting",
      enum: ["waiting", "preparing", "totable", "waitingforwithdrawal", "todelivery"]
    }
  },
  { timestamps: true }
);

module.exports = model("cart", CartSchema);
