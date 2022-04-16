const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let admin = new Schema(
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
    collection: "admin",
  }
);

module.exports = mongoose.model("admin", admin);
