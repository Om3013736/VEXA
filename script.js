// مصفوفة السلة والإجمالي
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;

// تحديث السلة عند تحميل الصفحة
window.onload = () => {
  updateCart();
};

// إضافة منتج للسلة
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  saveCart();
  updateCart();
}

// تحديث السلة في الصفحة
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ${item.price} جنيه`;

    // زر حذف المنتج من السلة
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌ حذف";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  document.getElementById("total").textContent = `الإجمالي: ${total} جنيه`;
}

// حذف منتج من السلة
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

// حفظ السلة في LocalStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total.toString());
}

// طرق الدفع (محاكاة)
function payVisa() { alert("✅ تم اختيار الدفع بالفيزا"); }
function payVodafoneCash() { alert("✅ تم اختيار الدفع بفودافون كاش"); }
function payOrangeCash() { alert("✅ تم اختيار الدفع بأورانج كاش"); }
function payEtisalatCash() { alert("✅ تم اختيار الدفع باتصالات كاش"); }
function payCOD() { alert("✅ تم اختيار الدفع عند الاستلام"); }
function payPayPal() { alert("✅ تم اختيار الدفع عبر PayPal"); }
function payApplePay() { alert("✅ تم اختيار الدفع عبر Apple Pay"); }
function payGooglePay() { alert("✅ تم اختيار الدفع عبر Google Pay"); }
