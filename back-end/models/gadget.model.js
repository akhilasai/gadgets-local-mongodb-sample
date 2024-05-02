const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/* This is creating a new schema for the product model. */
const gadgetSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    units: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gadget", gadgetSchema);
