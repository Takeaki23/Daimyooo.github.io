document.addEventListener("DOMContentLoaded", function() {
  // Placeholder array of image URLs
  const images = [
    "daimyooo_Japanese_creation_Hoshino_Ai_full_body_view_detailed_b_11deb920-7c93-4e8b-913c-5488a21ba9da.png",
    "daimyooo_Japanese_creation_Hoshino_Ai_full_body_view_detailed_b_26503842-c97c-4e26-9aa3-d956c022c640.png",
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
