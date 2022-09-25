const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: { type: String, required: true},
  other_name: { type: String, required: true},
  name_URL: { trailer:String, vietsub:String, demonstration:String },
  likes: { type: Number, default: 0,},
  views: { type: Number, default: 0,},
  director: {type:mongoose.Types.ObjectId, ref:"director"},
  country: { type: mongoose.Types.ObjectId, ref: "countries",},
  type_movie: { type: String, enum: ["phimle", "phimbo"],},
  year: { type: String,},
  duration: Number,
  description: String,
  casts: [{ type: String, default: "Đang cập nhật",},{type:mongoose.Types.ObjectId, ref:"caster"}],
  genres: [{ type: mongoose.Types.ObjectId, ref: "genres",},],
  language: String,
  episodes: [{ name: String, URL_episode: String,},],
  comments: [{
      body: String,
      user: {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
      create_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  rate: {
    amount: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  URL_image: String,
}, {timestamps: true} );

module.exports = mongoose.model("movies", MovieSchema);
