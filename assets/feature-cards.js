document.addEventListener("DOMContentLoaded", () => {
  
  // Get saved wishlist from localStorage
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // Activate previously saved items on page load
  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    const id = btn.getAttribute("data-product-id");

    if (wishlist.includes(id)) {
      btn.classList.add("active");
      const icon = btn.querySelector("i");
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid");
    }

    // Toggle wishlist on click
    btn.addEventListener("click", () => {
      const productId = btn.getAttribute("data-product-id");
      const icon = btn.querySelector("i");

      if (btn.classList.contains("active")) {
        // Remove from wishlist
        btn.classList.remove("active");
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");

        wishlist = wishlist.filter(id => id !== productId);
      } else {
        // Add to wishlist
        btn.classList.add("active");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

        wishlist.push(productId);
      }

      // Save updated wishlist
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
  });
});
