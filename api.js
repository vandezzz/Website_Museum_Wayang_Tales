const express = require('express');
const connectDB = require('./db');
const Article = require('./Article'); // Import model Article
const dotenv = require('dotenv');

dotenv.config(); 

const app = express();
app.use(express.json()); 

connectDB(); 

app.post('/articles', async (req, res) => {
    const { nama, jurusan } = req.body; // Ambil data nama dan jurusan dari request
 
    try {
        const article = new Article({ nama, jurusan }); // Buat instansi baru dari model Article
        await article.save(); // Simpan ke database
        res.status(201).json(article); // Kirim respons dengan artikel yang baru dibuat
    } catch (error) {
        res.status(400).json({ message: error.message }); // Menangani kesalahan
    }
});


// Endpoint untuk mengambil semua artikel
app.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find(); // Ambil semua artikel dari database
        res.status(200).json(articles); // Kirim respons dengan artikel
    } catch (error) {
        res.status(500).json({ message: error.message }); // Menangani kesalahan
    }
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
