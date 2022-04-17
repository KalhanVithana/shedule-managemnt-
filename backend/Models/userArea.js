const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userArea = new Schema(
  {
    area: {
      type: String,
    },
    message: {
      type: String,
    },

    sheduleTime: {
      type: String,
    },

    replyMessage: {
      type: String,
    },
    powerTime: {
      type: String,
    },
    mobile: {
      type: String,
    },

    customerId: {
      type: String,
    },

    customerEmail: {
      type: String,
    },

    adminId:{
        type:String
    },
    
    dateTime: {
        type: String,
      },
  },
  {
    collection: "userArea",
  }
);

module.exports = mongoose.model("userArea", userArea);
