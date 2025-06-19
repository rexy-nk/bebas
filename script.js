const tantangan = [
  "Peluk pasangan 1 menit",
  "Nyanyiin lagu cinta",
  "Foto berdua sekarang",
  "Cerita kenangan lucu",
  "Ucap 5 hal yang disuka",
  "Buat pantun romantis",
  "Tulis pesan cinta",
  "Tatap mata 1 menit"
];

function putarRoda() {
  const hasil = document.getElementById('hasil');
  const acak = Math.floor(Math.random() * tantangan.length);
  hasil.innerText = tantangan[acak];
}