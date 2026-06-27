// Manoj Vaishnav Hotel & Mishthan Bhandar - Owner Control Panel Logic (Owner Only)

const TRANSLATIONS = {
  hi: {
    owner_login_title: "मालिक लॉगिन",
    owner_login_subtitle: "आगे बढ़ने के लिए पासवर्ड डालें",
    login_btn: "प्रवेश करें ➔",
    wrong_password: "गलत पासवर्ड! कृपया पुनः प्रयास करें।",
    owner_badge: "मालिक डैशबोर्ड 👑",
    nav_kpi: "डैशबोर्ड Summary",
    nav_menu: "मेनू कार्ड प्रबंधन",
    nav_raw: "कच्चा माल (Stock)",
    nav_suppliers: "आपूर्तिकर्ता (Suppliers)",
    nav_staff: "कर्मचारी प्रबंधन",
    nav_history: "बिक्री इतिहास",
    nav_reports: "रिपोर्ट जनरेटर",
    nav_settings: "बैकअप व सेटिंग्स",
    nav_goto_pos: "स्टाफ टर्मिनल (Staff POS) 🛒",
    panel_kpi_title: "आज की रिपोर्ट (Today's Summary)",
    kpi_today_sales: "आज की कुल बिक्री",
    kpi_today_online: "ऑनलाइन (UPI) भुगतान",
    kpi_today_offline: "ऑफ़लाइन (नकद) बिक्री",
    kpi_today_orders: "कुल ऑर्डर्स आज",
    kpi_today_discount: "दी गई कुल छूट",
    kpi_today_extra: "प्राप्त अतिरिक्त राशि",
    kpi_today_net: "शुद्ध आय (Net)",
    sales_trend_title: "साप्ताहिक बिक्री रुझान (Weekly Sales Trend)",
    staff_sales_title: "कर्मचारी-वार बिक्री (Staff Performance)",
    panel_menu_title: "मेनू प्रबंधन (Menu)",
    add_item_btn: "नया आइटम जोड़ें ➕",
    th_photo: "फोटो/आइकन",
    th_name_hi: "हिंदी नाम",
    th_name_en: "अंग्रेजी नाम",
    th_price: "मूल्य (₹)",
    th_category: "श्रेणी",
    th_unit: "इकाई (Unit)",
    th_actions: "कार्रवाई",
    panel_raw_title: "कच्चा माल प्रबंधन (Inventory)",
    add_raw_btn: "नया कच्चा माल ➕",
    panel_suppliers_title: "आपूर्तिकर्ता (Suppliers)",
    add_supplier_btn: "नया आपूर्तिकर्ता ➕",
    th_sup_name: "आपूर्तिकर्ता नाम",
    th_sup_phone: "मोबाइल नंबर",
    th_sup_due: "बकाया भुगतान (Due)",
    th_sup_notes: "टिप्पणी",
    panel_staff_title: "कर्मचारी प्रबंधन (Staff)",
    add_staff_btn: "नया कर्मचारी ➕",
    th_staff_name: "कर्मचारी नाम",
    th_staff_role: "भूमिका",
    th_staff_pin: "पिन (PIN)",
    th_staff_sales: "कुल बिक्री योगदान",
    panel_history_title: "बिक्री इतिहास (Sales Log)",
    th_ord_no: "ऑर्डर नंबर",
    th_ord_date: "दिनांक व समय",
    th_ord_staff: "स्टाफ नाम",
    th_ord_items: "सामान",
    th_ord_orig: "मूल मूल्य",
    th_ord_final: "अंतिम बिल",
    th_ord_discount: "छूट/अतिरिक्त",
    th_ord_mode: "माध्यम",
    th_ord_paid: "प्राप्त नकद",
    th_ord_due: "बकाया (Due)",
    panel_reports_title: "रिपोर्ट जनरेटर (Reports)",
    opt_rep_daily: "दैनिक रिपोर्ट (Daily Report)",
    opt_rep_weekly: "साप्ताहिक रिपोर्ट (Weekly Report)",
    opt_rep_monthly: "मासिक रिपोर्ट (Monthly Report)",
    opt_rep_staff: "कर्मचारी बिक्री रिपोर्ट (Staff Sales)",
    opt_rep_discounts: "छूट रिपोर्ट (Discount Report)",
    opt_rep_purchase: "खरीद व खर्च (Expense Report)",
    opt_rep_profit: "लाभ और हानि (P&L Statement)",
    panel_settings_title: "सिस्टम सेटिंग्स व बैकअप",
    set_pass_title: "मालिक का नया पासवर्ड सेट करें",
    save_btn: "सुरक्षित करें ✓",
    set_backup_title: "डेटा बैकअप (Backup Database)",
    set_backup_desc: "सुरक्षा के लिए अपनी पूरी बिक्री और स्टॉक का बैकअप डाउनलोड करें।",
    set_reset_title: "फैक्ट्री रीसेट (Danger Area)",
    set_reset_desc: "चेतावनी! यह आपकी सभी बिक्री, स्टॉक, स्टाफ और इतिहास को हमेशा के लिए मिटा देगा।",
    h_purchase_details: "खरीद विवरण (Purchase Details)",
    receipt_title: "रसीद (Manoj Vaishnav Hotel)",
    receipt_greet: "धन्यवाद! फिर पधारें।"
  },
  en: {
    owner_login_title: "Owner Authentication",
    owner_login_subtitle: "Please enter your management password",
    login_btn: "Authenticate ➔",
    wrong_password: "Incorrect Password! Please try again.",
    owner_badge: "Owner Dashboard 👑",
    nav_kpi: "Summary Stats",
    nav_menu: "Menu Management",
    nav_raw: "Raw Stock",
    nav_suppliers: "Suppliers List",
    nav_staff: "Manage Staff",
    nav_history: "Sales History",
    nav_reports: "Generate Reports",
    nav_settings: "Backup & Restore",
    nav_goto_pos: "Staff POS Terminal 🛒",
    panel_kpi_title: "Today's Performance Analytics",
    kpi_today_sales: "Today's Gross Sales",
    kpi_today_online: "Online UPI Collection",
    kpi_today_offline: "Offline Cash Collection",
    kpi_today_orders: "Total Orders Today",
    kpi_today_discount: "Total Discounts Given",
    kpi_today_extra: "Extra Tip/Roundup",
    kpi_today_net: "Today's Net Income",
    sales_trend_title: "Weekly Revenue Analytics",
    staff_sales_title: "Staff-wise Sales Contribution",
    panel_menu_title: "Restaurant Menu",
    add_item_btn: "Add Menu Item ➕",
    th_photo: "Icon/Photo",
    th_name_hi: "Hindi Name",
    th_name_en: "English Name",
    th_price: "Price (₹)",
    th_category: "Category",
    th_unit: "Unit",
    th_actions: "Actions",
    panel_raw_title: "Raw Material Inventory",
    add_raw_btn: "Add Material ➕",
    panel_suppliers_title: "Suppliers",
    add_supplier_btn: "Add Supplier ➕",
    th_sup_name: "Supplier Name",
    th_sup_phone: "Contact Phone",
    th_sup_due: "Due Balance (₹)",
    th_sup_notes: "Notes",
    panel_staff_title: "Staff Directory",
    add_staff_btn: "Add Staff Member ➕",
    th_staff_name: "Staff Name",
    th_staff_role: "Role",
    th_staff_pin: "PIN Code",
    th_staff_sales: "Sales Contribution",
    panel_history_title: "All Sales Transactions",
    th_ord_no: "Order No.",
    th_ord_date: "Date & Time",
    th_ord_staff: "Operator",
    th_ord_items: "Items Ordered",
    th_ord_orig: "Orig Total",
    th_ord_final: "Final Paid",
    th_ord_discount: "Discount/Extra",
    th_ord_mode: "Pay Mode",
    th_ord_paid: "Paid Cash",
    th_ord_due: "Due Balance",
    panel_reports_title: "Restaurant Reports",
    opt_rep_daily: "Daily Sales Report",
    opt_rep_weekly: "Weekly Business Report",
    opt_rep_monthly: "Monthly Profit Report",
    opt_rep_staff: "Staff Sales Contribution",
    opt_rep_discounts: "Discounts & Dues Logs",
    opt_rep_purchase: "Purchases & Expenses Log",
    opt_rep_profit: "Profit & Loss Statement",
    panel_settings_title: "Settings & System Backup",
    set_pass_title: "Change Owner Dashboard Password",
    save_btn: "Save Changes ✓",
    set_backup_title: "Local Database Backup",
    set_backup_desc: "Export database as JSON to backup all sales, raw stock and configurations.",
    set_reset_title: "System Factory Reset",
    set_reset_desc: "WARNING! This clears all historical database records and returns to default.",
    h_purchase_details: "Material Purchase Details",
    receipt_title: "Invoice - Manoj Vaishnav Hotel",
    receipt_greet: "Thank you! Visit again."
  }
};

