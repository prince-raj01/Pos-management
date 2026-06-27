# Manoj Vaishnav Hotel & Mishthan Bhandar POS

This is a dependency-free restaurant POS and management web app for Hindi and English use.

Open `premium-pos.html` in a browser to run the clean premium build. Data is saved in browser local storage and can be exported or restored from the Owner backup screen.

Starter Owner PIN: `1234`

## Notes

- The workspace did not contain uploaded menu images when this app was created, so the menu is seeded with editable starter items.
- Real-looking local photos are included for all starter menu items and raw materials under `assets/menu` and `assets/raw`.
- Owner can upload food photos, import image files as draft menu cards, edit prices, manage staff, suppliers, raw materials, reports, backup and restore.
- Staff mode hides sales totals, profit, reports, stock quantity, purchase details, supplier payments, and dashboard analytics.
- The menu image import tries browser OCR if Tesseract.js loads from the CDN. If OCR is unavailable, it falls back to image filenames and creates editable drafts.
