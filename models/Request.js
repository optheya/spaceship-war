const { Schema, model } = require("mongoose");

const RequestSchema = new Schema(
  {
    number: {
      type: Number,
      required: true
    },
    client:{ 
        type: Schema.Types.ObjectId, 
        ref: 'userB2C' 
    },
    status: {
      type: Boolean,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = model("request", RequestSchema);
