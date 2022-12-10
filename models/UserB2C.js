const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "superadmin"]
    },
    favorite: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'favorite' 
      }
    ],
    address: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'address' 
      }
    ],
    cart: [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'cart' 
      }
    ]
  },
  { timestamps: true }
);

module.exports = model("userB2C", UserSchema);
