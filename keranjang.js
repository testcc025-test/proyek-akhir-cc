const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart");
const totalEl = document.getElementById("total");

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += 50000;

    const row = document.createElement("div");
    row.className = "item";

    row.innerHTML = `
      <img src="${item.img}" alt="${item.name}" style="width:60px;height:60px;border-radius:8px;object-fit:cover;margin-right:10px;">
      <span>${item.name}</span>
      <button onclick="removeItem(${index})">Hapus</button>
    `;

    cartContainer.appendChild(row);
  });

  totalEl.textContent = total.toLocaleString("id-ID");
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
