// Manoj Vaishnav Hotel & Mishthan Bhandar - POS Terminal Logic (Staff Only)

const TRANSLATIONS = {
  hi: {
    select_staff_title: "प्रवेश द्वार",
    select_staff_subtitle: "मनोज वैष्णव होटल एवं मिष्ठान भंडार",
    staff_login_header: "कर्मचारी लॉगिन 🧑‍🍳",
    owner_login_header: "मालिक लॉगिन 👑",
    owner_entry_btn: "मालिक प्रवेश",
    back_btn: "वापस",
    enter_pin_msg: "4 अंकों का सुरक्षा पिन दर्ज करें",
    cat_all: "सभी (All)",
    cat_meals: "भोजन (Meals)",
    cat_snacks: "नाश्ता (Snacks)",
    cat_sweets: "मिठाई (Sweets)",
    cat_fastfood: "फास्ट फूड",
    clear_cart_btn: "सब हटाएं 🗑️",
    empty_cart: "कोई सामान नहीं चुना गया है।",
    original_total: "मूल मूल्य:",
    discount_total: "छूट:",
    extra_total: "अतिरिक्त:",
    bill_total: "कुल बिल:",
    custom_price_btn: "₹ कस्टम रेट",
    pay_btn: "भुगतान (Pay) ➔",
    pay_modal_title: "भुगतान स्क्रीन (Payment Screen)",
    net_amount: "कुल देय बिल (Bill):",
    orig_total_bill: "मूल बिल:",
    discount_given: "दी गई छूट (-):",
    extra_received: "अतिरिक्त प्राप्त (+):",
    select_pay_mode: "भुगतान का माध्यम (Payment Mode):",
    pm_cash: "नकद (Cash)",
    pm_upi: "UPI (ऑनलाइन)",
    pm_card: "कार्ड (Card)",
    return_change: "ग्राहक को वापस दें (Change):",
    remaining_due: "बकाया उधार (Remaining Due):",
    enter_customer_paid: "ग्राहक द्वारा दी गई नगद राशि (Paid Amount):",
    btn_complete_order: "ऑर्डर पक्का करें (Complete Order) ✓",
    cp_modal_title: "कस्टम रेट दर्ज करें (Custom Price)",
    cp_orig_price: "मूल मूल्य (Original Price):",
    cp_new_price: "नया मूल्य (Final Price):",
    cp_discount_amount: "छूट राशि (Discount):",
    cp_extra_amount: "अतिरिक्त राशि (Extra):",
    cp_reason: "कारण चुनें (Select Reason):",
    re_regular: "नियमित ग्राहक (Regular Customer)",
    re_friend: "दोस्त / रिश्तेदार (Friend)",
    re_staff: "स्टाफ डिस्काउंट (Staff Discount)",
    re_owner: "मालिक की अनुमति (Owner Approved)",
    re_festival: "त्योहार ऑफर (Festival Offer)",
    re_manual: "मैन्युअल छूट (Manual Discount)",
    apply_btn: "लागू करें (Apply) ✓",
    receipt_title: "रसीद (Manoj Vaishnav Hotel)",
    receipt_greet: "धन्यवाद! फिर पधारें।",
    logout_btn_text: "लॉगआउट 🚪"
  },
  en: {
    select_staff_title: "Portal Entrance",
    select_staff_subtitle: "Manoj Vaishnav Hotel & Mishthan Bhandar",
    staff_login_header: "Staff Login 🧑‍🍳",
    owner_login_header: "Owner Login 👑",
    owner_entry_btn: "Owner Entry",
    back_btn: "Back",
    enter_pin_msg: "Enter 4-Digit Security PIN",
    cat_all: "All Items",
    cat_meals: "Meals",
    cat_snacks: "Snacks",
    cat_sweets: "Sweets",
    cat_fastfood: "Fast Food",
    clear_cart_btn: "Clear Cart 🗑️",
    empty_cart: "Your cart is empty.",
    original_total: "Original Total:",
    discount_total: "Discount:",
    extra_total: "Extra Amount:",
    bill_total: "Net Bill:",
    custom_price_btn: "Custom Price",
    pay_btn: "Checkout ➔",
    pay_modal_title: "Bill Payment Portal",
    net_amount: "Net Bill Amount:",
    orig_total_bill: "Original Bill:",
    discount_given: "Discount Applied (-):",
    extra_received: "Extra Tips/Fees (+):",
    select_pay_mode: "Choose Payment Mode:",
    pm_cash: "Cash Payment",
    pm_upi: "UPI / Scan QR",
    pm_card: "Card Transaction",
    return_change: "Balance Return (Change):",
    remaining_due: "Customer Due (Credit):",
    enter_customer_paid: "Customer Paid Amount:",
    btn_complete_order: "Complete Checkout ✓",
    cp_modal_title: "Set Custom Item Pricing",
    cp_orig_price: "Original Price:",
    cp_new_price: "New Price:",
    cp_discount_amount: "Discount Diff:",
    cp_extra_amount: "Extra Diff:",
    cp_reason: "Reason for Custom Price:",
    re_regular: "Regular Customer",
    re_friend: "Friend / Relative",
    re_staff: "Staff Member Discount",
    re_owner: "Owner Approved",
    re_festival: "Festival Special Offer",
    re_manual: "Manual Adjustment",
    apply_btn: "Apply Custom Price ✓",
    receipt_title: "Invoice - Manoj Vaishnav Hotel",
    receipt_greet: "Thank you! Visit again.",
    logout_btn_text: "Logout 🚪"
  }
};

