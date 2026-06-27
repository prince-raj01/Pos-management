const STORE = "mv-premium-pos-v2";

const TXT = {
  en: {
    owner: "Owner", staff: "Staff", hindi: "Hindi", english: "English",
    dashboard: "Dashboard", pos: "POS", menu: "Menu", raw: "Raw Material", suppliers: "Suppliers", reports: "Reports", history: "Sales History", backup: "Backup",
    todaysSales: "Today's Total Sales", online: "Today's Online Payment", offline: "Today's Offline Payment", orders: "Orders", discount: "Discount", extra: "Extra Received", net: "Net Income",
    staffSales: "Staff-wise Sales", purchaseHistory: "Purchase History", supplierDue: "Supplier Due Payments", paymentSummary: "Payment Summary", rawExpenses: "Raw Material Expenses",
    currentOrder: "Current Order", add: "Add", clear: "Clear", custom: "Custom Price", original: "Original Price", final: "Final Price", reason: "Reason",
    cash: "Cash", upi: "UPI", card: "Card", paid: "Customer Paid", bill: "Final Bill", return: "Balance Return", due: "Remaining Due", complete: "Complete Order",
    all: "All", nameHi: "Hindi Name", nameEn: "English Name", price: "Price", category: "Category", photo: "Photo", icon: "Icon", edit: "Edit", del: "Delete", active: "Active", inactive: "Inactive",
    addMenu: "Add Menu Item", uploadMenu: "Upload Menu Images", addCategory: "Add Category", qty: "Quantity", unit: "Unit", supplier: "Supplier", purchaseDate: "Purchase Date",
    billAmount: "Bill Amount", paidAmount: "Paid Amount", notes: "Notes", addRaw: "Add Raw Material", addSupplier: "Add Supplier", phone: "Phone", address: "Address",
    addStaff: "Add Staff", pin: "PIN", orderNo: "Order No.", date: "Date", time: "Time", items: "Items", payMode: "Payment Mode",
    daily: "Daily", weekly: "Weekly", monthly: "Monthly", exportExcel: "Export Excel", exportPdf: "Export PDF", backupData: "Backup Data", restoreData: "Restore Data",
    ownerPin: "Owner PIN", unlock: "Unlock", wrongPin: "Wrong PIN", reset: "Reset Demo Data", emptyCart: "Tap food photos to add items",
    importHint: "Uploaded images become draft menu cards. OCR is used when available; filename price is used as fallback.",
    regular: "Regular Customer", friend: "Friend", staffDiscount: "Staff Discount", ownerApproved: "Owner Approved", festival: "Festival Offer", manual: "Manual Discount",
    confirmDelete: "Delete this record?", confirmReset: "Reset all demo data?", collected: "Collected", expense: "Expense", profit: "Profit"
  },
  hi: {
    owner: "मालिक", staff: "स्टाफ", hindi: "हिंदी", english: "English",
    dashboard: "डैशबोर्ड", pos: "बिल", menu: "मेन्यू", raw: "कच्चा माल", suppliers: "सप्लायर", reports: "रिपोर्ट", history: "बिक्री हिस्ट्री", backup: "बैकअप",
    todaysSales: "आज की कुल बिक्री", online: "आज का ऑनलाइन भुगतान", offline: "आज का नकद भुगतान", orders: "ऑर्डर", discount: "छूट", extra: "अतिरिक्त रकम", net: "नेट कमाई",
    staffSales: "स्टाफ बिक्री", purchaseHistory: "खरीद हिस्ट्री", supplierDue: "सप्लायर बकाया", paymentSummary: "भुगतान सारांश", rawExpenses: "कच्चे माल का खर्च",
    currentOrder: "चालू ऑर्डर", add: "जोड़ें", clear: "खाली करें", custom: "कस्टम भाव", original: "मूल भाव", final: "अंतिम भाव", reason: "कारण",
    cash: "नकद", upi: "यूपीआई", card: "कार्ड", paid: "ग्राहक ने दिया", bill: "अंतिम बिल", return: "वापस करना", due: "बाकी बकाया", complete: "ऑर्डर पूरा",
    all: "सभी", nameHi: "हिंदी नाम", nameEn: "English Name", price: "भाव", category: "कैटेगरी", photo: "फोटो", icon: "आइकन", edit: "बदलें", del: "हटाएं", active: "चालू", inactive: "बंद",
    addMenu: "मेन्यू आइटम जोड़ें", uploadMenu: "मेन्यू फोटो अपलोड", addCategory: "कैटेगरी जोड़ें", qty: "मात्रा", unit: "यूनिट", supplier: "सप्लायर", purchaseDate: "खरीद तारीख",
    billAmount: "बिल रकम", paidAmount: "दी गई रकम", notes: "नोट", addRaw: "कच्चा माल जोड़ें", addSupplier: "सप्लायर जोड़ें", phone: "फोन", address: "पता",
    addStaff: "स्टाफ जोड़ें", pin: "पिन", orderNo: "ऑर्डर नंबर", date: "तारीख", time: "समय", items: "आइटम", payMode: "भुगतान",
    daily: "दैनिक", weekly: "साप्ताहिक", monthly: "मासिक", exportExcel: "एक्सेल", exportPdf: "पीडीएफ", backupData: "बैकअप", restoreData: "रीस्टोर",
    ownerPin: "मालिक पिन", unlock: "खोलें", wrongPin: "गलत पिन", reset: "डेमो रीसेट", emptyCart: "फोटो दबाकर आइटम जोड़ें",
    importHint: "अपलोड फोटो से ड्राफ्ट मेन्यू कार्ड बनेंगे। OCR मिले तो पढ़ेगा, नहीं तो फाइल नाम से भाव लेगा।",
    regular: "नियमित ग्राहक", friend: "दोस्त", staffDiscount: "स्टाफ छूट", ownerApproved: "मालिक स्वीकृत", festival: "त्योहार ऑफर", manual: "मैनुअल छूट",
    confirmDelete: "यह रिकॉर्ड हटाएं?", confirmReset: "सारा डेमो डेटा रीसेट करें?", collected: "प्राप्त", expense: "खर्च", profit: "मुनाफा"
  }
};

const MENU_PHOTOS = {
  poha: "assets/menu/poha.jpg",
  samosa: "assets/menu/samosa.jpg",
  kachori: "assets/menu/kachori.jpg",
  paratha: "assets/menu/paratha.jpg",
  thali: "assets/menu/thali.jpg",
  dalbati: "assets/menu/dalbati.jpg",
  paneer: "assets/menu/paneer.jpg",
  jalebi: "assets/menu/jalebi.jpg",
  gulab: "assets/menu/gulab.jpg",
  laddu: "assets/menu/laddu.jpg",
  tea: "assets/menu/tea.jpg",
  lassi: "assets/menu/lassi.jpg"
};

const RAW_PHOTOS = {
  potato: "assets/raw/potato.jpg",
  onion: "assets/raw/onion.jpg",
  tomato: "assets/raw/tomato.jpg",
  milk: "assets/raw/milk.jpg",
  paneer: "assets/raw/paneer.jpg",
  oil: "assets/raw/oil.jpg",
  rice: "assets/raw/rice.jpg",
  flour: "assets/raw/flour.jpg",
  salt: "assets/raw/salt.jpg",
  sugar: "assets/raw/sugar.jpg",
  ginger: "assets/raw/ginger.jpg",
  garlic: "assets/raw/garlic.jpg",
  chilli: "assets/raw/chilli.jpg",
  coriander: "assets/raw/coriander.jpg",
  butter: "assets/raw/butter.jpg",
  ghee: "assets/raw/ghee.jpg",
  curd: "assets/raw/curd.jpg",
  "tea-leaf": "assets/raw/tea-leaf.jpg",
  chickpeas: "assets/raw/chickpeas.jpg",
  besan: "assets/raw/besan.jpg",
  spices: "assets/raw/spices.jpg"
};

