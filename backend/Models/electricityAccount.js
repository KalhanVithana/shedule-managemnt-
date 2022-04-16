const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let electricityAccount = new Schema(
  {
    AreaOffice: {
      type: String,
    },
    accountNo: {
      type: String,
    },

    userName: {
      type: String,
    },

    customerId: {
      type: String,
    },

    customerEmail: {
      type: String,
    },

    adminId: {
      type: String,
    },

    dateTime: {
      type: String,
    },

    billUpload: {
      type: String,
    },

    mobileNo: {
      type: String,
    },
  },
  {
    collection: "electricityAccount",
  }
);

module.exports = mongoose.model("electricityAccount", electricityAccount);