let STATE = {
  currentRole: 'staff',
  activeStaff: null,
  cart: [],
  lang: 'hi',
  currentPaymentMode: 'Cash',
  selectedCartItemIndex: null
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("mv_pos_lang");
  if (savedLang) STATE.lang = savedLang;
  applyTranslations();
  showScreen('screen-staff-select');
  loadStaffSelectionList();
  if (window.location.protocol === "file:") {
    showFileProtocolWarning();
  }
  startDatabasePolling();
});

function applyTranslations() {
  const currentDict = TRANSLATIONS[STATE.lang];
  document.documentElement.lang = STATE.lang;
  
  document.querySelectorAll("[data-translate]").forEach(elem => {
    const key = elem.getAttribute("data-translate");
    if (currentDict[key]) elem.textContent = currentDict[key];
  });

  const searchInput = document.getElementById("food-search-input");
  if (searchInput) {
    searchInput.placeholder = STATE.lang === 'hi' ? "खाना खोजें... / Search..." : "Search food items...";
  }

  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.innerHTML = STATE.lang === 'hi' 
      ? '<span class="flag-icon">🇬🇧</span> <span class="lang-text">English</span>' 
      : '<span class="flag-icon">🇮🇳</span> <span class="lang-text">हिंदी (Hindi)</span>';
  }
}

function toggleLanguage() {
  STATE.lang = STATE.lang === 'hi' ? 'en' : 'hi';
  localStorage.setItem("mv_pos_lang", STATE.lang);
  applyTranslations();
  
  // Reload welcome screen staff list in new language
  loadStaffSelectionList();
  
  if (STATE.activeStaff) {
    // Update cashier name badge
    const staffName = STATE.lang === 'hi' ? STATE.activeStaff.nameHi : STATE.activeStaff.nameEn;
    const activeStaffNameElem = document.getElementById("active-staff-name");
    if (activeStaffNameElem) activeStaffNameElem.textContent = staffName;
    
    // Update PIN welcome view label
    const pinStaffNameElem = document.getElementById("pin-screen-staff-name");
    if (pinStaffNameElem) pinStaffNameElem.textContent = staffName;
    
    renderFoodGrid();
    renderCart();
  }
}

function showScreen(screenId) {
  document.querySelectorAll(".screen-section").forEach(s => s.classList.add("hidden"));
  const target = document.getElementById(screenId);
  if (target) target.classList.remove("hidden");

  const logoutBtn = document.getElementById("logout-btn");
  if (screenId === 'screen-staff-select') {
    logoutBtn.classList.add("hidden");
  } else {
    logoutBtn.classList.remove("hidden");
  }
}

