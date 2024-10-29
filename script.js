// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const captionText = document.getElementById("caption");

document.querySelectorAll(".card-img-top").forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImage.src = image.src;
    captionText.innerHTML = image.alt;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