let STATE = {
  currentRole: 'owner',
  lang: 'hi',
  activeDashboardTab: 'tab-kpi',
  salesChartInstance: null
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("mv_pos_lang");
  if (savedLang) STATE.lang = savedLang;
  applyTranslations();
  showScreen('screen-owner-login');
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

  const searchInput = document.getElementById("history-search-input");
  if (searchInput) {
    searchInput.placeholder = STATE.lang === 'hi' ? "ऑर्डर न. या स्टाफ... / Search..." : "Search Order No. or Staff...";
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
  
  if (document.getElementById("screen-owner-dashboard").classList.contains("hidden") === false) {
    renderMenuTable();
    renderRawMaterialsGrid();
    renderSuppliersTable();
    renderStaffTable();
    renderSalesHistoryTable();
    generateReport();
  }
}

function showScreen(screenId) {
  document.querySelectorAll(".screen-section").forEach(s => s.classList.add("hidden"));
  const target = document.getElementById(screenId);
  if (target) target.classList.remove("hidden");

  const logoutBtn = document.getElementById("logout-btn");
  if (screenId === 'screen-owner-login') {
    logoutBtn.classList.add("hidden");
  } else {
    logoutBtn.classList.remove("hidden");
  }
}

function verifyOwnerPassword() {
  const password = document.getElementById("owner-pass-input").value;
  const dbPassword = window.DB.get("password");
  
  if (password === dbPassword) {
    showScreen('screen-owner-dashboard');
    switchDashboardTab(STATE.activeDashboardTab);
  } else {
    document.getElementById("owner-login-error").classList.remove("hidden");
  }
}

function logout() {
  document.getElementById("owner-pass-input").value = "";
  document.getElementById("owner-login-error").classList.add("hidden");
  showScreen('screen-owner-login');
}

function switchDashboardTab(tabId) {
  STATE.activeDashboardTab = tabId;
  
  document.querySelectorAll(".dashboard-sidebar .nav-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabId) item.classList.add("active");
  });
  
  document.querySelectorAll(".dashboard-content .dashboard-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  
  const activePanel = document.getElementById(tabId);
  if (activePanel) activePanel.classList.add("active");
  
  if (tabId === 'tab-kpi') loadKPIData();
  else if (tabId === 'tab-menu') renderMenuTable();
  else if (tabId === 'tab-raw') renderRawMaterialsGrid();
  else if (tabId === 'tab-suppliers') renderSuppliersTable();
  else if (tabId === 'tab-staff') renderStaffTable();
  else if (tabId === 'tab-history') renderSalesHistoryTable();
  else if (tabId === 'tab-reports') generateReport();
}

function loadKPIData() {
  const orders = window.DB.get("orders") || [];
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  
  const todayOrders = orders.filter(o => o.date === todayStr);
  
  let salesToday = 0;
  let onlineToday = 0;
  let offlineToday = 0;
  let discountToday = 0;
  let extraToday = 0;
  
  todayOrders.forEach(o => {
    salesToday += o.finalPrice;
    discountToday += o.discount;
    extraToday += o.extraAmount;
    
    if (o.paymentMode === 'UPI' || o.paymentMode === 'Card') onlineToday += o.finalPrice;
    else if (o.paymentMode === 'Cash') offlineToday += o.finalPrice;
  });
  
  const expenses = window.DB.get("expenses") || [];
  const purchases = window.DB.get("purchases") || [];
  
  let totalExpenses = 0;
  expenses.forEach(e => { if (e.date === todayStr) totalExpenses += e.amount; });
  purchases.forEach(p => { if (p.date === todayStr) totalExpenses += p.paid; });

  const netIncome = salesToday - totalExpenses;
  
  document.getElementById("kpi-sales").textContent = "₹" + salesToday.toFixed(2);
  document.getElementById("kpi-online").textContent = "₹" + onlineToday.toFixed(2);
  document.getElementById("kpi-offline").textContent = "₹" + offlineToday.toFixed(2);
  document.getElementById("kpi-orders").textContent = todayOrders.length;
  document.getElementById("kpi-discount").textContent = "₹" + discountToday.toFixed(2);
  document.getElementById("kpi-extra").textContent = "₹" + extraToday.toFixed(2);
  document.getElementById("kpi-net").textContent = "₹" + netIncome.toFixed(2);
  
  document.getElementById("kpi-net").className = netIncome < 0 ? "red-text bold-text" : "green-text bold-text";
  
  renderDashboardCharts(orders);
  renderStaffSalesList();
}

function renderDashboardCharts(orders) {
  const dates = [];
  const salesMap = {};
  
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    dates.push(dateStr);
    salesMap[dateStr] = 0;
  }
  
  orders.forEach(o => {
    if (salesMap[o.date] !== undefined) salesMap[o.date] += o.finalPrice;
  });
  
  const chartData = dates.map(dt => salesMap[dt]);
  const formattedLabels = dates.map(dt => {
    const parts = dt.split("-");
    return `${parts[2]}/${parts[1]}`;
  });
  
  const ctx = document.getElementById("salesChart").getContext("2d");
  if (STATE.salesChartInstance) STATE.salesChartInstance.destroy();
  
  STATE.salesChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: formattedLabels,
      datasets: [{
        label: STATE.lang === 'hi' ? 'दैनिक बिक्री (Daily Revenue)' : 'Daily Revenue (₹)',
        data: chartData,
        borderColor: '#D97706',
        backgroundColor: 'rgba(217, 119, 6, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true },
        x: {}
      }
    }
  });
}