function loadStaffSelectionList() {
  const staffList = window.DB.get("staff") || [];
  const grid = document.getElementById("staff-buttons-grid");
  grid.innerHTML = "";
  
  staffList.forEach(st => {
    const card = document.createElement("div");
    card.className = "staff-select-card";
    card.onclick = () => loginAsStaff(st);
    
    const staffName = STATE.lang === 'hi' ? st.nameHi : st.nameEn;
    
    card.innerHTML = `
      <div class="staff-card-avatar">🧑‍🍳</div>
      <div class="staff-card-name">${staffName}</div>
    `;
    grid.appendChild(card);
  });
}

function loginAsStaff(staffObj) {
  STATE.activeStaff = staffObj;
  const staffName = STATE.lang === 'hi' ? staffObj.nameHi : staffObj.nameEn;
  document.getElementById("pin-screen-staff-name").textContent = staffName;
  document.getElementById("staff-pin-input").value = "";
  updatePinDots(0);
  
  showScreen('screen-staff-pin');
  setTimeout(() => {
    document.getElementById("staff-pin-input").focus();
  }, 100);
}

function logout() {
  STATE.activeStaff = null;
  STATE.cart = [];
  showScreen('screen-staff-select');
  loadStaffSelectionList();
}

function pressKey(key) {
  const pinInput = document.getElementById("staff-pin-input");
  let val = pinInput.value;
  
  if (key === 'C') {
    val = "";
  } else if (key === 'OK') {
    verifyStaffPIN();
    return;
  } else {
    if (val.length < 4) val += key;
  }
  
  pinInput.value = val;
  updatePinDots(pinInput.value.length);
}

document.getElementById("staff-pin-input").addEventListener("input", (e) => {
  updatePinDots(e.target.value.length);
  if (e.target.value.length === 4) {
    verifyStaffPIN();
  }
});

function updatePinDots(length) {
  const dots = document.querySelectorAll(".pin-dot");
  dots.forEach((dot, index) => {
    if (index < length) dot.classList.add("filled");
    else dot.classList.remove("filled");
  });
}

