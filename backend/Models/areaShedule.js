const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let areaShedule = new Schema(
  {
    area: {
      type: String,
    },

    sheduleTime: {
      type: String,
    },
    activeTIme: {
      type: Boolean,
      default:0
    },

 
  },
  {
    collection: "areaShedule",
  }
);

module.exports = mongoose.model("areaShedule", areaShedule);
