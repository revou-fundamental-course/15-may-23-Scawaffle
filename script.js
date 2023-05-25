function HitungLuasPersegi() {
  //fungsi untuk menghitung luas
  var sisi = parseFloat(document.getElementById("sisi-luas").value);
  var luas = sisi * sisi;

  document
    .getElementById("langkah-luas")
    .insertAdjacentHTML(
      "beforeend",
      "<br>L = S x S <br> L = " + sisi + " x " + sisi + "<br> L = " + luas
    );
}

function HitungKelilingPersegi() {
  //fungsi untuk menghitung keliling
  var sisi = parseFloat(document.getElementById("sisi-keliling").value);
  var keliling = 4 * sisi;

  document
    .getElementById("langkah-keliling")
    .insertAdjacentHTML(
      "beforeend",
      "<br>K = 4 x S <br> K = 4 x " + sisi + "<br> K = " + keliling
    );
}

function toggleContent(contentId) {
  //otomatis sembunyi
  var content = document.getElementById(contentId);
  var otherContentId;

  if (contentId === "content-luas") {
    otherContentId = "content-keliling";
  } else if (contentId === "content-keliling") {
    otherContentId = "content-luas";
  }

  var otherContent = document.getElementById(otherContentId);

  // sembunyikan jika yang satu lagi hidup
  if (otherContent.classList.contains("expanded")) {
    otherContent.classList.remove("expanded");
  }

  // membuka konten yang di klik
  content.classList.toggle("expanded");
}
