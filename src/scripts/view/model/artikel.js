const mongoose = require('mongoose');

// Definisikan skema untuk artikel
const articleSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    jurusan: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Buat model dari skema
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
