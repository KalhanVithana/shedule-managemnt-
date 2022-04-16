const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let customer = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },

    email: {
      type: String,
    },
    password: {
      type: String,
    },

    role: {
      type: String,
    },
  },
  {
    collection: "customer",
  }
);

module.exports = mongoose.model("customer", customer);