function verifyStaffPIN() {
  const enteredPin = document.getElementById("staff-pin-input").value;
  if (enteredPin === STATE.activeStaff.pin) {
    const staffName = STATE.lang === 'hi' ? STATE.activeStaff.nameHi : STATE.activeStaff.nameEn;
    document.getElementById("active-staff-name").textContent = staffName;
    document.getElementById("food-search-input").value = "";
    
    document.querySelectorAll("#category-tabs .tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelector("#category-tabs .tab-btn[data-category='all']").classList.add("active");
    
    renderFoodGrid();
    renderCart();
    showScreen('screen-staff-pos');
  } else {
    alert(STATE.lang === 'hi' ? "गलत सुरक्षा पिन!" : "Invalid PIN! Please check and try again.");
    document.getElementById("staff-pin-input").value = "";
    updatePinDots(0);
  }
}

// POS grid render
function renderFoodGrid(filteredList = null) {
  const menu = filteredList || window.DB.get("menu") || [];
  const grid = document.getElementById("food-items-grid");
  grid.innerHTML = "";
  
  menu.forEach(item => {
    const cartItem = STATE.cart.find(c => c.id === item.id);
    const qty = cartItem ? cartItem.quantity : 0;
    
    const card = document.createElement("div");
    card.className = "food-card";
    
    const name = STATE.lang === 'hi' ? item.nameHi : item.nameEn;
    const subtitle = STATE.lang === 'hi' ? item.nameEn : item.nameHi;
    
    let customPriceBadge = "";
    if (cartItem && cartItem.customPrice !== undefined) {
      customPriceBadge = `<span class="card-custom-price-badge" onclick="openItemCustomPriceModal('${item.id}')">₹ Cust</span>`;
    }
    
    const imageHtml = item.image.includes("/") 
      ? `<img src="${item.image}" alt="${name}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">` 
      : item.image;
    
    card.innerHTML = `
      ${customPriceBadge}
      <div class="food-image-badge">${imageHtml}</div>
      <div class="food-card-names">
        <h4>${name}</h4>
        <p>${subtitle}</p>
      </div>
      <div class="food-card-price">₹${item.price} <span style="font-size:0.75rem; font-weight:normal; color:var(--text-muted);">/ ${item.unit}</span></div>
      
      ${qty > 0 ? `
        <div class="qty-adjuster">
          <button class="qty-btn minus-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
          <span class="qty-number">${qty}</span>
          <button class="qty-btn plus-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
        </div>
      ` : `
        <button class="card-add-btn" onclick="addToCart('${item.id}')">+ जोड़ें</button>
      `}
    `;
    grid.appendChild(card);
  });
}

function filterCategory(category) {
  document.querySelectorAll("#category-tabs .tab-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.querySelector(`#category-tabs .tab-btn[data-category='${category}']`);
  if (activeBtn) activeBtn.classList.add("active");
  filterFoodItems();
}

function filterFoodItems() {
  const searchText = document.getElementById("food-search-input").value.toLowerCase();
  const activeTabBtn = document.querySelector("#category-tabs .tab-btn.active");
  const category = activeTabBtn ? activeTabBtn.getAttribute("data-category") : 'all';
  
  const menu = window.DB.get("menu") || [];
  const filtered = menu.filter(item => {
    const matchesSearch = item.nameEn.toLowerCase().includes(searchText) || item.nameHi.toLowerCase().includes(searchText);
    const matchesCategory = category === 'all' || item.category === category;
    return matchesSearch && matchesCategory;
  });
  
  renderFoodGrid(filtered);
}

function addToCart(foodId) {
  const menu = window.DB.get("menu") || [];
  const foodItem = menu.find(m => m.id === foodId);
  if (foodItem) {
    STATE.cart.push({ ...foodItem, quantity: 1 });
    renderFoodGrid();
    renderCart();
  }
}

function changeCartQty(foodId, change) {
  const idx = STATE.cart.findIndex(c => c.id === foodId);
  if (idx !== -1) {
    STATE.cart[idx].quantity += change;
    if (STATE.cart[idx].quantity <= 0) STATE.cart.splice(idx, 1);
    renderFoodGrid();
    renderCart();
  }
}

function clearCart() {
  STATE.cart = [];
  renderFoodGrid();
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-items-list");
  cartList.innerHTML = "";
  
  if (STATE.cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart-message">
        <p data-translate="empty_cart">${STATE.lang === 'hi' ? 'कोई सामान नहीं चुना गया है।' : 'Your cart is empty.'}</p>
        <span>🛒</span>
      </div>
    `;
    document.getElementById("cart-original-total").textContent = "₹0.00";
    document.getElementById("cart-discount-row").classList.add("hidden");
    document.getElementById("cart-extra-row").classList.add("hidden");
    document.getElementById("cart-net-total").textContent = "₹0.00";
    return;
  }
  
  let originalTotal = 0;
  let netTotal = 0;
  let totalDiscount = 0;
  let totalExtra = 0;
  
  STATE.cart.forEach((item, index) => {
    const itemPrice = item.customPrice !== undefined ? item.customPrice : item.price;
    const rowTotal = itemPrice * item.quantity;
    originalTotal += item.price * item.quantity;
    netTotal += rowTotal;
    
    let discountText = "";
    if (item.customPrice !== undefined) {
      const diff = item.customPrice - item.price;
      if (diff < 0) {
        totalDiscount += Math.abs(diff) * item.quantity;
        discountText = `<span class="cart-item-discount-label green-text" style="background-color:var(--success-light)">-${Math.abs(diff) * item.quantity} (${item.reason})</span>`;
      } else if (diff > 0) {
        totalExtra += diff * item.quantity;
        discountText = `<span class="cart-item-discount-label gold-text" style="background-color:var(--gold-light)">+${diff * item.quantity} (${item.reason})</span>`;
      }
    }
    
    const name = STATE.lang === 'hi' ? item.nameHi : item.nameEn;
    
    const imageHtml = item.image.includes("/") 
      ? `<img src="${item.image}" alt="" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">` 
      : item.image;
      
    const cartRow = document.createElement("div");
    cartRow.className = "cart-item";
    cartRow.innerHTML = `
      <div class="cart-item-badge">${imageHtml}</div>
      <div class="cart-item-details">
        <h5>${name}</h5>
        <p>₹${itemPrice} x ${item.quantity} ${item.unit} ${discountText}</p>
      </div>
      <div class="cart-item-totals">
        <div class="cart-item-price">₹${rowTotal}</div>
        <button style="background:transparent; font-size:0.75rem; color:var(--text-muted); cursor:pointer;" onclick="openItemCustomPriceModal('${item.id}')">✏️ Edit Rate</button>
      </div>
    `;
    cartList.appendChild(cartRow);
  });
  
  document.getElementById("cart-original-total").textContent = "₹" + originalTotal.toFixed(2);
  
  if (totalDiscount > 0) {
    document.getElementById("cart-discount-row").classList.remove("hidden");
    document.getElementById("cart-discount-total").textContent = "-₹" + totalDiscount.toFixed(2);
  } else {
    document.getElementById("cart-discount-row").classList.add("hidden");
  }
  
  if (totalExtra > 0) {
    document.getElementById("cart-extra-row").classList.remove("hidden");
    document.getElementById("cart-extra-total").textContent = "+₹" + totalExtra.toFixed(2);
  } else {
    document.getElementById("cart-extra-row").classList.add("hidden");
  }
  
  document.getElementById("cart-net-total").textContent = "₹" + netTotal.toFixed(2);
}

function openGlobalCustomPriceModal() {
  if (STATE.cart.length === 0) {
    alert(STATE.lang === 'hi' ? "कृपया पहले कार्ट में कोई आइटम जोड़ें!" : "Please add items to your cart first!");
    return;
  }
  openItemCustomPriceModal(STATE.cart[STATE.cart.length - 1].id);
}

function openItemCustomPriceModal(itemId) {
  const index = STATE.cart.findIndex(c => c.id === itemId);
  if (index !== -1) {
    STATE.selectedCartItemIndex = index;
    const item = STATE.cart[index];
    
    document.getElementById("cp-original-price").textContent = "₹" + item.price;
    document.getElementById("cp-new-price-input").value = item.customPrice !== undefined ? item.customPrice : item.price;
    document.getElementById("cp-discount-display").classList.add("hidden");
    document.getElementById("cp-extra-display").classList.add("hidden");
    
    document.getElementById("cp-reason-select").selectedIndex = 0;
    if (item.reason) document.getElementById("cp-reason-select").value = item.reason;
    
    calculateCustomPriceDiff();
    document.getElementById("custom-price-modal").classList.remove("hidden");
  }
}

function closeCustomPriceModal() {
  document.getElementById("custom-price-modal").classList.add("hidden");
}

function calculateCustomPriceDiff() {
  const origPrice = STATE.cart[STATE.selectedCartItemIndex].price;
  const newPrice = parseFloat(document.getElementById("cp-new-price-input").value) || 0;
  const diff = newPrice - origPrice;
  
  const discountDisplay = document.getElementById("cp-discount-display");
  const extraDisplay = document.getElementById("cp-extra-display");
  
  if (diff < 0) {
    discountDisplay.classList.remove("hidden");
    extraDisplay.classList.add("hidden");
    document.getElementById("cp-discount-val").textContent = "₹" + Math.abs(diff);
  } else if (diff > 0) {
    extraDisplay.classList.remove("hidden");
    discountDisplay.classList.add("hidden");
    document.getElementById("cp-extra-val").textContent = "₹" + diff;
  } else {
    discountDisplay.classList.add("hidden");
    extraDisplay.classList.add("hidden");
  }
}

function saveCustomPrice() {
  const newPrice = parseFloat(document.getElementById("cp-new-price-input").value);
  const reason = document.getElementById("cp-reason-select").value;
  
  if (isNaN(newPrice) || newPrice < 0) {
    alert("Please enter a valid price.");
    return;
  }
  
  const item = STATE.cart[STATE.selectedCartItemIndex];
  if (newPrice === item.price) {
    delete item.customPrice;
    delete item.reason;
  } else {
    item.customPrice = newPrice;
    item.reason = reason;
  }
  
  closeCustomPriceModal();
  renderFoodGrid();
  renderCart();
}

// Payment modal
function openPaymentModal() {
  if (STATE.cart.length === 0) return;
  
  let originalTotal = 0;
  let netTotal = 0;
  let discount = 0;
  let extra = 0;
  
  STATE.cart.forEach(item => {
    const price = item.customPrice !== undefined ? item.customPrice : item.price;
    originalTotal += item.price * item.quantity;
    netTotal += price * item.quantity;
  });
  
  const diff = netTotal - originalTotal;
  if (diff < 0) discount = Math.abs(diff);
  else if (diff > 0) extra = diff;
  
  document.getElementById("pay-modal-total").textContent = "₹" + netTotal.toFixed(2);
  document.getElementById("pay-modal-original").textContent = "₹" + originalTotal.toFixed(2);
  document.getElementById("pay-modal-discount").textContent = "-₹" + discount.toFixed(2);
  document.getElementById("pay-modal-extra").textContent = "+₹" + extra.toFixed(2);
  
  document.getElementById("customer-paid-input").value = netTotal.toFixed(2);
  selectPaymentMode('Cash');
  calculateBalance();
  
  document.getElementById("payment-modal").classList.remove("hidden");
}

function closePaymentModal() {
  document.getElementById("payment-modal").classList.add("hidden");
}

function selectPaymentMode(mode) {
  STATE.currentPaymentMode = mode;
  document.querySelectorAll(".pay-mode-btn").forEach(b => b.classList.remove("active"));
  if (mode === 'Cash') document.getElementById("pm-cash").classList.add("active");
  if (mode === 'UPI') document.getElementById("pm-upi").classList.add("active");
  if (mode === 'Card') document.getElementById("pm-card").classList.add("active");
}

function pressPaidKey(key) {
  const paidInput = document.getElementById("customer-paid-input");
  let val = paidInput.value;
  if (key === 'C') val = "";
  else if (key === '.') {
    if (!val.includes('.')) val += '.';
  } else val += key;
  paidInput.value = val;
  calculateBalance();
}

function quickPaidAmount(val) {
  const paidInput = document.getElementById("customer-paid-input");
  let billTotal = 0;
  STATE.cart.forEach(item => {
    const price = item.customPrice !== undefined ? item.customPrice : item.price;
    billTotal += price * item.quantity;
  });
  
  if (val === 'exact') paidInput.value = billTotal.toFixed(2);
  else {
    let currentPaid = parseFloat(paidInput.value) || 0;
    currentPaid += val;
    paidInput.value = currentPaid.toFixed(2);
  }
  calculateBalance();
}

function calculateBalance() {
  let billTotal = 0;
  STATE.cart.forEach(item => {
    const price = item.customPrice !== undefined ? item.customPrice : item.price;
    billTotal += price * item.quantity;
  });
  
  const customerPaid = parseFloat(document.getElementById("customer-paid-input").value) || 0;
  const diff = customerPaid - billTotal;
  
  const returnSpan = document.getElementById("pay-calc-return");
  const dueSpan = document.getElementById("pay-calc-due");
  
  if (diff > 0) {
    returnSpan.textContent = "₹" + diff.toFixed(2);
    dueSpan.textContent = "₹0.00";
  } else if (diff < 0) {
    dueSpan.textContent = "₹" + Math.abs(diff).toFixed(2);
    returnSpan.textContent = "₹0.00";
  } else {
    returnSpan.textContent = "₹0.00";
    dueSpan.textContent = "₹0.00";
  }
}

function confirmPaymentCheckout() {
  let originalTotal = 0;
  let netTotal = 0;
  let discount = 0;
  let extra = 0;
  let discountReason = "";
  
  STATE.cart.forEach(item => {
    const price = item.customPrice !== undefined ? item.customPrice : item.price;
    originalTotal += item.price * item.quantity;
    netTotal += price * item.quantity;
    if (item.reason) discountReason = item.reason;
  });
  
  const diffTotal = netTotal - originalTotal;
  if (diffTotal < 0) discount = Math.abs(diffTotal);
  if (diffTotal > 0) extra = diffTotal;
  
  const customerPaid = parseFloat(document.getElementById("customer-paid-input").value) || 0;
  const balance = Math.max(0, customerPaid - netTotal);
  const due = Math.max(0, netTotal - customerPaid);
  
  const orders = window.DB.get("orders") || [];
  const nextOrderNo = "ORD" + (orders.length + 1001);
  
  const now = new Date();
  const formatTime = (d) => d.toTimeString().split(' ')[0].substring(0, 5);
  const formatDate = (d) => d.toISOString().split('T')[0];
  
  const newOrder = {
    orderNo: nextOrderNo,
    date: formatDate(now),
    time: formatTime(now),
    timestamp: now.getTime(),
    staff: STATE.lang === 'hi' ? STATE.activeStaff.nameHi : STATE.activeStaff.nameEn,
    items: STATE.cart.map(item => ({
      id: item.id,
      nameEn: item.nameEn,
      nameHi: item.nameHi,
      price: item.price,
      customPrice: item.customPrice,
      quantity: item.quantity,
      unit: item.unit
    })),
    originalPrice: originalTotal,
    finalPrice: netTotal,
    discount: discount,
    extraAmount: extra,
    paymentMode: STATE.currentPaymentMode,
    customerPaid: customerPaid,
    balance: balance,
    dueAmount: due,
    reason: discountReason
  };
  
  orders.push(newOrder);
  window.DB.set("orders", orders);
  
  const staff = window.DB.get("staff") || [];
  const sIdx = staff.findIndex(s => s.id === STATE.activeStaff.id);
  if (sIdx !== -1) {
    staff[sIdx].sales = (staff[sIdx].sales || 0) + netTotal;
    window.DB.set("staff", staff);
  }
  
  deductRawMaterialsForCart();
  closePaymentModal();
  renderReceipt(newOrder);
  clearCart();
}

function deductRawMaterialsForCart() {
  const raw = window.DB.get("raw") || [];
  
  STATE.cart.forEach(cartItem => {
    if (cartItem.id.includes("rice")) {
      const match = raw.find(r => r.id === "rice");
      if (match) match.quantity = Math.max(0, match.quantity - (0.2 * cartItem.quantity));
    }
    if (cartItem.id.includes("samosa")) {
      const potato = raw.find(r => r.id === "potato");
      if (potato) potato.quantity = Math.max(0, potato.quantity - (0.05 * cartItem.quantity));
      const flour = raw.find(r => r.id === "wheat_flour");
      if (flour) flour.quantity = Math.max(0, flour.quantity - (0.03 * cartItem.quantity));
    }
    if (cartItem.id.includes("paneer")) {
      const paneer = raw.find(r => r.id === "paneer");
      if (paneer) paneer.quantity = Math.max(0, paneer.quantity - (0.1 * cartItem.quantity));
    }
    if (cartItem.id.includes("milk") || cartItem.id.includes("rasmalai")) {
      const milk = raw.find(r => r.id === "milk");
      if (milk) milk.quantity = Math.max(0, milk.quantity - (0.15 * cartItem.quantity));
    }
  });
  
  window.DB.set("raw", raw);
}

function renderReceipt(order) {
  const printableDiv = document.getElementById("printable-receipt");
  let itemsHtml = "";
  
  order.items.forEach(item => {
    const rate = item.customPrice !== undefined ? item.customPrice : item.price;
    const name = STATE.lang === 'hi' ? item.nameHi : item.nameEn;
    itemsHtml += `
      <tr>
        <td style="padding: 4px 0;">${name}</td>
        <td style="text-align:center;">₹${rate}</td>
        <td style="text-align:center;">${item.quantity}</td>
        <td style="text-align:right;">₹${rate * item.quantity}</td>
      </tr>
    `;
  });
  
  printableDiv.innerHTML = `
    <div style="text-align:center; border-bottom:1px dashed #000; padding-bottom:10px; margin-bottom:10px;">
      <h3 style="margin:0; font-size:1.15rem;">मनोज वैष्णव होटल एवं मिष्ठान भंडार</h3>
      <p style="margin:2px 0; font-size:0.75rem;">Manoj Vaishnav Hotel & Mishthan Bhandar</p>
      <p style="margin:2px 0; font-size:0.75rem;">मो: 9876543210 | Main Road, India</p>
    </div>
    <div style="font-size:0.8rem; border-bottom:1px dashed #000; padding-bottom:6px; margin-bottom:10px;">
      <b>Receipt No:</b> ${order.orderNo}<br>
      <b>Date/Time:</b> ${order.date} ${order.time}<br>
      <b>Cashier:</b> ${order.staff}<br>
      <b>Payment Mode:</b> ${order.paymentMode}
    </div>
    <table style="width:100%; border-collapse:collapse; font-size:0.8rem; border-bottom:1px dashed #000; margin-bottom:8px;">
      <thead>
        <tr style="border-bottom:1px solid #000;">
          <th style="text-align:left; padding-bottom:4px;">Item</th>
          <th style="text-align:center; padding-bottom:4px;">Rate</th>
          <th style="text-align:center; padding-bottom:4px;">Qty</th>
          <th style="text-align:right; padding-bottom:4px;">Total</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    <div style="font-size:0.85rem; border-bottom:1px dashed #000; padding-bottom:8px; margin-bottom:8px; display:flex; flex-direction:column; align-items:flex-end;">
      <div>Original: ₹${order.originalPrice.toFixed(2)}</div>
      ${order.discount > 0 ? `<div style="color:green;">Discount (-): ₹${order.discount.toFixed(2)}</div>` : ''}
      ${order.extraAmount > 0 ? `<div>Extra: +₹${order.extraAmount.toFixed(2)}</div>` : ''}
      <div style="font-size:1.05rem; font-weight:bold; margin-top:4px;">Total Paid: ₹${order.finalPrice.toFixed(2)}</div>
    </div>
    <div style="font-size:0.8rem; text-align:right;">
      <b>Customer Paid:</b> ₹${order.customerPaid.toFixed(2)}<br>
      <b>Balance Return:</b> ₹${order.balance.toFixed(2)}<br>
      ${order.dueAmount > 0 ? `<b style="color:red;">Remaining Due (उधार): ₹${order.dueAmount.toFixed(2)}</b>` : ''}
    </div>
    <div style="text-align:center; margin-top:20px; font-weight:bold; font-size:0.9rem;">
      ${STATE.lang === 'hi' ? 'धन्यवाद! फिर पधारें।' : 'Thank you! Visit again.'}
    </div>
  `;
  document.getElementById("receipt-modal").classList.remove("hidden");
}

function closeReceiptModal() {
  document.getElementById("receipt-modal").classList.add("hidden");
}

function printReceiptContent() {
  window.print();
}

function showFileProtocolWarning() {
  const banner = document.createElement("div");
  banner.className = "file-warning-banner";
  banner.style.cssText = `
    background-color: #ff9800;
    color: white;
    text-align: center;
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: 600;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-sizing: border-box;
  `;
  banner.innerHTML = `
    <span>⚠️</span>
    <span><strong>ध्यान दें (Warning):</strong> आप इसे फ़ाइल से चला रहे हैं। कर्मचारी और मालिक के बीच डेटा सिंक नहीं होगा। कृपया <strong>run_network_server.bat</strong> पर डबल-क्लिक करके सर्वर शुरू करें और <strong>http://localhost:8080</strong> खोलें।</span>
    <button onclick="this.parentElement.remove()" style="background:none; border:none; color:white; cursor:pointer; font-size:1.1rem; margin-left:15px; font-weight:bold;">✖</button>
  `;
  document.body.appendChild(banner);
  document.body.style.paddingTop = "40px";
}

function startDatabasePolling() {
  setInterval(() => {
    // Only poll if the staff select or POS screen is active
    if (document.getElementById("screen-staff-select").classList.contains("hidden") === false) {
      loadStaffSelectionList();
    }
    if (document.getElementById("screen-staff-pos").classList.contains("hidden") === false) {
      renderFoodGrid();
    }
  }, 8000); // Poll every 8 seconds
}