const seed = {
  language: "hi",
  role: "staff",
  ownerPin: "1234",
  ownerView: "dashboard",
  selectedCategory: "all",
  selectedStaffId: "staff-1",
  paymentMode: "cash",
  customerPaid: "",
  menuQty: {},
  cart: [],
  orders: [],
  customHistory: [],
  drafts: [],
  categories: [
    { id: "snacks", hi: "नाश्ता", en: "Snacks", icon: "🥟" },
    { id: "meal", hi: "भोजन", en: "Meals", icon: "🍛" },
    { id: "sweets", hi: "मिठाई", en: "Sweets", icon: "🍮" },
    { id: "drinks", hi: "पेय", en: "Drinks", icon: "🥛" }
  ],
  staffList: [
    { id: "staff-1", hi: "राम", en: "Ram", pin: "1111", active: true },
    { id: "staff-2", hi: "मोहन", en: "Mohan", pin: "2222", active: true }
  ],
  suppliersList: [
    { id: "sup-1", hi: "सब्जी मंडी", en: "Sabzi Mandi", phone: "", address: "Local market" },
    { id: "sup-2", hi: "डेयरी सप्लायर", en: "Dairy Supplier", phone: "", address: "Local dairy" }
  ],
  menuItems: [
    ["poha", "snacks", "पोहा", "Poha", 30, "🍚"], ["samosa", "snacks", "समोसा", "Samosa", 15, "🥟"], ["kachori", "snacks", "कचोरी", "Kachori", 20, "🥠"],
    ["paratha", "meal", "आलू पराठा", "Aloo Paratha", 50, "🫓"], ["thali", "meal", "वैष्णव थाली", "Vaishnav Thali", 120, "🍛"], ["dalbati", "meal", "दाल बाटी", "Dal Bati", 100, "🍲"], ["paneer", "meal", "पनीर सब्जी", "Paneer Sabji", 140, "🧀"],
    ["jalebi", "sweets", "जलेबी", "Jalebi", 40, "🍯"], ["gulab", "sweets", "गुलाब जामुन", "Gulab Jamun", 30, "🍮"], ["laddu", "sweets", "लड्डू", "Laddu", 25, "🍡"],
    ["tea", "drinks", "चाय", "Tea", 10, "☕"], ["lassi", "drinks", "लस्सी", "Lassi", 50, "🥛"]
  ].map(([id, category, hi, en, price, icon]) => ({ id: `item-${id}`, category, hi, en, price, icon, image: MENU_PHOTOS[id] || "", active: true })),
  rawItems: [
    ["potato", "आलू", "Potato", "🥔", 25, "Kg", "sup-1", 650, 500], ["onion", "प्याज", "Onion", "🧅", 20, "Kg", "sup-1", 560, 560], ["tomato", "टमाटर", "Tomato", "🍅", 15, "Kg", "sup-1", 450, 300],
    ["milk", "दूध", "Milk", "🥛", 30, "Litre", "sup-2", 1800, 1500], ["paneer", "पनीर", "Paneer", "🧀", 8, "Kg", "sup-2", 2400, 2000], ["oil", "तेल", "Oil", "🛢️", 15, "Litre", "sup-1", 2250, 2250],
    ["rice", "चावल", "Rice", "🌾", 50, "Kg", "sup-1", 2500, 1500], ["flour", "आटा", "Wheat Flour", "🌾", 60, "Kg", "sup-1", 2100, 2100], ["salt", "नमक", "Salt", "🧂", 10, "Packet", "sup-1", 200, 200],
    ["sugar", "चीनी", "Sugar", "🍬", 40, "Kg", "sup-1", 1800, 1000], ["ginger", "अदरक", "Ginger", "🫚", 3, "Kg", "sup-1", 360, 360], ["garlic", "लहसुन", "Garlic", "🧄", 4, "Kg", "sup-1", 520, 520],
    ["chilli", "हरी मिर्च", "Green Chilli", "🌶️", 5, "Kg", "sup-1", 300, 300], ["coriander", "धनिया", "Coriander", "🥬", 4, "Kg", "sup-1", 240, 240], ["butter", "मक्खन", "Butter", "🧈", 5, "Kg", "sup-2", 2250, 2000],
    ["ghee", "घी", "Ghee", "🥣", 10, "Litre", "sup-2", 6500, 4000], ["curd", "दही", "Curd", "🥛", 20, "Kg", "sup-2", 1200, 1200], ["tea-leaf", "चाय पत्ती", "Tea Leaves", "☕", 4, "Packet", "sup-1", 900, 900],
    ["chickpeas", "चना", "Chickpeas", "🫘", 20, "Kg", "sup-1", 1500, 1500], ["besan", "बेसन", "Gram Flour", "🧆", 25, "Kg", "sup-1", 1750, 1750], ["spices", "मसाले", "Spices", "🧄", 12, "Packet", "sup-1", 1800, 1000]
  ].map(([id, hi, en, icon, quantity, unit, supplierId, billAmount, paidAmount]) => ({ id: `raw-${id}`, hi, en, icon, image: RAW_PHOTOS[id] || "", quantity, unit, supplierId, purchaseDate: today(), billAmount, paidAmount, notes: "" }))
};

let state = load();

