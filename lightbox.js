const lightbox = document.querySelector(".lightbox");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    // Show lightbox
    lightbox.style.display = "flex";

    // Get thumbnail src
    const thumbnailSrc = item.src;

    // Convert to full-size image
    const fullSizeSrc = thumbnailSrc.replace("-thumbnail", "");

    // Set lightbox image src
    lightboxImage.src = fullSizeSrc;
  });
});


// Close when clicking the close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking the lightbox background
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

