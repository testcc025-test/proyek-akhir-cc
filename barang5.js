function addToCart() {
  const item = {
    name: "Ikan Segar",
    img: "https://down-id.img.susercontent.com/file/5482a926748d98b4786912886368686a"
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "keranjang.html";
}