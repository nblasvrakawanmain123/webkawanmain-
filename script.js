function showContent(type) {
  const content = document.getElementById("content");

  if (type === "include") {
    content.innerHTML = `
      <h3>✅ Include:</h3>
      <ul>
        <li>Transportasi</li>
        <li>Tiket masuk pendakian</li>
        <li>Guide</li>
        <li>Peralatan makan</li>
        <li>HT Team</li>
        <li>P3K</li>
        <li>Makan selama pendakian</li>
        <li>Welcome drink</li>
        <li>Dokumentasi</li>
        <li>Rumah singgah</li>
      </ul>
    `;
  } else if (type === "peralatan") {
    content.innerHTML = `
      <h3>🎒 Peralatan yang Harus Dibawa Peserta:</h3>
      <ul>
        <li>Cemilan / Air mineral pribadi</li>
        <li>Matras</li>
        <li>Sleeping bag</li>
        <li>P3K pribadi</li>
        <li>Pakaian pribadi</li>
        <li>Alat komunikasi</li>
        <li>Surat keterangan sehat</li>
        <li>Carrier cukup 45L</li>
        <li>Sepatu tracking</li>
        <li>Jaket waterproof / puffer</li>
        <li>Emergency blanket / hand warmer</li>
      </ul>
    `;
  } else if (type === "meeting") {
    content.innerHTML = `
      <h3>📍 Meeting Point & Biaya:</h3>
      <ul>
        <li><strong>Pagaralam:</strong> Rp900.000</li>
        <li><strong>Bengkulu:</strong> Rp850.000</li>
        <li><strong>Basecamp:</strong> Rp400.000</li>
      </ul>
      <p><a href="https://maps.app.goo.gl/sXDv2ukDKGV3fXrZA" target="_blank">📌 Lihat lokasi Gunung Dempo di Google Maps</a></p>
    `;
  }
}

// Countdown ke 05 Juni 2025
const countdownEl = document.getElementById("countdown");
const targetDate = new Date("2025-12-05T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    countdownEl.innerText = "Trip dimulai hari ini!";
    return;
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  countdownEl.innerText = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
}, 1000);

// Form kirim ke WhatsApp
document.getElementById("formPendaftaran").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = this.nama.value;
  const hp = this.hp.value;
  const meeting = this.meeting_point.value;
  const catatan = this.catatan.value || "Tidak ada";

  const pesan = `Halo kak! Saya ingin daftar trip Gunung Dempo:%0A
Nama: ${nama}%0A
No HP: ${hp}%0A
Meeting Point: ${meeting}%0A
Catatan: ${catatan}`;

  const noWa = "6283800981156"; // Ganti jika ada nomor WA khusus
  const link = `https://wa.me/${noWa}?text=${pesan}`;

  alert("Kamu akan diarahkan ke WhatsApp untuk mengirim pendaftaran.");
  window.open(link, "_blank");
});