function today() { return new Date().toISOString().slice(0, 10); }
function copy(x) { return JSON.parse(JSON.stringify(x)); }
function load() {
  try { return hydratePhotos({ ...copy(seed), ...JSON.parse(localStorage.getItem(STORE) || "{}") }); }
  catch { return hydratePhotos(copy(seed)); }
}
function hydratePhotos(data) {
  data.menuItems = (data.menuItems || []).map(item => {
    const key = String(item.id || "").replace(/^item-/, "");
    return { ...item, image: item.image || MENU_PHOTOS[key] || "" };
  });
  data.rawItems = (data.rawItems || []).map(item => {
    const key = String(item.id || "").replace(/^raw-/, "");
    return { ...item, image: item.image || RAW_PHOTOS[key] || "" };
  });
  return data;
}
function save() { localStorage.setItem(STORE, JSON.stringify(state)); }
function set(patch) { state = { ...state, ...patch }; save(); render(); }
function tr(k) { return TXT[state.language][k] || TXT.en[k] || k; }
function nm(x) { return state.language === "hi" ? (x.hi || x.en) : (x.en || x.hi); }
function both(x) { return `${x.hi || ""} · ${x.en || ""}`; }
function rs(v) { return `₹${Number(v || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`; }
function num(v) { return Number(v || 0); }
function id(p) { return `${p}-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
function esc(v) { return String(v ?? "").replace(/"/g, "&quot;"); }
function val(i) { return document.getElementById(i)?.value.trim() || ""; }
function sum(rows, key) { return rows.reduce((a, r) => a + num(r[key]), 0); }
function dueRaw(r) { return Math.max(0, num(r.billAmount) - num(r.paidAmount)); }
function coll(o) { return Math.max(0, num(o.finalBill) - num(o.due)); }

function totals() {
  const original = state.cart.reduce((a, l) => a + l.originalUnitPrice * l.qty, 0);
  const finalBill = state.cart.reduce((a, l) => a + l.finalUnitPrice * l.qty, 0);
  const discount = state.cart.reduce((a, l) => a + Math.max(0, (l.originalUnitPrice - l.finalUnitPrice) * l.qty), 0);
  const extra = state.cart.reduce((a, l) => a + Math.max(0, (l.finalUnitPrice - l.originalUnitPrice) * l.qty), 0);
  const paid = num(state.customerPaid);
  return { original, finalBill, discount, extra, paid, balance: Math.max(0, paid - finalBill), due: Math.max(0, finalBill - paid) };
}

function inRange(date, range) {
  const now = new Date(); const start = new Date(now); start.setHours(0, 0, 0, 0);
  const d = new Date(`${date}T00:00:00`);
  if (range === "day") return d.getTime() === start.getTime();
  if (range === "week") { start.setDate(start.getDate() - ((start.getDay() + 6) % 7)); return d >= start; }
  if (range === "month") { start.setDate(1); return d >= start; }
  return true;
}

function metrics(range = "day") {
  const orders = state.orders.filter(o => inRange(o.date, range));
  const raw = state.rawItems.filter(r => inRange(r.purchaseDate, range));
  const totalSales = sum(orders, "finalBill");
  const collected = orders.reduce((a, o) => a + coll(o), 0);
  const rawExpenses = sum(raw, "billAmount");
  return {
    orders, raw, totalSales, collected, rawExpenses,
    online: orders.filter(o => o.paymentMode !== "cash").reduce((a, o) => a + coll(o), 0),
    offline: orders.filter(o => o.paymentMode === "cash").reduce((a, o) => a + coll(o), 0),
    discount: sum(orders, "discount"), extra: sum(orders, "extra"), count: orders.length, net: collected - rawExpenses
  };
}

function menuManager() {
  return `<section class="page-head"><div><h2 class="page-title">${tr("menu")}</h2><p class="page-note">${state.menuItems.length} ${tr("items")}</p></div><div class="toolbar"><button class="primary-btn" data-menu-form>➕ ${tr("addMenu")}</button><button class="secondary-btn" data-cat-form>🗂️ ${tr("addCategory")}</button></div></section>
  <section class="band"><h3 class="band-title"><span>🖼️ ${tr("uploadMenu")}</span></h3><div class="notice">${tr("importHint")}</div><div class="field" style="margin-top:12px"><label>${tr("uploadMenu")}</label><input type="file" accept="image/*" multiple data-import></div>${state.drafts.length ? `<div class="import-preview" style="margin-top:12px">${state.drafts.map(draftCard).join("")}</div>` : ""}</section>
  <section class="band"><div class="manager-grid">${state.menuItems.map(menuCard).join("")}</div></section>`;
}

function draftCard(d) { return `<article class="manage-card"><div class="food-photo"><img src="${d.image}" alt="${d.en}"></div><div class="manage-card-body"><strong>${d.hi}</strong><span>${d.en}</span><span class="price-pill">${rs(d.price)}</span><button class="success-btn" data-draft="${d.id}">✅ ${tr("add")}</button></div></article>`; }
function menuCard(i) { const c = state.categories.find(x => x.id === i.category); return `<article class="manage-card"><div class="food-photo">${i.image ? `<img src="${i.image}" alt="${both(i)}">` : `<span class="photo-emoji">${i.icon}</span>`}</div><div class="manage-card-body"><strong>${both(i)}</strong><span>${c ? `${c.icon} ${nm(c)}` : ""}</span><span class="price-pill">${rs(i.price)}</span><span class="status-pill ${i.active ? "good" : "bad"}">${i.active ? tr("active") : tr("inactive")}</span><div class="card-actions"><button class="secondary-btn" data-edit-menu="${i.id}">✏️ ${tr("edit")}</button><button class="danger-btn" data-del-menu="${i.id}">🗑️ ${tr("del")}</button></div></div></article>`; }

function rawManager() {
  return `<section class="page-head"><div><h2 class="page-title">${tr("raw")}</h2><p class="page-note">${tr("rawExpenses")}: ${rs(sum(state.rawItems, "billAmount"))}</p></div><button class="primary-btn" data-raw-form>➕ ${tr("addRaw")}</button></section><section class="material-grid">${state.rawItems.map(rawCard).join("")}</section>`;
}
function rawCard(r) { const s = state.suppliersList.find(x => x.id === r.supplierId); return `<article class="material-card"><div class="material-photo">${r.image ? `<img src="${r.image}" alt="${both(r)}">` : `<span class="photo-emoji">${r.icon}</span>`}</div><div class="material-card-body"><strong>${both(r)}</strong><span>${r.quantity} ${r.unit} · ${s ? nm(s) : ""}</span><span>${tr("billAmount")}: ${rs(r.billAmount)}</span><span class="status-pill ${dueRaw(r) ? "warn" : "good"}">${tr("due")}: ${rs(dueRaw(r))}</span><div class="card-actions"><button class="secondary-btn" data-edit-raw="${r.id}">✏️ ${tr("edit")}</button><button class="danger-btn" data-del-raw="${r.id}">🗑️ ${tr("del")}</button></div></div></article>`; }

function supplierManager() {
  return `<section class="page-head"><div><h2 class="page-title">${tr("suppliers")}</h2><p class="page-note">${tr("supplierDue")}: ${rs(state.rawItems.reduce((a, r) => a + dueRaw(r), 0))}</p></div><button class="primary-btn" data-sup-form>➕ ${tr("addSupplier")}</button></section><section class="band">${supplierDueTable(true)}</section>`;
}
function staffManager() {
  return `<section class="page-head"><div><h2 class="page-title">${tr("staff")}</h2><p class="page-note">${state.staffList.filter(s => s.active).length} ${tr("active")}</p></div><button class="primary-btn" data-staff-form>➕ ${tr("addStaff")}</button></section><section class="band"><div class="table-wrap"><table><thead><tr><th>${tr("nameHi")}</th><th>${tr("nameEn")}</th><th>${tr("pin")}</th><th>${tr("active")}</th><th>${tr("edit")}</th></tr></thead><tbody>${state.staffList.map(s => `<tr><td>${s.hi}</td><td>${s.en}</td><td>${s.pin}</td><td><span class="status-pill ${s.active ? "good" : "bad"}">${s.active ? tr("active") : tr("inactive")}</span></td><td><button class="secondary-btn" data-edit-staff="${s.id}">✏️</button></td></tr>`).join("")}</tbody></table></div></section>`;
}

function historyView() {
  return `<section class="page-head"><div><h2 class="page-title">${tr("history")}</h2><p class="page-note">${state.orders.length} ${tr("orders")}</p></div><div class="toolbar"><button class="secondary-btn" data-export="sales">⬇️ ${tr("exportExcel")}</button><button class="secondary-btn" data-print>🖨️ ${tr("exportPdf")}</button></div></section><section class="band">${ordersTable(state.orders)}</section><section class="band"><h3 class="band-title"><span>🏷️ ${tr("custom")}</span></h3>${customTable()}</section>`;
}
function reportsView() {
  const d = metrics("day"), w = metrics("week"), m = metrics("month");
  return `<section class="page-head"><div><h2 class="page-title">${tr("reports")}</h2><p class="page-note">${tr("daily")} · ${tr("weekly")} · ${tr("monthly")}</p></div><div class="toolbar"><button class="secondary-btn" data-export="reports">⬇️ ${tr("exportExcel")}</button><button class="secondary-btn" data-print>🖨️ ${tr("exportPdf")}</button></div></section>
  <section class="report-grid">${reportCard(tr("daily"), d)}${reportCard(tr("weekly"), w)}${reportCard(tr("monthly"), m)}</section>
  <section class="split"><div class="band"><h3 class="band-title"><span>${tr("paymentSummary")}</span></h3>${paymentTable(state.orders)}</div><div class="band"><h3 class="band-title"><span>${tr("purchaseHistory")}</span></h3>${purchaseTable(state.rawItems)}</div></section>
  <section class="band"><h3 class="band-title"><span>${tr("profit")}</span></h3>${profitTable(d, w, m)}</section>`;
}
function backupView() { return `<section class="page-head"><div><h2 class="page-title">${tr("backup")}</h2><p class="page-note">Local browser storage</p></div></section><section class="band"><div class="toolbar"><button class="primary-btn" data-backup>💾 ${tr("backupData")}</button><label class="secondary-btn">📂 ${tr("restoreData")}<input class="sr-only" type="file" accept="application/json" data-restore></label><button class="danger-btn" data-reset>↩ ${tr("reset")}</button></div></section>`; }

function staffSalesTable(orders) {
  return table([tr("staff"), tr("orders"), tr("todaysSales"), tr("discount"), tr("extra")], state.staffList.map(s => {
    const rows = orders.filter(o => o.staffId === s.id); return [both(s), rows.length, rs(sum(rows, "finalBill")), rs(sum(rows, "discount")), rs(sum(rows, "extra"))];
  }));
}
function paymentTable(orders) { return table([tr("payMode"), tr("orders"), tr("collected")], ["cash", "upi", "card"].map(m => [tr(m), orders.filter(o => o.paymentMode === m).length, rs(orders.filter(o => o.paymentMode === m).reduce((a, o) => a + coll(o), 0))])); }
function purchaseTable(rows) { return table([tr("date"), tr("raw"), tr("supplier"), tr("qty"), tr("billAmount"), tr("paidAmount"), tr("due")], rows.map(r => [fmt(r.purchaseDate), both(r), both(state.suppliersList.find(s => s.id === r.supplierId) || {}), `${r.quantity} ${r.unit}`, rs(r.billAmount), rs(r.paidAmount), rs(dueRaw(r))])); }
function supplierDueTable(actions = false) {
  const heads = [tr("supplier"), tr("phone"), tr("purchaseHistory"), tr("billAmount"), tr("paidAmount"), tr("due")].concat(actions ? [tr("edit")] : []);
  const rows = state.suppliersList.map(s => {
    const raw = state.rawItems.filter(r => r.supplierId === s.id);
    return [both(s), s.phone || "-", raw.length, rs(sum(raw, "billAmount")), rs(sum(raw, "paidAmount")), rs(raw.reduce((a, r) => a + dueRaw(r), 0))].concat(actions ? [`<button class="secondary-btn" data-edit-sup="${s.id}">✏️</button>`] : []);
  });
  return table(heads, rows, true);
}
function ordersTable(orders) {
  return table([tr("orderNo"), tr("date"), tr("staff"), tr("items"), tr("original"), tr("bill"), tr("discount"), tr("extra"), tr("payMode"), tr("paid"), tr("return"), tr("due")], [...orders].reverse().map(o => [o.orderNo, `${fmt(o.date)}<br><span class="line-meta">${o.time}</span>`, o.staffName, o.items.map(i => `${i.hi || i.en} × ${i.qty}`).join("<br>"), rs(o.original), rs(o.finalBill), rs(o.discount), rs(o.extra), tr(o.paymentMode), rs(o.customerPaid), rs(o.balance), rs(o.due)]), true);
}
function customTable() { return table([tr("date"), tr("staff"), tr("items"), tr("original"), tr("final"), tr("discount"), tr("extra"), tr("reason")], [...state.customHistory].reverse().map(h => [`${fmt(h.date)}<br><span class="line-meta">${h.time}</span>`, h.staffName, h.itemName, rs(h.originalPrice), rs(h.finalPrice), rs(h.discount), rs(h.extra), h.reason || "-"]), true); }
function reportCard(label, m) { return `<article class="report-card"><h3>${label}</h3><strong>${rs(m.totalSales)}</strong><p>${tr("profit")}: ${rs(m.net)}</p><p>${tr("orders")}: ${m.count}</p></article>`; }
function profitTable(d, w, m) { return table([tr("reports"), tr("todaysSales"), tr("collected"), tr("rawExpenses"), tr("profit")], [[tr("daily"), rs(d.totalSales), rs(d.collected), rs(d.rawExpenses), rs(d.net)], [tr("weekly"), rs(w.totalSales), rs(w.collected), rs(w.rawExpenses), rs(w.net)], [tr("monthly"), rs(m.totalSales), rs(m.collected), rs(m.rawExpenses), rs(m.net)]]); }
function table(heads, rows, html = false) { return `<div class="table-wrap"><table><thead><tr>${heads.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${html ? c : String(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`; }

function bindTop() {
  document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => set({ language: b.dataset.lang }));
  document.querySelectorAll("[data-role]").forEach(b => b.onclick = () => {
    if (b.dataset.role === "owner" && state.role !== "owner") return ownerLogin();
    set({ role: b.dataset.role });
  });
}
function ownerLogin() {
  modal(`👑 ${tr("owner")}`, `<label class="field"><span>${tr("ownerPin")}</span><input id="owner-pin" type="password" inputmode="numeric"></label><div class="notice" data-pin-error hidden>${tr("wrongPin")}</div>`, `<button class="secondary-btn" data-close>${tr("del") === "Delete" ? "Cancel" : "रद्द"}</button><button class="primary-btn" data-unlock>${tr("unlock")}</button>`);
  const run = () => { if (val("owner-pin") === state.ownerPin) { closeModal(); set({ role: "owner", ownerView: "dashboard" }); } else document.querySelector("[data-pin-error]").hidden = false; };
  document.querySelector("[data-unlock]").onclick = run;
  document.getElementById("owner-pin").onkeydown = e => { if (e.key === "Enter") run(); };
  document.getElementById("owner-pin").focus();
}
function bindOwner() {
  document.querySelectorAll("[data-view]").forEach(b => b.onclick = () => set({ ownerView: b.dataset.view }));
  on("[data-menu-form]", () => menuForm()); on("[data-cat-form]", categoryForm); on("[data-raw-form]", () => rawForm()); on("[data-sup-form]", () => supplierForm()); on("[data-staff-form]", () => staffForm());
  document.querySelectorAll("[data-edit-menu]").forEach(b => b.onclick = () => menuForm(state.menuItems.find(i => i.id === b.dataset.editMenu)));
  document.querySelectorAll("[data-del-menu]").forEach(b => b.onclick = () => removeFrom("menuItems", b.dataset.delMenu));
  document.querySelectorAll("[data-edit-raw]").forEach(b => b.onclick = () => rawForm(state.rawItems.find(i => i.id === b.dataset.editRaw)));
  document.querySelectorAll("[data-del-raw]").forEach(b => b.onclick = () => removeFrom("rawItems", b.dataset.delRaw));
  document.querySelectorAll("[data-edit-sup]").forEach(b => b.onclick = () => supplierForm(state.suppliersList.find(s => s.id === b.dataset.editSup)));
  document.querySelectorAll("[data-edit-staff]").forEach(b => b.onclick = () => staffForm(state.staffList.find(s => s.id === b.dataset.editStaff)));
  document.querySelectorAll("[data-draft]").forEach(b => b.onclick = () => acceptDraft(b.dataset.draft));
  wire("[data-import]", el => el.onchange = importImages);
  document.querySelectorAll("[data-export]").forEach(b => b.onclick = () => exportCsv(b.dataset.export));
  on("[data-print]", () => window.print()); on("[data-backup]", backupData); wire("[data-restore]", el => el.onchange = restoreData); on("[data-reset]", resetData);
}
function bindPOS() {
  document.querySelectorAll("[data-cat]").forEach(b => b.onclick = () => set({ selectedCategory: b.dataset.cat }));
  wire("[data-staff-select]", el => el.onchange = () => set({ selectedStaffId: el.value }));
  document.querySelectorAll("[data-menu-plus]").forEach(b => b.onclick = () => menuQty(b.dataset.menuPlus, 1));
  document.querySelectorAll("[data-menu-minus]").forEach(b => b.onclick = () => menuQty(b.dataset.menuMinus, -1));
  document.querySelectorAll("[data-add]").forEach(b => b.onclick = () => addItem(b.dataset.add));
  document.querySelectorAll("[data-line-plus]").forEach(b => b.onclick = () => cartQty(b.dataset.linePlus, 1));
  document.querySelectorAll("[data-line-minus]").forEach(b => b.onclick = () => cartQty(b.dataset.lineMinus, -1));
  document.querySelectorAll("[data-remove]").forEach(b => b.onclick = () => set({ cart: state.cart.filter(l => l.menuId !== b.dataset.remove) }));
  document.querySelectorAll("[data-custom]").forEach(b => b.onclick = () => customPrice(b.dataset.custom));
  document.querySelectorAll("[data-pay]").forEach(b => b.onclick = () => set({ paymentMode: b.dataset.pay }));
  wire("[data-paid]", el => el.oninput = () => { state.customerPaid = el.value; save(); const t = totals(); document.querySelector("[data-return]").textContent = rs(t.balance); document.querySelector("[data-due]").textContent = rs(t.due); });
  on("[data-clear]", () => set({ cart: [], customerPaid: "" }));
  on("[data-complete]", completeOrder);
}
function on(sel, fn) { const el = document.querySelector(sel); if (el) el.onclick = () => fn(el); }
function wire(sel, fn) { const el = document.querySelector(sel); if (el) fn(el); }

function cartQty(itemId, delta) { const cart = copy(state.cart); const l = cart.find(x => x.menuId === itemId); if (!l) return; l.qty = Math.max(1, l.qty + delta); set({ cart }); }

function customPrice(itemId) {
  const l = state.cart.find(x => x.menuId === itemId), item = state.menuItems.find(i => i.id === itemId); if (!l || !item) return;
  const reasons = ["regular", "friend", "staffDiscount", "ownerApproved", "festival", "manual"];
  modal(`🏷️ ${tr("custom")}`, `<div class="field-grid"><label class="field"><span>${tr("original")}</span><input value="${l.originalUnitPrice}" disabled></label><label class="field"><span>${tr("final")}</span><input id="custom-final" type="number" min="0" value="${l.finalUnitPrice}"></label><label class="field"><span>${tr("discount")}</span><input id="custom-discount" disabled></label><label class="field"><span>${tr("extra")}</span><input id="custom-extra" disabled></label></div><label class="field"><span>${tr("reason")}</span><select id="custom-reason"><option value="">-</option>${reasons.map(r => `<option value="${tr(r)}">${tr(r)}</option>`).join("")}</select></label>`, footer());
  const update = () => { const f = num(val("custom-final")); document.getElementById("custom-discount").value = rs(Math.max(0, l.originalUnitPrice - f)); document.getElementById("custom-extra").value = rs(Math.max(0, f - l.originalUnitPrice)); };
  update(); document.getElementById("custom-final").oninput = update;
  document.querySelector("[data-save]").onclick = () => {
    const f = num(val("custom-final")); const reason = val("custom-reason"); const cart = state.cart.map(x => x.menuId === itemId ? { ...x, finalUnitPrice: f, reason } : x);
    const staff = state.staffList.find(s => s.id === state.selectedStaffId) || {}; const now = new Date();
    const customHistory = state.customHistory.concat({ id: id("custom"), date: today(), time: now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }), staffName: both(staff), itemName: both(item), originalPrice: l.originalUnitPrice, finalPrice: f, discount: Math.max(0, l.originalUnitPrice - f) * l.qty, extra: Math.max(0, f - l.originalUnitPrice) * l.qty, reason });
    closeModal(); set({ cart, customHistory });
  };
}
function completeOrder() {
  if (!state.cart.length) return; const t = totals(); const staff = state.staffList.find(s => s.id === state.selectedStaffId) || {}; const now = new Date();
  const order = { id: id("order"), orderNo: `MV-${String(state.orders.length + 1).padStart(5, "0")}`, date: today(), time: now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }), staffId: staff.id, staffName: both(staff), original: t.original, finalBill: t.finalBill, discount: t.discount, extra: t.extra, paymentMode: state.paymentMode, customerPaid: t.paid, balance: t.balance, due: t.due, items: state.cart.map(l => { const item = state.menuItems.find(i => i.id === l.menuId) || {}; return { menuId: l.menuId, hi: item.hi, en: item.en, qty: l.qty, originalUnitPrice: l.originalUnitPrice, finalUnitPrice: l.finalUnitPrice, discount: Math.max(0, (l.originalUnitPrice - l.finalUnitPrice) * l.qty), extra: Math.max(0, (l.finalUnitPrice - l.originalUnitPrice) * l.qty), reason: l.reason }; }) };
  set({ orders: state.orders.concat(order), cart: [], customerPaid: "", ownerView: state.role === "owner" ? "history" : state.ownerView });
}

function menuForm(item) {
  const x = item || { hi: "", en: "", price: "", category: state.categories[0]?.id || "", icon: "🍽️", image: "", active: true };
  modal(item ? `✏️ ${tr("menu")}` : `➕ ${tr("addMenu")}`, `<div class="field-grid">${field("m-hi", tr("nameHi"), x.hi)}${field("m-en", tr("nameEn"), x.en)}${field("m-price", tr("price"), x.price, "number")}<label class="field"><span>${tr("category")}</span><select id="m-cat">${state.categories.map(c => `<option value="${c.id}" ${x.category === c.id ? "selected" : ""}>${c.icon} ${both(c)}</option>`).join("")}</select></label>${field("m-icon", tr("icon"), x.icon)}<label class="field"><span>${tr("photo")}</span><input id="m-img" type="file" accept="image/*"></label><label class="field"><span>${tr("active")}</span><select id="m-active"><option value="true" ${x.active ? "selected" : ""}>${tr("active")}</option><option value="false" ${!x.active ? "selected" : ""}>${tr("inactive")}</option></select></label></div>`, footer());
  document.querySelector("[data-save]").onclick = async () => { const file = document.getElementById("m-img").files[0]; const next = { ...x, id: x.id || id("item"), hi: val("m-hi"), en: val("m-en"), price: num(val("m-price")), category: val("m-cat"), icon: val("m-icon") || "🍽️", image: file ? await readURL(file) : x.image, active: val("m-active") === "true" }; closeModal(); set({ menuItems: item ? state.menuItems.map(i => i.id === next.id ? next : i) : state.menuItems.concat(next) }); };
}
function categoryForm() {
  modal(`🗂️ ${tr("addCategory")}`, `<div class="field-grid">${field("c-hi", tr("nameHi"))}${field("c-en", tr("nameEn"))}${field("c-icon", tr("icon"), "🍽️")}</div>`, footer());
  document.querySelector("[data-save]").onclick = () => { closeModal(); set({ categories: state.categories.concat({ id: id("cat"), hi: val("c-hi"), en: val("c-en"), icon: val("c-icon") || "🍽️" }) }); };
}
function rawForm(raw) {
  const x = raw || { hi: "", en: "", icon: "🥔", image: "", quantity: "", unit: "Kg", supplierId: state.suppliersList[0]?.id || "", purchaseDate: today(), billAmount: "", paidAmount: "", notes: "" };
  modal(raw ? `✏️ ${tr("raw")}` : `➕ ${tr("addRaw")}`, `<div class="field-grid three">${field("r-hi", tr("nameHi"), x.hi)}${field("r-en", tr("nameEn"), x.en)}${field("r-icon", tr("icon"), x.icon)}${field("r-qty", tr("qty"), x.quantity, "number")}<label class="field"><span>${tr("unit")}</span><select id="r-unit">${["Kg", "Litre", "Packet"].map(u => `<option ${x.unit === u ? "selected" : ""}>${u}</option>`).join("")}</select></label><label class="field"><span>${tr("supplier")}</span><select id="r-sup">${state.suppliersList.map(s => `<option value="${s.id}" ${x.supplierId === s.id ? "selected" : ""}>${both(s)}</option>`).join("")}</select></label>${field("r-date", tr("purchaseDate"), x.purchaseDate, "date")}${field("r-bill", tr("billAmount"), x.billAmount, "number")}${field("r-paid", tr("paidAmount"), x.paidAmount, "number")}<label class="field"><span>${tr("photo")}</span><input id="r-img" type="file" accept="image/*"></label></div><label class="field"><span>${tr("notes")}</span><textarea id="r-notes">${x.notes || ""}</textarea></label>`, footer());
  document.querySelector("[data-save]").onclick = async () => { const file = document.getElementById("r-img").files[0]; const next = { ...x, id: x.id || id("raw"), hi: val("r-hi"), en: val("r-en"), icon: val("r-icon") || "🥔", image: file ? await readURL(file) : x.image, quantity: num(val("r-qty")), unit: val("r-unit"), supplierId: val("r-sup"), purchaseDate: val("r-date") || today(), billAmount: num(val("r-bill")), paidAmount: num(val("r-paid")), notes: val("r-notes") }; closeModal(); set({ rawItems: raw ? state.rawItems.map(r => r.id === next.id ? next : r) : state.rawItems.concat(next) }); };
}
function supplierForm(sup) {
  const x = sup || { hi: "", en: "", phone: "", address: "" };
  modal(sup ? `✏️ ${tr("supplier")}` : `➕ ${tr("addSupplier")}`, `<div class="field-grid">${field("s-hi", tr("nameHi"), x.hi)}${field("s-en", tr("nameEn"), x.en)}${field("s-phone", tr("phone"), x.phone)}${field("s-address", tr("address"), x.address)}</div>`, footer());
  document.querySelector("[data-save]").onclick = () => { const next = { ...x, id: x.id || id("sup"), hi: val("s-hi"), en: val("s-en"), phone: val("s-phone"), address: val("s-address") }; closeModal(); set({ suppliersList: sup ? state.suppliersList.map(s => s.id === next.id ? next : s) : state.suppliersList.concat(next) }); };
}
function staffForm(staff) {
  const x = staff || { hi: "", en: "", pin: "", active: true };
  modal(staff ? `✏️ ${tr("staff")}` : `➕ ${tr("addStaff")}`, `<div class="field-grid">${field("st-hi", tr("nameHi"), x.hi)}${field("st-en", tr("nameEn"), x.en)}${field("st-pin", tr("pin"), x.pin)}<label class="field"><span>${tr("active")}</span><select id="st-active"><option value="true" ${x.active ? "selected" : ""}>${tr("active")}</option><option value="false" ${!x.active ? "selected" : ""}>${tr("inactive")}</option></select></label></div>`, footer());
  document.querySelector("[data-save]").onclick = () => { const next = { ...x, id: x.id || id("staff"), hi: val("st-hi"), en: val("st-en"), pin: val("st-pin"), active: val("st-active") === "true" }; closeModal(); set({ staffList: staff ? state.staffList.map(s => s.id === next.id ? next : s) : state.staffList.concat(next) }); };
}

async function importImages(e) {
  const files = Array.from(e.target.files || []); const drafts = [];
  for (const f of files) {
    const image = await readURL(f); const parsed = parseFile(f.name); let ocr = null;
    if (window.Tesseract) { try { const res = await window.Tesseract.recognize(image, "eng+hin"); ocr = parseText(res.data.text); } catch { ocr = null; } }
    drafts.push({ id: id("draft"), image, icon: "🍽️", hi: ocr?.hi || parsed.hi || "नया आइटम", en: ocr?.en || parsed.en || "New Item", price: ocr?.price || parsed.price || 0, category: state.categories[0]?.id || "snacks", active: true });
  }
  set({ drafts: state.drafts.concat(drafts) });
}
function parseFile(name) { const clean = name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " "); const price = Number((clean.match(/\d+/g) || []).pop() || 0); const n = clean.replace(/\d+/g, "").trim(); return { hi: n, en: n, price }; }
function parseText(text) { const line = text.split(/\n/).map(x => x.trim()).find(x => /₹|rs|[0-9]/i.test(x)); if (!line) return null; const price = Number((line.match(/[0-9]{1,4}/g) || []).pop() || 0); const name = line.replace(/₹|rs\.?|[0-9]/gi, "").replace(/[|:.-]/g, " ").trim(); return { hi: name, en: name, price }; }
function acceptDraft(draftId) { const d = state.drafts.find(x => x.id === draftId); if (!d) return; set({ menuItems: state.menuItems.concat({ ...d, id: id("item") }), drafts: state.drafts.filter(x => x.id !== draftId) }); }

function removeFrom(collection, itemId) { if (!confirm(tr("confirmDelete"))) return; set({ [collection]: state[collection].filter(x => x.id !== itemId) }); }
function field(id, label, value = "", type = "text") { return `<label class="field"><span>${label}</span><input id="${id}" type="${type}" value="${esc(value)}"></label>`; }
function footer() { return `<button class="secondary-btn" data-close>${state.language === "hi" ? "रद्द" : "Cancel"}</button><button class="primary-btn" data-save>${state.language === "hi" ? "सेव" : "Save"}</button>`; }
function modal(title, body, foot) { document.getElementById("modalRoot").innerHTML = `<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h2>${title}</h2><button class="icon-btn" data-close>✕</button></div><div class="modal-body">${body}</div><div class="modal-footer">${foot}</div></div></div>`; document.querySelectorAll("[data-close]").forEach(b => b.onclick = closeModal); }
function closeModal() { document.getElementById("modalRoot").innerHTML = ""; }
function readURL(file) { return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(file); }); }

function exportCsv(kind) {
  const rows = kind === "reports" ? reportRows() : salesRows();
  const csv = rows.map(r => r.map(c => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  download(`manoj-vaishnav-${kind}-${today()}.csv`, `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`);
}
function salesRows() { return [[tr("orderNo"), tr("date"), tr("time"), tr("staff"), tr("items"), tr("original"), tr("bill"), tr("discount"), tr("extra"), tr("payMode"), tr("paid"), tr("return"), tr("due")]].concat(state.orders.map(o => [o.orderNo, o.date, o.time, o.staffName, o.items.map(i => `${i.en || i.hi} x ${i.qty}`).join("; "), o.original, o.finalBill, o.discount, o.extra, o.paymentMode, o.customerPaid, o.balance, o.due])); }
function reportRows() { const d = metrics("day"), w = metrics("week"), m = metrics("month"); return [[tr("reports"), tr("todaysSales"), tr("collected"), tr("rawExpenses"), tr("profit"), tr("orders")], [tr("daily"), d.totalSales, d.collected, d.rawExpenses, d.net, d.count], [tr("weekly"), w.totalSales, w.collected, w.rawExpenses, w.net, w.count], [tr("monthly"), m.totalSales, m.collected, m.rawExpenses, m.net, m.count]]; }
function backupData() { download(`manoj-vaishnav-backup-${today()}.json`, `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(state, null, 2))}`); }
function restoreData(e) { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { state = { ...copy(seed), ...JSON.parse(r.result) }; save(); render(); } catch { alert("Invalid backup file"); } }; r.readAsText(f); }
function resetData() { if (!confirm(tr("confirmReset"))) return; state = copy(seed); save(); render(); }
function download(filename, href) { const a = document.createElement("a"); a.href = href; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); }
function fmt(date) { return new Date(`${date}T00:00:00`).toLocaleDateString(state.language === "hi" ? "hi-IN" : "en-IN", { day: "2-digit", month: "short", year: "numeric" }); }

function rs(v) { return `\u20B9 ${Number(v || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`; }

function render() {
  document.getElementById("app").innerHTML = `
    <div class="app-shell dashboard-shell ${state.role === "staff" ? "staff-only" : ""}">
      ${sideRail()}
      <main class="dash-main">
        ${dashTop()}
        ${state.role === "owner" ? ownerContent() : pos(true)}
      </main>
    </div>`;
  bindTop();
  if (state.role === "owner") bindOwner();
  bindPOS();
}

function sideRail() {
  const ownerNav = [
    ["dashboard", "&#127968;"], ["menu", "&#128203;"], ["history", "&#128179;"], ["reports", "&#128200;"],
    ["raw", "&#128230;"], ["suppliers", "&#128666;"], ["staff", "&#128101;"], ["backup", "&#9881;"]
  ];
  const staffNav = [["staff-pos", "&#128722;", state.language === "hi" ? "नया ऑर्डर" : "New Order"], ["staff-history", "&#9776;", state.language === "hi" ? "मेरे ऑर्डर" : "My Orders"]];
  return `<aside class="side-rail">
    <div class="rail-brand"><div class="rail-logo">MV</div><strong>Manoj Vaishnav Hotel<br>& Mishthan Bhandar</strong></div>
    <div class="rail-profile"><div class="avatar">M</div><div><strong>${tr("owner")}</strong><span>${state.language === "hi" ? "स्वागत है, मालिक" : "Welcome, owner"}</span></div></div>
    ${state.role === "owner" ? `<nav class="rail-nav">${ownerNav.map(([v, i]) => `<button class="rail-btn ${state.ownerView === v ? "active" : ""}" data-view="${v}"><span>${i}</span>${tr(v)}</button>`).join("")}</nav>` : ""}
    <div class="rail-divider"></div>
    <div class="rail-profile compact"><div class="avatar">S</div><div><strong>${tr("staff")}</strong><span>${state.language === "hi" ? "स्टाफ पैनल" : "Staff panel"}</span></div></div>
    <nav class="rail-nav staff-nav">${staffNav.map(([v, i, label], index) => `<button class="rail-btn ${index === 0 && state.role === "staff" ? "active" : ""}" ${index === 0 ? `data-role="staff"` : ""}><span>${i}</span>${label}</button>`).join("")}</nav>
    <div class="rail-language"><strong>${state.language === "hi" ? "भाषा चुनें / Language" : "Language"}</strong><div class="rail-segment"><button data-lang="hi" class="${state.language === "hi" ? "active" : ""}">${tr("hindi")}</button><button data-lang="en" class="${state.language === "en" ? "active" : ""}">${tr("english")}</button></div></div>
    <button class="rail-logout" data-role="staff">&#9211; ${state.language === "hi" ? "लॉगआउट" : "Logout"}</button>
  </aside>`;
}

function dashTop() {
  return `<header class="dash-top">
    <div><h1>${state.role === "owner" && state.ownerView !== "pos" ? pageTitle() : `${tr("pos")} (New Order)`}</h1></div>
    <div class="dash-top-actions">
      <div class="date-pill">&#128197; ${fmt(today())}</div>
      <div class="segmented mini-lang"><button data-lang="hi" class="${state.language === "hi" ? "active" : ""}">${tr("hindi")}</button><button data-lang="en" class="${state.language === "en" ? "active" : ""}">${tr("english")}</button></div>
      <button class="bell-btn">&#128276;<span>3</span></button>
      ${state.role === "staff" ? `<button class="secondary-btn" data-role="owner">${tr("owner")}</button>` : ""}
    </div>
  </header>`;
}

function pageTitle() {
  const map = {
    dashboard: state.language === "hi" ? "डैशबोर्ड (Dashboard)" : "Dashboard",
    menu: state.language === "hi" ? "मेन्यू आइटम" : "Menu Items",
    raw: state.language === "hi" ? "कच्चा माल" : "Raw Materials",
    suppliers: state.language === "hi" ? "सप्लायर" : "Suppliers",
    staff: state.language === "hi" ? "स्टाफ" : "Staff",
    history: state.language === "hi" ? "ऑर्डर (सभी)" : "All Orders",
    reports: state.language === "hi" ? "रिपोर्ट्स" : "Reports",
    backup: state.language === "hi" ? "सेटिंग / बैकअप" : "Settings / Backup"
  };
  return map[state.ownerView] || tr("dashboard");
}

function ownerContent() {
  if (state.ownerView === "pos") return pos(false);
  return ({
    dashboard, menu: menuManager, raw: rawManager, suppliers: supplierManager, staff: staffManager, history: historyView, reports: reportsView, backup: backupView
  }[state.ownerView] || dashboard)();
}

function dashboard() {
  const m = metrics("day");
  const totalDue = state.rawItems.reduce((a, r) => a + dueRaw(r), 0);
  return `<div class="dash-stack">
    <section class="kpi-strip">
      ${metric("sales", tr("todaysSales"), rs(m.totalSales), state.language === "hi" ? "आज की बिक्री" : "Today")}
      ${metric("online", tr("online"), rs(m.online), "UPI / Card")}
      ${metric("cash", tr("offline"), rs(m.offline), tr("cash"))}
      ${metric("orders", tr("orders"), m.count, state.language === "hi" ? "कुल ऑर्डर" : "Total orders")}
      ${metric("discount", tr("discount"), rs(m.discount), state.language === "hi" ? "दी गई छूट" : "Given")}
      ${metric("net", tr("net"), rs(m.net), state.language === "hi" ? "कुल बिक्री - खर्च" : "Sales - expense")}
    </section>
    <section class="analytics-grid">
      <div class="dash-card"><h3>${state.language === "hi" ? "टॉप सेल आइटम (आज)" : "Top Sell Items"}</h3>${topItemsTable()}</div>
      <div class="dash-card payment-card"><h3>${tr("paymentSummary")}</h3>${paymentDonut(m)}</div>
      <div class="dash-card"><h3>${state.language === "hi" ? "स्टाफ परफॉर्मेंस (आज)" : "Staff Performance"}</h3>${staffSalesTable(m.orders)}</div>
      <div class="dash-card"><h3>${state.language === "hi" ? "आज के ऑर्डर (नवीनतम)" : "Latest Orders"}</h3>${latestOrdersTable()}</div>
    </section>
    <section class="quick-actions">
      ${quick("menu", "&#127860;", state.language === "hi" ? "मेन्यू प्रबंधन" : "Menu")}
      ${quick("raw", "&#128230;", state.language === "hi" ? "कच्चा माल" : "Raw Materials")}
      ${quick("pos", "&#128722;", state.language === "hi" ? "खरीद करें" : "New Order")}
      ${quick("history", "&#128203;", state.language === "hi" ? "ऑर्डर (सभी)" : "Orders")}
      ${quick("reports", "&#128200;", state.language === "hi" ? "सेल्स रिपोर्ट" : "Sales Report")}
      ${quick("suppliers", "&#128666;", state.language === "hi" ? "सप्लायर" : "Suppliers")}
      ${quick("backup", "&#9881;", state.language === "hi" ? "सेटिंग" : "Settings")}
    </section>
    <div class="pos-divider"></div>
    ${pos(false)}
  </div>`;
}

function metric(kind, label, value, hint) {
  const icon = { sales: "\u20B9", online: "UPI", cash: "\u20B9", orders: "#", discount: "%", net: "\u2197" }[kind] || "\u20B9";
  return `<article class="metric kpi ${kind}"><div><div class="label">${label}</div><div class="value">${value}</div><div class="hint">${hint}</div></div><span class="kpi-icon">${icon}</span></article>`;
}

function quick(view, icon, label) {
  return `<button class="quick-btn" data-view="${view}"><span>${icon}</span>${label}</button>`;
}

function paymentDonut(m) {
  const total = Math.max(1, m.online + m.offline);
  const onlinePct = Math.round((m.online / total) * 100);
  return `<div class="donut-wrap"><div class="donut" style="--online:${onlinePct}%"><strong>${tr("bill")}<br>${rs(m.totalSales)}</strong></div><div class="donut-legend"><p><span class="dot blue"></span>${tr("online")} ${rs(m.online)} (${onlinePct}%)</p><p><span class="dot green"></span>${tr("cash")} ${rs(m.offline)} (${100 - onlinePct}%)</p></div></div>`;
}

function topItemsTable() {
  const stats = {};
  state.orders.forEach(order => order.items.forEach(item => {
    const key = item.menuId;
    stats[key] = stats[key] || { qty: 0, sales: 0, item: state.menuItems.find(m => m.id === key) || item };
    stats[key].qty += item.qty;
    stats[key].sales += item.finalUnitPrice * item.qty;
  }));
  let rows = Object.values(stats).sort((a, b) => b.sales - a.sales).slice(0, 5);
  if (!rows.length) rows = state.menuItems.slice(0, 5).map((item, index) => ({ item, qty: [25, 30, 20, 10, 40][index] || 0, sales: item.price * ([25, 30, 20, 10, 40][index] || 0) }));
  return `<table class="mini-table"><thead><tr><th>${tr("items")}</th><th>${tr("qty")}</th><th>${tr("price")}</th></tr></thead><tbody>${rows.map(r => `<tr><td><span class="item-mini">${r.item.image ? `<img src="${r.item.image}" alt="">` : ""}${nm(r.item)}</span></td><td>${r.qty}</td><td>${rs(r.sales)}</td></tr>`).join("")}</tbody></table>`;
}

function latestOrdersTable() {
  const rows = [...state.orders].reverse().slice(0, 5);
  if (!rows.length) return `<div class="empty-mini">${state.language === "hi" ? "अभी कोई ऑर्डर नहीं" : "No orders yet"}</div>`;
  return `<table class="mini-table"><tbody>${rows.map(o => `<tr><td>${o.time}</td><td>${o.items.map(i => i.hi || i.en).slice(0, 2).join(", ")}</td><td>${rs(o.finalBill)}</td><td><span class="status-pill good">${tr(o.paymentMode)}</span></td></tr>`).join("")}</tbody></table>`;
}

function pos(isStaff) {
  const list = state.menuItems.filter(i => i.active && (state.selectedCategory === "all" || i.category === state.selectedCategory));
  return `<section class="order-studio">
    <div class="new-order-pane">
      <div class="studio-head"><div><h2>${state.language === "hi" ? "नया ऑर्डर" : "New Order"} <span>(New Order)</span></h2></div><label class="search-box"><input placeholder="${state.language === "hi" ? "आइटम खोजें..." : "Search item..."}"><span>&#128269;</span></label></div>
      <div class="category-row screenshot-cats"><button class="category-chip ${state.selectedCategory === "all" ? "active" : ""}" data-cat="all">${tr("all")}</button>${state.categories.map(c => `<button class="category-chip ${state.selectedCategory === c.id ? "active" : ""}" data-cat="${c.id}">${nm(c)}</button>`).join("")}</div>
      <div class="food-grid screenshot-food-grid">${list.map(foodCard).join("")}</div>
    </div>
    ${orderPanel()}
  </section>`;
}

function foodCard(item) {
  const q = state.menuQty[item.id] || 0;
  return `<article class="food-card screenshot-food-card"><div class="food-photo">${item.image ? `<img src="${item.image}" alt="${both(item)}">` : `<span class="photo-emoji">${item.icon || ""}</span>`}</div><div class="food-body"><div class="food-name"><strong>${state.language === "hi" ? item.hi : item.en}</strong><span>${state.language === "hi" ? item.en : item.hi}</span></div><div class="price-pill">${rs(item.price)}</div><div class="qty-row"><button data-menu-minus="${item.id}">-</button><div class="qty-value">${q}</div><button data-menu-plus="${item.id}">+</button></div><button class="primary-btn add-compact" data-add="${item.id}">Add</button></div></article>`;
}

function orderPanel() {
  const t = totals();
  return `<aside class="order-panel screenshot-order-panel">
    <div class="order-head"><h2>${state.language === "hi" ? "आपका ऑर्डर" : "Your Order"} <span>(Your Order)</span></h2><button class="danger-lite" data-clear>${state.language === "hi" ? "ऑर्डर खाली करें" : "Clear"}</button></div>
    <div class="order-lines screenshot-lines">${state.cart.length ? `<table class="order-table"><thead><tr><th>${tr("items")}</th><th>${tr("qty")}</th><th>${tr("price")}</th><th>${tr("bill")}</th><th></th></tr></thead><tbody>${state.cart.map(line).join("")}</tbody></table>` : `<div class="empty-state">${tr("emptyCart")}</div>`}</div>
    <div class="custom-inline">${state.cart.length ? customInline() : ""}</div>
    <div class="order-total">
      <div class="total-row"><span>${state.language === "hi" ? "कुल आइटम" : "Items"}</span><strong>${state.cart.length}</strong></div>
      <div class="total-row big"><span>${tr("bill")}</span><strong>${rs(t.finalBill)}</strong></div>
      <div class="payment-modes">${["cash", "upi", "card"].map(m => `<button class="payment-mode ${state.paymentMode === m ? "active" : ""}" data-pay="${m}">${tr(m)}</button>`).join("")}</div>
      <label class="field"><span>${tr("paid")}</span><input type="number" min="0" inputmode="numeric" data-paid value="${state.customerPaid}" placeholder="0"></label>
      <div class="balance-grid"><div><span>${tr("return")}</span><strong data-return>${rs(t.balance)}</strong></div><div><span>${tr("due")}</span><strong data-due>${rs(t.due)}</strong></div></div>
      <button class="success-btn save-order-btn" data-complete ${state.cart.length ? "" : "disabled"}>${state.language === "hi" ? "ऑर्डर सेव करें" : "Save Order"}</button>
    </div>
  </aside>`;
}

function line(l) {
  const item = state.menuItems.find(i => i.id === l.menuId) || {};
  return `<tr><td>${nm(item)}</td><td><div class="table-qty"><button data-line-minus="${l.menuId}">-</button><span>${l.qty}</span><button data-line-plus="${l.menuId}">+</button></div></td><td>${rs(l.finalUnitPrice)}</td><td>${rs(l.finalUnitPrice * l.qty)}</td><td><button class="mini-trash" data-remove="${l.menuId}">&#128465;</button></td></tr>`;
}

function customInline() {
  const first = state.cart[0];
  const item = state.menuItems.find(i => i.id === first.menuId) || {};
  const discount = Math.max(0, first.originalUnitPrice - first.finalUnitPrice);
  return `<div class="custom-box"><h3>${state.language === "hi" ? "कीमत बदलें" : "Customize Price"} <span>/ Customize Price</span></h3><div class="custom-grid"><span>${nm(item)}</span><label>${tr("original")}<input value="${first.originalUnitPrice}" disabled></label><label>${tr("final")}<input value="${first.finalUnitPrice}" disabled></label><label>${tr("discount")}<input value="${discount}" disabled></label><button class="secondary-btn" data-custom="${first.menuId}">${state.language === "hi" ? "लागू करें" : "Edit"}</button></div></div>`;
}

function menuQty(itemId, delta) {
  const q = Math.max(0, (state.menuQty[itemId] || 0) + delta);
  set({ menuQty: { ...state.menuQty, [itemId]: q } });
}

function addItem(itemId) {
  const item = state.menuItems.find(i => i.id === itemId);
  if (!item) return;
  const qty = state.menuQty[itemId] || 1;
  const cart = copy(state.cart);
  const l = cart.find(x => x.menuId === itemId);
  if (l) l.qty += qty;
  else cart.push({ menuId: item.id, qty, originalUnitPrice: num(item.price), finalUnitPrice: num(item.price), reason: "" });
  set({ cart, menuQty: { ...state.menuQty, [itemId]: 0 } });
}

render();
