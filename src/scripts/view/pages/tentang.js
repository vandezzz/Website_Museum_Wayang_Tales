const Tentang = { 
  async render() {
    return `
      <img src="./walpaper.png" alt="Wallpaper Image" class="walpaper">
      <div class="text-center">
        <h2 class="judul2" style="padding-top: 30px;">Tentang Kami</h2>
      </div>
      <div class="container">
      <div class="row justify-content-center" style="padding-top: 20px;">
        <div class="col-md-6">
          <div class="text">
            <p>Wayang Tales merupakan web platform digital yang bertujuan untuk memperkenalkan, mempromosikan dan memfasilitasi seni wayang secara online. Web ini akan menjadi pusat informasi utama yang mengenai seni wayang, baik itu menyajikan sejarah wayang, tokoh-tokohnya, jenis pertunjukan serta jadwal terkini dari berbagai pertunjukan wayang yang ada di seluruh Indonesia.</p>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <img src="./image4.png" alt="Wayang Image" class="img-fluid img-block" style="max-width: 80%; height: auto;">
        </div>
        <div class="col-md-6 text-center" style="margin-top: 20px;">
          <img src="./image5.png" alt="Wayang Image" class="img-fluid img-block" style="max-width: 60%; height: auto;">
        </div>
        <div class="col-md-6">
          <h2 class="text1" style="margin-top: 10px;">Mengapa Wayang Tales?</h2>
          <div class="text">
            <p>Dengan memanfaatkan teknologi digital, web ini dapat menciptakan solusi yang tidak hanya meningkatkan aksesibilitas informasi tentang seni wayang, tetapi juga memperkuat pengaruh dan keberlangsungan seni wayang sebagai bagian penting dari warisan budaya Indonesia.</p>
          </div>
        </div>
      </div>
    </div>
    
      <div class="text-center">
        <h2 class="judul4">Kontak Kami</h2>
      </div>
      <section class="contact">
        <form action="#">
          <div class="input-box">
            <div class="input-field field">
              <input type="text" placeholder="Nama Lengkap" id="name" class="item" autocomplete="off">
            </div>
            <div class="input-field field">
              <input type="email" placeholder="Email" id="email" class="item" autocomplete="off">
            </div>
          </div>
          <div class="input-box">
            <div class="input-field field">
              <input type="text" placeholder="No Handphone" id="phone" class="item" autocomplete="off">
            </div>
            <div class="input-field field">
              <input type="text" placeholder="Subject" id="subject" class="item" autocomplete="off">
            </div>
          </div>
          <div class="textarea-field field">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Pesan Teks" class="item" autocomplete="off"></textarea>
          </div>
          <button type="submit">Kirim Pesan</button>
        </form>
      </section>

      <section class="team text-center py-5">
      <h2 class="judul5">Team Kami</h2>
      <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-6 col-lg-3">
            <div class="img-block mb-5">
              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
              <div class="content mt-2">
                <h4>Zain Knob</h4>
                <p class="text-muted">Mechanical Engineer</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ">
            <div class="img-block mb-5">
              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
              <div class="content mt-2">
                <h4>Syndia Lee</h4>
                <p class="text-muted">Software Engineer</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="img-block mb-5">
              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" class="img-fluid  img-thumbnail rounded-circle" alt="image1">
              <div class="content mt-2">
                <h4>Noel Flantier</h4>
                <p class="text-muted">Joomla Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Tentang;
