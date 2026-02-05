document.addEventListener("DOMContentLoaded", () => {

  /* ===== MUSIC AUTOPLAY (CLICK ONCE) ===== */
  const music = document.getElementById("bgMusic");
  document.body.addEventListener("click", () => {
    music.play().catch(() => {});
  }, { once: true });

  /* ===== FLOWERS ===== */
  const container = document.querySelector(".flowers");
  const flowers = ["🌸", "🌺", "🌼", "💮"];

  setInterval(() => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.fontSize = (16 + Math.random() * 18) + "px";
    flower.style.animationDuration = (4 + Math.random() * 4) + "s";
    container.appendChild(flower);
    setTimeout(() => flower.remove(), 9000);
  }, 300);

  /* ===== AUTO SLIDESHOW (5 IMAGES) ===== */
  const images = [
    "img11.jpeg",
    "img22.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img55.jpeg"
  ];

  let index = 0;
  const slideImage = document.getElementById("slideImage");

  setInterval(() => {
    index = (index + 1) % images.length;
    slideImage.src = images[index];
  }, 3000); // tukar setiap 3 saat
});

