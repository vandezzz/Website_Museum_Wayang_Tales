const Beranda = {
  async fetchBeranda() {
    try {
      const response = await fetch('http://localhost:3000/api/beranda'); // Mengambil data beranda dari server
      if (!response.ok) throw new Error('Network response was not ok');
      const beranda = await response.json(); // Mengonversi respons menjadi JSON
      return beranda;
    } catch (error) {
      console.error('Error fetching beranda:', error); // Menangani kesalahan
      return [];
    }
  },

  async render() {
    const beranda = await this.fetchBeranda();

    if (!beranda || beranda.length === 0) {
      return `
        <div class="no-beranda">
          <h2>No Beranda Available</h2>
          <p>We couldn't find any beranda at the moment. Please check back later or explore our other sections.</p>
          <img src="path/to/placeholder_image.jpg" alt="No beranda" />
        </div>
      `;
    }

    const BerandaHTML = beranda.map(beranda => `
      <div class="beranda">
        <h2>${beranda.judul}</h2>
        <p>Deskripsi: ${beranda.isi}</p>
      </div>
    `).join('');

    return `
      <div class="articles-container">
        ${BerandaHTML}
      </div>
    `;
    
  },
  async afterRender() {
    // Fungsi ini bisa diisi dengan logika tambahan jika perlu
  },
};

export default Beranda;
