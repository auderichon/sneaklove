const mongoose = require("mongoose"); // import mongoose dependency
const Schema = mongoose.Schema;

const SneakerSchema = new Schema({
  name: String,
  ref: String,
  size: Number,
  description: String,
  price: Number,
  picture: {
    type: String,
    default:
      "https://image.shutterstock.com/image-vector/sneaker-shop-logo-shoes-sign-600w-471891626.jpg",
  },
  category: {
    type: String,
    enum: ["men", "women", "kids"],
  },
  id_tags: {
    type: [Schema.Types.ObjectId],
    ref: "tag",
  },
});

const SneakerModel = mongoose.model("sneaker", SneakerSchema);
module.exports = SneakerModel;
