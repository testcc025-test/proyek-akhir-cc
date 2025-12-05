function addToCart() {
  const item = {
    name: "Kepiting Segar",
      img: "https://th.bing.com/th/id/R.6b83d5e614b15671d1dcfb80e36b718c?rik=WrcojOxfuXQRBg&riu=http%3a%2f%2fmangrovemagz.com%2fwp-content%2fuploads%2fExternalLink_Kepiting20Bakau.jpg&ehk=NaCkXzX9vmPz5xn6JV6oHQv5ntYICEsv9%2bIai0Jk%2frc%3d&risl=&pid=ImgRaw&r=0"
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "keranjang.html";
}