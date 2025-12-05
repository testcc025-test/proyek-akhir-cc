function addToCart() {
  const item = {
    name: "Udang Segar",
      img: "https://tse3.mm.bing.net/th/id/OIP.vrGZpT9HirVlBrYhN_SYDQHaEp?rs=1&pid=ImgDetMain&o=7&rm=3"
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "keranjang.html";
}