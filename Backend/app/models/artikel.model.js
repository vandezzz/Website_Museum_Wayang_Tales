const mongoose = require("mongoose");

const Artikel = mongoose.model(
  "Artikel",
  new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    isi: {
        type: String,
        required: true
    },
  })
);

module.exports = Artikel;
