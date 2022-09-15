const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const DirectorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image:{
    type: String,
    maxlength: 255 
  },
  description: {
    type: String,
    required: true,
  },
  slug: { type: String, slug: "name", unique: true },
});

mongoose.plugin(slug);

module.exports = mongoose.model("director", DirectorSchema);
