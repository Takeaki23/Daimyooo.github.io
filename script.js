document.addEventListener("DOMContentLoaded", function() {
  // Placeholder array of image URLs
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ];

  const gallery = document.querySelector(".gallery");

  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    gallery.appendChild(imgElement);
  });
});
