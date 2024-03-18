document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  const loadMoreButton = document.querySelector(".button");

  // Placeholder array of image URLs
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs as needed
  ];

  // Function to add images to the gallery
  function addImages() {
    images.forEach(image => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      gallery.appendChild(imgElement);
    });
  }

  // Initial load of images
  addImages();

  // Event listener for "Load More" button click
  loadMoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    // You can add more images to the 'images' array dynamically here
    // and then call the addImages() function again to append them to the gallery.
  });
});
