// import Data from '../DATA.json'; // Jika Anda menggunakan data dari file JSON
import Data from '../model/artikel.js'; // Import model artikel

const Artikel = {
  async fetchArticles() {
    try {
      const response = await fetch('http://localhost:3000/articles'); // Mengambil data artikel dari server
      if (!response.ok) throw new Error('Network response was not ok');
      const articles = await response.json(); // Mengonversi respons menjadi JSON
      return articles; 
    } catch (error) {
      console.error('Error fetching articles:', error); // Menangani kesalahan
      return []; 
    }
  },

  async render() {
    const articles = await this.fetchArticles(); 

    if (!articles || articles.length === 0) {
      return `
        <div class="no-articles">
          <h2>No Articles Available</h2>
          <p>We couldn't find any articles at the moment. Please check back later or explore our other sections.</p>
          <img src="path/to/placeholder_image.jpg" alt="No articles" /> <!-- Ganti dengan URL gambar yang relevan -->
        </div>
      `;
    }

    const articleHTML = articles.map(article => `
      <div class="article">
        <h2>Nama: ${article.nama}</h2>
        <p>Jurusan: ${article.jurusan}</p>
      </div>
    `).join('');

    return `
      <div class="articles-container">
        ${articleHTML}
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini bisa diisi dengan logika tambahan jika perlu
  },
};

export default Artikel;
