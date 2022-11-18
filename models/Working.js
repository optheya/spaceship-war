const { Schema, model } = require("mongoose");

const WorkingSchema = new Schema(
  {
    startingDay: {
      type: String,
      required: true
    },
    endingDay: {
      type: String,
      required: true
    },
    startingHour: {
      type: String,
      required: true
    },
    endingHour: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("working", WorkingSchema);
