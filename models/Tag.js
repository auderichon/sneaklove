const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
  label: String,
});

const TagModel = mongoose.model("tag", TagsSchema);
module.exports = TagModel;