function renderStaffSalesList() {
  const staff = window.DB.get("staff") || [];
  const container = document.getElementById("staff-sales-progress-bars");
  container.innerHTML = "";
  
  const totalStaffSales = staff.reduce((acc, s) => acc + (s.sales || 0), 0) || 1;
  staff.forEach(st => {
    const pct = Math.min(100, Math.round((st.sales / totalStaffSales) * 100));
    const row = document.createElement("div");
    row.className = "staff-bar-row";
    const staffName = STATE.lang === 'hi' ? st.nameHi : st.nameEn;
    row.innerHTML = `
      <div class="staff-bar-info">
        <span>🧑‍🍳 ${staffName}</span>
        <span>₹${st.sales} (${pct}%)</span>
      </div>
      <div class="staff-bar-wrapper">
        <div class="staff-bar-fill" style="width: ${pct}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

// Menu card management
function renderMenuTable() {
  const menu = window.DB.get("menu") || [];
  const tbody = document.getElementById("menu-items-table-body");
  tbody.innerHTML = "";
  
  menu.forEach((item, index) => {
    const tr = document.createElement("tr");
    
    const imageHtml = item.image.includes("/") 
      ? `<img src="${item.image}" alt="" style="width:40px; height:40px; object-fit:cover; border-radius:4px; display:block; margin:auto;">` 
      : item.image;
      
    tr.innerHTML = `
      <td><div class="table-photo-badge">${imageHtml}</div></td>
      <td class="bold-text">${item.nameHi}</td>
      <td>${item.nameEn}</td>
      <td class="gold-text bold-text">₹${item.price}</td>
      <td>${item.category.toUpperCase()}</td>
      <td>${item.unit}</td>
      <td>
        <button class="edit-table-btn" onclick="editMenuItem('${item.id}')">✏️ Edit</button>
        <button class="delete-table-btn" onclick="deleteMenuItem('${item.id}')">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openAddMenuModal() {
  document.getElementById("menu-modal-title").textContent = STATE.lang === 'hi' ? "नया मेनू आइटम जोड़ें" : "Add Menu Item";
  document.getElementById("menu-form-id").value = "";
  document.getElementById("menu-form-name-hi").value = "";
  document.getElementById("menu-form-name-en").value = "";
  document.getElementById("menu-form-price").value = "";
  document.getElementById("menu-form-category").selectedIndex = 0;
  document.getElementById("menu-form-unit").selectedIndex = 0;
  document.getElementById("menu-form-image").selectedIndex = 0;
  document.getElementById("menu-modal").classList.remove("hidden");
}

function editMenuItem(id) {
  const menu = window.DB.get("menu");
  const item = menu.find(m => m.id === id);
  if (item) {
    document.getElementById("menu-modal-title").textContent = STATE.lang === 'hi' ? "आइटम बदलें (Edit)" : "Edit Menu Item";
    document.getElementById("menu-form-id").value = item.id;
    document.getElementById("menu-form-name-hi").value = item.nameHi;
    document.getElementById("menu-form-name-en").value = item.nameEn;
    document.getElementById("menu-form-price").value = item.price;
    document.getElementById("menu-form-category").value = item.category;
    document.getElementById("menu-form-unit").value = item.unit;
    document.getElementById("menu-form-image").value = item.image;
    document.getElementById("menu-modal").classList.remove("hidden");
  }
}

function closeMenuModal() {
  document.getElementById("menu-modal").classList.add("hidden");
}

function saveMenuItem() {
  const id = document.getElementById("menu-form-id").value;
  const nameHi = document.getElementById("menu-form-name-hi").value;
  const nameEn = document.getElementById("menu-form-name-en").value;
  const price = parseFloat(document.getElementById("menu-form-price").value);
  const category = document.getElementById("menu-form-category").value;
  const unit = document.getElementById("menu-form-unit").value;
  const image = document.getElementById("menu-form-image").value;
  
  if (!nameHi || !nameEn || isNaN(price)) {
    alert("Please fill all fields!");
    return;
  }
  
  const menu = window.DB.get("menu") || [];
  if (id) {
    const idx = menu.findIndex(m => m.id === id);
    if (idx !== -1) menu[idx] = { id, nameHi, nameEn, price, category, unit, image };
  } else {
    menu.push({ id: "item_" + Date.now(), nameHi, nameEn, price, category, unit, image });
  }
  
  window.DB.set("menu", menu);
  closeMenuModal();
  renderMenuTable();
}

function deleteMenuItem(id) {
  if (confirm("Delete menu item?")) {
    const menu = window.DB.get("menu") || [];
    const filtered = menu.filter(m => m.id !== id);
    window.DB.set("menu", filtered);
    renderMenuTable();
  }
}

// Raw Stock Inventory
function renderRawMaterialsGrid() {
  const rawList = window.DB.get("raw") || [];
  const grid = document.getElementById("raw-materials-grid");
  grid.innerHTML = "";
  
  rawList.forEach(raw => {
    const card = document.createElement("div");
    card.className = "raw-card";
    const isLow = raw.quantity <= raw.minStock;
    const name = STATE.lang === 'hi' ? raw.nameHi : raw.nameEn;
    const sub = STATE.lang === 'hi' ? raw.nameEn : raw.nameHi;
    
    const imageHtml = raw.image.includes("/") 
      ? `<img src="${raw.image}" alt="${name}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">` 
      : raw.image;
      
    card.innerHTML = `
      <div class="raw-card-top">
        <div class="raw-avatar">${imageHtml}</div>
        <div class="raw-title-info">
          <h3>${name}</h3>
          <p>${sub}</p>
        </div>
      </div>
      <div class="raw-stock-indicator ${isLow ? 'raw-low-stock-alert' : ''}">
        <span style="font-size:0.95rem; font-weight:600;">Stock:</span>
        <span class="raw-qty-num">${raw.quantity.toFixed(1)} ${raw.unit}</span>
      </div>
      <button class="add-stock-raw-btn" onclick="openAddStockModal('${raw.id}')">+ Add Stock</button>
    `;
    grid.appendChild(card);
  });
}

function openAddRawModal() {
  document.getElementById("raw-modal-title").textContent = STATE.lang === 'hi' ? "नया कच्चा माल" : "Add Raw Material";
  document.getElementById("raw-form-id").value = "";
  document.getElementById("raw-form-name-hi").value = "";
  document.getElementById("raw-form-name-en").value = "";
  document.getElementById("raw-form-qty").value = "";
  document.getElementById("raw-form-unit").selectedIndex = 0;
  document.getElementById("raw-form-min").value = "10";
  
  populateSupplierDropdown("raw-form-supplier");
  document.getElementById("raw-purchase-fields").classList.remove("hidden");
  document.getElementById("raw-form-bill").value = "";
  document.getElementById("raw-form-paid").value = "";
  document.getElementById("raw-form-notes").value = "";
  document.getElementById("raw-modal").classList.remove("hidden");
}

function openAddStockModal(rawId) {
  const rawList = window.DB.get("raw") || [];
  const rawItem = rawList.find(r => r.id === rawId);
  if (rawItem) {
    document.getElementById("raw-modal-title").textContent = `${STATE.lang === 'hi' ? 'स्टॉक जोड़ें' : 'Add Stock'} - ${STATE.lang === 'hi' ? rawItem.nameHi : rawItem.nameEn}`;
    document.getElementById("raw-form-id").value = rawItem.id;
    document.getElementById("raw-form-name-hi").value = rawItem.nameHi;
    document.getElementById("raw-form-name-en").value = rawItem.nameEn;
    document.getElementById("raw-form-qty").value = "";
    document.getElementById("raw-form-unit").value = rawItem.unit;
    document.getElementById("raw-form-min").value = rawItem.minStock;
    
    populateSupplierDropdown("raw-form-supplier");
    document.getElementById("raw-form-supplier").value = rawItem.supplier || "";
    document.getElementById("raw-purchase-fields").classList.remove("hidden");
    document.getElementById("raw-form-bill").value = "";
    document.getElementById("raw-form-paid").value = "";
    document.getElementById("raw-form-notes").value = "";
    document.getElementById("raw-modal").classList.remove("hidden");
  }
}

function populateSupplierDropdown(elemId) {
  const sups = window.DB.get("suppliers") || [];
  const select = document.getElementById(elemId);
  select.innerHTML = "";
  sups.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.name;
    opt.textContent = s.name;
    select.appendChild(opt);
  });
}

function closeRawModal() {
  document.getElementById("raw-modal").classList.add("hidden");
}

function saveRawMaterial() {
  const id = document.getElementById("raw-form-id").value;
  const nameHi = document.getElementById("raw-form-name-hi").value;
  const nameEn = document.getElementById("raw-form-name-en").value;
  const newQty = parseFloat(document.getElementById("raw-form-qty").value);
  const unit = document.getElementById("raw-form-unit").value;
  const minStock = parseFloat(document.getElementById("raw-form-min").value) || 10;
  const supplierName = document.getElementById("raw-form-supplier").value;
  
  const bill = parseFloat(document.getElementById("raw-form-bill").value) || 0;
  const paid = parseFloat(document.getElementById("raw-form-paid").value) || 0;
  const notes = document.getElementById("raw-form-notes").value;
  
  if (!nameHi || !nameEn || isNaN(newQty)) {
    alert("Please fill name and quantity!");
    return;
  }
  
  const rawList = window.DB.get("raw") || [];
  if (id) {
    const idx = rawList.findIndex(r => r.id === id);
    if (idx !== -1) {
      rawList[idx].quantity += newQty;
      rawList[idx].minStock = minStock;
      rawList[idx].supplier = supplierName;
    }
  } else {
    rawList.push({ id: "raw_" + Date.now(), nameHi, nameEn, quantity: newQty, unit, minStock, image: "📦", supplier: supplierName });
  }
  window.DB.set("raw", rawList);
  
  if (bill > 0) {
    const purchases = window.DB.get("purchases") || [];
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const remainingDue = bill - paid;
    
    purchases.push({ date: dateStr, material: nameEn, qty: newQty + " " + unit, supplier: supplierName, total: bill, paid: paid, due: remainingDue });
    window.DB.set("purchases", purchases);
    
    if (remainingDue > 0) {
      const sups = window.DB.get("suppliers") || [];
      const sIdx = sups.findIndex(s => s.name === supplierName);
      if (sIdx !== -1) {
        sups[sIdx].due = (sups[sIdx].due || 0) + remainingDue;
        window.DB.set("suppliers", sups);
      }
    }
  }
  
  closeRawModal();
  renderRawMaterialsGrid();
}

// Supplier operations
function renderSuppliersTable() {
  const sups = window.DB.get("suppliers") || [];
  const tbody = document.getElementById("suppliers-table-body");
  tbody.innerHTML = "";
  
  sups.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="bold-text">🤝 ${s.name}</td>
      <td>${s.phone}</td>
      <td class="red-text bold-text">₹${s.due}</td>
      <td>${s.notes || ''}</td>
      <td>
        <button class="edit-table-btn" onclick="editSupplier('${s.id}')">✏️ Edit</button>
        <button class="delete-table-btn" onclick="deleteSupplier('${s.id}')">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openAddSupplierModal() {
  document.getElementById("supplier-modal-title").textContent = STATE.lang === 'hi' ? "नया आपूर्तिकर्ता" : "Add Supplier";
  document.getElementById("supplier-form-id").value = "";
  document.getElementById("supplier-form-name").value = "";
  document.getElementById("supplier-form-phone").value = "";
  document.getElementById("supplier-form-due").value = "";
  document.getElementById("supplier-form-notes").value = "";
  document.getElementById("supplier-modal").classList.remove("hidden");
}

function editSupplier(id) {
  const sups = window.DB.get("suppliers") || [];
  const s = sups.find(sup => sup.id === id);
  if (s) {
    document.getElementById("supplier-modal-title").textContent = STATE.lang === 'hi' ? "आपूर्तिकर्ता संपादन" : "Edit Supplier";
    document.getElementById("supplier-form-id").value = s.id;
    document.getElementById("supplier-form-name").value = s.name;
    document.getElementById("supplier-form-phone").value = s.phone;
    document.getElementById("supplier-form-due").value = s.due;
    document.getElementById("supplier-form-notes").value = s.notes;
    document.getElementById("supplier-modal").classList.remove("hidden");
  }
}

function closeSupplierModal() {
  document.getElementById("supplier-modal").classList.add("hidden");
}

function saveSupplier() {
  const id = document.getElementById("supplier-form-id").value;
  const name = document.getElementById("supplier-form-name").value;
  const phone = document.getElementById("supplier-form-phone").value;
  const due = parseFloat(document.getElementById("supplier-form-due").value) || 0;
  const notes = document.getElementById("supplier-form-notes").value;
  
  if (!name) {
    alert("Please fill supplier name!");
    return;
  }
  
  const sups = window.DB.get("suppliers") || [];
  if (id) {
    const idx = sups.findIndex(s => s.id === id);
    if (idx !== -1) sups[idx] = { id, name, phone, due, notes };
  } else {
    sups.push({ id: "sup_" + Date.now(), name, phone, due, notes });
  }
  window.DB.set("suppliers", sups);
  closeSupplierModal();
  renderSuppliersTable();
}

function deleteSupplier(id) {
  if (confirm("Delete supplier?")) {
    const sups = window.DB.get("suppliers") || [];
    const filtered = sups.filter(s => s.id !== id);
    window.DB.set("suppliers", filtered);
    renderSuppliersTable();
  }
}

// Staff Directory setup
function renderStaffTable() {
  const staff = window.DB.get("staff") || [];
  const tbody = document.getElementById("staff-table-body");
  tbody.innerHTML = "";
  
  staff.forEach(s => {
    const tr = document.createElement("tr");
    const staffName = STATE.lang === 'hi' ? s.nameHi : s.nameEn;
    tr.innerHTML = `
      <td class="bold-text">🧑‍🍳 ${staffName}</td>
      <td>${s.role.toUpperCase()}</td>
      <td><code>****</code> (PIN: ${s.pin})</td>
      <td class="green-text bold-text">₹${s.sales || 0}</td>
      <td>
        <button class="edit-table-btn" onclick="editStaff('${s.id}')">✏️ Edit</button>
        <button class="delete-table-btn" onclick="deleteStaff('${s.id}')">🗑️ Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openAddStaffModal() {
  document.getElementById("staff-modal-title").textContent = STATE.lang === 'hi' ? "नया कर्मचारी" : "Add Staff";
  document.getElementById("staff-form-id").value = "";
  document.getElementById("staff-form-name-hi").value = "";
  document.getElementById("staff-form-name-en").value = "";
  document.getElementById("staff-form-pin").value = "";
  document.getElementById("staff-modal").classList.remove("hidden");
}

function editStaff(id) {
  const staff = window.DB.get("staff") || [];
  const s = staff.find(st => st.id === id);
  if (s) {
    document.getElementById("staff-modal-title").textContent = STATE.lang === 'hi' ? "कर्मचारी संपादन" : "Edit Staff";
    document.getElementById("staff-form-id").value = s.id;
    document.getElementById("staff-form-name-hi").value = s.nameHi || "";
    document.getElementById("staff-form-name-en").value = s.nameEn || "";
    document.getElementById("staff-form-pin").value = s.pin;
    document.getElementById("staff-modal").classList.remove("hidden");
  }
}

function closeStaffModal() {
  document.getElementById("staff-modal").classList.add("hidden");
}

function saveStaff() {
  const id = document.getElementById("staff-form-id").value;
  const nameHi = document.getElementById("staff-form-name-hi").value;
  const nameEn = document.getElementById("staff-form-name-en").value;
  const pin = document.getElementById("staff-form-pin").value;
  
  if (!nameHi || !nameEn || pin.length !== 4) {
    alert("Please enter Hindi name, English name, and a 4-digit PIN!");
    return;
  }
  
  const staff = window.DB.get("staff") || [];
  if (id) {
    const idx = staff.findIndex(s => s.id === id);
    if (idx !== -1) {
      staff[idx].nameHi = nameHi;
      staff[idx].nameEn = nameEn;
      staff[idx].pin = pin;
    }
  } else {
    staff.push({ id: "staff_" + Date.now(), nameHi, nameEn, role: "staff", pin, sales: 0 });
  }
  window.DB.set("staff", staff);
  closeStaffModal();
  renderStaffTable();
}

function deleteStaff(id) {
  if (confirm("Delete staff member?")) {
    const staff = window.DB.get("staff") || [];
    const filtered = staff.filter(s => s.id !== id);
    window.DB.set("staff", filtered);
    renderStaffTable();
  }
}

// Sales History logs
function renderSalesHistoryTable(filteredList = null) {
  const orders = filteredList || window.DB.get("orders") || [];
  const tbody = document.getElementById("history-table-body");
  tbody.innerHTML = "";
  
  const sorted = [...orders].sort((a,b) => b.timestamp - a.timestamp);
  sorted.forEach(o => {
    let itemsStr = o.items.map(i => `${i.nameEn || i.nameHi} (${i.quantity})`).join(", ");
    let discountStr = o.discount > 0 
      ? `<span class="green-text">-₹${o.discount} (${o.reason || 'Discount'})</span>` 
      : (o.extraAmount > 0 ? `<span class="gold-text">+₹${o.extraAmount} (${o.reason || 'Extra'})</span>` : '₹0');
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="bold-text">${o.orderNo}</td>
      <td><span style="font-size:0.8rem; display:block;">${o.date}</span> <span style="font-size:0.75rem; color:var(--text-muted);">${o.time}</span></td>
      <td>🧑‍🍳 ${o.staff}</td>
      <td style="font-size:0.85rem; max-width:200px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" title="${itemsStr}">${itemsStr}</td>
      <td>₹${o.originalPrice}</td>
      <td class="bold-text">₹${o.finalPrice}</td>
      <td>${discountStr}</td>
      <td><span style="font-size:0.75rem; font-weight:700; background-color:var(--info-light); color:var(--info-color); padding:3px 6px; border-radius:4px;">${o.paymentMode}</span></td>
      <td>₹${o.customerPaid}</td>
      <td class="${o.dueAmount > 0 ? 'red-text' : 'green-text'} bold-text">₹${o.dueAmount}</td>
      <td><button style="padding:4px 8px; font-size:0.75rem; border-radius:4px; cursor:pointer; background-color:var(--gold-light); color:var(--gold-primary);" onclick="showReceiptByNo('${o.orderNo}')">📄 Receipt</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function showReceiptByNo(orderNo) {
  const orders = window.DB.get("orders") || [];
  const o = orders.find(ord => ord.orderNo === orderNo);
  if (o) renderReceipt(o);
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
      ${order.dueAmount > 0 ? `<b style="color:red;">Remaining Due: ₹${order.dueAmount.toFixed(2)}</b>` : ''}
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

function filterSalesHistory() {
  const dateFilter = document.getElementById("history-date-filter").value;
  const searchText = document.getElementById("history-search-input").value.toLowerCase();
  
  const orders = window.DB.get("orders") || [];
  const filtered = orders.filter(o => {
    const matchesDate = !dateFilter || o.date === dateFilter;
    const matchesSearch = o.orderNo.toLowerCase().includes(searchText) || o.staff.toLowerCase().includes(searchText);
    return matchesDate && matchesSearch;
  });
  renderSalesHistoryTable(filtered);
}

// Reports compiler
function generateReport() {
  const type = document.getElementById("report-type-select").value;
  const resultBox = document.getElementById("report-result-box");
  const orders = window.DB.get("orders") || [];
  const purchases = window.DB.get("purchases") || [];
  const expenses = window.DB.get("expenses") || [];
  
  const now = new Date();
  const formatDate = (d) => d.toISOString().split('T')[0];
  let htmlContent = "";
  
  if (type === 'daily') {
    const todayStr = formatDate(now);
    const todayOrders = orders.filter(o => o.date === todayStr);
    
    let cash = 0, upi = 0, total = 0, discount = 0, due = 0;
    todayOrders.forEach(o => {
      total += o.finalPrice;
      discount += o.discount;
      due += o.dueAmount;
      if (o.paymentMode === 'Cash') cash += o.finalPrice;
      else upi += o.finalPrice;
    });
    
    htmlContent = `
      <h3 style="border-bottom: 2px solid var(--gold-primary); padding-bottom: 10px; margin-bottom: 20px; display:flex; justify-content:space-between;">
        <span>दैनिक रिपोर्ट (Daily Report) - ${todayStr}</span>
        <span class="gold-text">Total Orders: ${todayOrders.length}</span>
      </h3>
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px;">
        <div style="background-color:var(--bg-light); padding:15px; border-radius:8px;">
          <b>Gross Revenue:</b> <span class="gold-text" style="font-size:1.4rem; display:block;">₹${total}</span>
        </div>
        <div style="background-color:var(--bg-light); padding:15px; border-radius:8px;">
          <b>UPI Payment:</b> <span style="font-size:1.4rem; display:block; color:var(--info-color);">₹${upi}</span>
        </div>
        <div style="background-color:var(--bg-light); padding:15px; border-radius:8px;">
          <b>Cash Collection:</b> <span style="font-size:1.4rem; display:block; color:var(--success-color);">₹${cash}</span>
        </div>
        <div style="background-color:var(--bg-light); padding:15px; border-radius:8px;">
          <b>Discounts Given:</b> <span style="font-size:1.4rem; display:block; color:#F43F5E;">-₹${discount}</span>
        </div>
        <div style="background-color:var(--bg-light); padding:15px; border-radius:8px;">
          <b>Dues Added (Credit):</b> <span style="font-size:1.4rem; display:block; color:var(--danger-color);">₹${due}</span>
        </div>
        <div style="background-color:var(--bg-light); padding:15px; border-radius:8px;">
          <b>Cash Received:</b> <span style="font-size:1.4rem; display:block; color:#10B981;">₹${todayOrders.reduce((a,o)=>a+o.customerPaid,0)}</span>
        </div>
      </div>
      
      <table class="data-table" style="font-size:0.9rem;">
        <thead>
          <tr>
            <th>Order No</th>
            <th>Time</th>
            <th>Staff</th>
            <th>Net Bill</th>
            <th>Discount</th>
            <th>Mode</th>
            <th>Dues</th>
          </tr>
        </thead>
        <tbody>
          ${todayOrders.map(o => `
            <tr>
              <td><b>${o.orderNo}</b></td>
              <td>${o.time}</td>
              <td>${o.staff}</td>
              <td><b>₹${o.finalPrice}</b></td>
              <td>₹${o.discount}</td>
              <td>${o.paymentMode}</td>
              <td class="${o.dueAmount > 0 ? 'red-text' : ''}">₹${o.dueAmount}</td>
            </tr>
          `).join('')}
          ${todayOrders.length === 0 ? '<tr><td colspan="7" style="text-align:center;">No transactions today.</td></tr>' : ''}
        </tbody>
      </table>
    `;
  }
  else if (type === 'weekly' || type === 'monthly') {
    const days = type === 'weekly' ? 7 : 30;
    const targetDate = new Date();
    targetDate.setDate(now.getDate() - days);
    
    const rangeOrders = orders.filter(o => new Date(o.date) >= targetDate);
    const grouped = {};
    rangeOrders.forEach(o => { grouped[o.date] = (grouped[o.date] || 0) + o.finalPrice; });
    
    htmlContent = `
      <h3 style="border-bottom: 2px solid var(--gold-primary); padding-bottom: 10px; margin-bottom: 20px; display:flex; justify-content:space-between;">
        <span>${type === 'weekly' ? 'Weekly Sales Report' : 'Monthly Sales Report'}</span>
        <span class="gold-text">Sum: ₹${rangeOrders.reduce((a,o)=>a+o.finalPrice,0).toFixed(2)}</span>
      </h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sales</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          ${Object.keys(grouped).sort().reverse().map(dt => `
            <tr>
              <td><b>${dt}</b></td>
              <td class="gold-text bold-text">₹${grouped[dt]}</td>
              <td>${rangeOrders.filter(o => o.date === dt).length} sales</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  else if (type === 'staff') {
    const staffList = window.DB.get("staff") || [];
    htmlContent = `
      <h3 style="border-bottom: 2px solid var(--gold-primary); padding-bottom: 10px; margin-bottom: 20px;">Staff performance Sales Report</h3>
      <table class="data-table">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Role</th>
            <th>Total Sales (₹)</th>
            <th>Orders Handled</th>
          </tr>
        </thead>
        <tbody>
          ${staffList.map(s => `
            <tr>
              <td class="bold-text">🧑‍🍳 ${s.name}</td>
              <td>${s.role.toUpperCase()}</td>
              <td class="green-text bold-text">₹${s.sales || 0}</td>
              <td>${orders.filter(o => o.staff === s.name).length} orders</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  else if (type === 'discounts') {
    const list = orders.filter(o => o.discount > 0 || o.dueAmount > 0);
    htmlContent = `
      <h3 style="border-bottom: 2px solid var(--gold-primary); padding-bottom: 10px; margin-bottom: 20px;">Discounts & Customer Dues Report</h3>
      <table class="data-table" style="font-size:0.9rem;">
        <thead>
          <tr>
            <th>Order No</th>
            <th>Date</th>
            <th>Value</th>
            <th>Discount Given</th>
            <th>Due Credit</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          ${list.map(o => `
            <tr>
              <td><b>${o.orderNo}</b></td>
              <td>${o.date}</td>
              <td>₹${o.finalPrice}</td>
              <td class="green-text bold-text">-₹${o.discount}</td>
              <td class="red-text bold-text">₹${o.dueAmount}</td>
              <td><i>${o.reason || 'Discount'}</i></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  else if (type === 'purchase') {
    htmlContent = `
      <h3 style="border-bottom: 2px solid var(--gold-primary); padding-bottom: 10px; margin-bottom: 20px;">Material Purchase and Miscellaneous Expenses</h3>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px;">
        <div>
          <h4>Raw Stock Purchases</h4>
          <table class="data-table" style="font-size:0.85rem; margin-top:10px;">
            <thead>
              <tr>
                <th>Date</th>
                <th>Material</th>
                <th>Supplier</th>
                <th>Total (Paid)</th>
              </tr>
            </thead>
            <tbody>
              ${purchases.map(p => `
                <tr>
                  <td>${p.date}</td>
                  <td><b>${p.material}</b> (${p.qty})</td>
                  <td>${p.supplier}</td>
                  <td>₹${p.total} (Paid: ₹${p.paid})</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div>
          <h4>Other General Expenses</h4>
          <table class="data-table" style="font-size:0.85rem; margin-top:10px;">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              ${expenses.map(e => `
                <tr>
                  <td>${e.date}</td>
                  <td><b>${e.category}</b></td>
                  <td class="red-text bold-text">₹${e.amount}</td>
                  <td>${e.notes}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  else if (type === 'profit') {
    let sales = orders.reduce((a,o)=>a+o.finalPrice, 0);
    let disc = orders.reduce((a,o)=>a+o.discount, 0);
    let extr = orders.reduce((a,o)=>a+o.extraAmount, 0);
    let raw = purchases.reduce((a,p)=>a+p.total, 0);
    let ops = expenses.reduce((a,e)=>a+e.amount, 0);
    let profit = sales - (raw + ops);
    
    htmlContent = `
      <h3 style="border-bottom: 2px solid var(--gold-primary); padding-bottom: 10px; margin-bottom: 25px;">Profit & Loss Statement</h3>
      <div style="max-width:500px; margin: 0 auto; background-color:var(--bg-light); border-radius:12px; padding:25px; border:1px solid rgba(0,0,0,0.06);">
        <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(0,0,0,0.06);">
          <span><b>Gross Revenue:</b></span>
          <span class="green-text bold-text">₹${sales.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; color:var(--text-muted);">
          <span>Extra Tips/Fees:</span>
          <span>+₹${extr.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:2px solid #000; color:var(--text-muted);">
          <span>Discounts Offered:</span>
          <span>-₹${disc.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(0,0,0,0.06); font-weight:700; margin-top:20px;">
          <span>OPERATIONAL COST:</span>
          <span class="red-text">₹${(raw + ops).toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; color:var(--text-muted); padding-left:20px;">
          <span>Material Cost:</span>
          <span>₹${raw.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:2px solid #000; color:var(--text-muted); padding-left:20px;">
          <span>Misc Expenses:</span>
          <span>₹${ops.toFixed(2)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; padding:15px 0; font-size:1.5rem; font-weight:900; margin-top:20px; background-color:var(--bg-card-light); border-radius:8px;">
          <span>NET PROFIT:</span>
          <span class="${profit >= 0 ? 'green-text' : 'red-text'}">₹${profit.toFixed(2)}</span>
        </div>
      </div>
    `;
  }
  resultBox.innerHTML = htmlContent;
}

function exportReportToExcel() {
  const type = document.getElementById("report-type-select").value;
  const orders = window.DB.get("orders") || [];
  let data = orders.map(o => ({
    "Order No": o.orderNo,
    "Date": o.date,
    "Staff": o.staff,
    "Bill Value": o.finalPrice,
    "Mode": o.paymentMode
  }));
  
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sales");
  XLSX.writeFile(workbook, `Manoj_Hotel_${type}_report.xlsx`);
}

function exportReportToPDF() {
  window.print();
}

// Config settings
function changeOwnerPassword() {
  const p = document.getElementById("set-pass-new").value;
  if (!p) return;
  window.DB.set("password", p);
  alert("Password updated successfully!");
  document.getElementById("set-pass-new").value = "";
}

function downloadBackup() {
  const backup = {
    menu: window.DB.get("menu"),
    raw: window.DB.get("raw"),
    suppliers: window.DB.get("suppliers"),
    staff: window.DB.get("staff"),
    orders: window.DB.get("orders"),
    purchases: window.DB.get("purchases"),
    expenses: window.DB.get("expenses"),
    password: window.DB.get("password"),
    initialized: true
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = `Manoj_Hotel_Backup.json`;
  a.click();
}

function uploadBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.initialized) {
        window.DB.set("menu", data.menu);
        window.DB.set("raw", data.raw);
        window.DB.set("suppliers", data.suppliers);
        window.DB.set("staff", data.staff);
        window.DB.set("orders", data.orders);
        window.DB.set("purchases", data.purchases || []);
        window.DB.set("expenses", data.expenses || []);
        window.DB.set("password", data.password || "owner123");
        alert("Database restored successfully!");
        window.location.reload();
      }
    } catch(err) { alert("Error: " + err.message); }
  };
  reader.readAsText(file);
}

function resetDatabaseSystem() {
  if (confirm("Reset database? All history will be lost.")) {
    window.DB.reset();
  }
}

// Real-time synchronization when database changes in other tabs (Staff POS)
window.addEventListener('storage', (e) => {
  if (e.key && e.key.startsWith('mv_pos_')) {
    if (document.getElementById("screen-owner-dashboard").classList.contains("hidden") === false) {
      if (STATE.activeDashboardTab === 'tab-kpi') loadKPIData();
      else if (STATE.activeDashboardTab === 'tab-menu') renderMenuTable();
      else if (STATE.activeDashboardTab === 'tab-raw') renderRawMaterialsGrid();
      else if (STATE.activeDashboardTab === 'tab-suppliers') renderSuppliersTable();
      else if (STATE.activeDashboardTab === 'tab-staff') renderStaffTable();
      else if (STATE.activeDashboardTab === 'tab-history') renderSalesHistoryTable();
      else if (STATE.activeDashboardTab === 'tab-reports') generateReport();
    }
  }
});

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
    // Only poll if the owner is logged in and the dashboard is visible
    if (document.getElementById("screen-owner-dashboard").classList.contains("hidden") === false) {
      if (STATE.activeDashboardTab === 'tab-kpi') loadKPIData();
      else if (STATE.activeDashboardTab === 'tab-menu') renderMenuTable();
      else if (STATE.activeDashboardTab === 'tab-raw') renderRawMaterialsGrid();
      else if (STATE.activeDashboardTab === 'tab-suppliers') renderSuppliersTable();
      else if (STATE.activeDashboardTab === 'tab-staff') renderStaffTable();
      else if (STATE.activeDashboardTab === 'tab-history') renderSalesHistoryTable();
      else if (STATE.activeDashboardTab === 'tab-reports') generateReport();
    }
  }, 4000); // Poll every 4 seconds
}
