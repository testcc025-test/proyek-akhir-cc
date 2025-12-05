function addToCart() {
  const item = {
    name: "Kerang Dara Segar",
    img: "https://cdn.idntimes.com/content-images/community/2019/05/53915082-416643732472160-1716382876681330168-n-68a02d08d06852b010d1ed52b357a503.jpg"
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "keranjang.html";
}