const { Schema, model } = require("mongoose");

const FavoriteSchema = new Schema(
  {
    company : [
      { 
        type: Schema.Types.ObjectId, 
        ref: 'company' 
      }
    ]
  },
  { timestamps: true }
);

module.exports = model("favorite", FavoriteSchema);
