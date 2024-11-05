//article.js
const mongoose = require('mongoose');

const paragrafSchema = new mongoose.Schema({
    teks: {
        type: String,
        required: true,
    }
});

const wayangSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    konten: {
        type: String,
        required: true,
    }
});

const sejarahSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    konten: {
        type: String,
        required: true,
    }
});

const museumSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    konten: {
        type: String,
        required: true,
    },
    judul1: {
        type: String,
        required: true,
    },
    konten1: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    }
});

const cardSchema = new mongoose.Schema({
    gambar: {
        type: String,
        required: true,
    },
    judul: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    }
});

const collapsibleSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    short_text: {
        type: String,
        required: true,
    },
    full_text: {
        type: String,
        required: true,
    }
});

const articleSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    paragraf: [paragrafSchema],
    wayang: wayangSchema,
    sejarah: sejarahSchema,
    museum: museumSchema,
    cards: [cardSchema],
    collapsibles: [collapsibleSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
