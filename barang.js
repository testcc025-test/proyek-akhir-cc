function addToCart() {
  const item = {
    name: "Cumi Segar",
    img: "https://frozenjakarta.com/wp-content/uploads/2023/05/fresh-seafood-on-display-at-chow-20210906032006.jpg"
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "keranjang.html";
}