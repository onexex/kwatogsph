# KWATOGS Official Website — Prototype v1

A presentation-ready prototype of the official KWATOGS website, built as a static site
(HTML/CSS/JS, no build step). Open `index.html` in any browser, or serve the folder with
any static server.

## Pages

| Page | File | Notes |
|---|---|---|
| Home | `index.html` | Hero, signature dishes, story strip, branch finder preview, delivery, franchise CTA, testimonials, careers band |
| Our Story | `our-story.html` | Real timeline from the Franchising.PH 2026 feature |
| Menu | `menu.html` | 10 categories incl. Goto, Tapsi (Silog), Sisig from the actual signage |
| Branches | `branches.html` | Live finder: search, province chips, Open Now / 24/7 filters |
| Franchise | `franchise.html` | Real package inclusions + inquiry form (Web3Forms — live) |
| Careers | `careers.html` | Sample roles |
| Contact | `contact.html` | Real contact channels + message form (Web3Forms — live) |

## What is REAL (sourced from the Franchising.PH 2026 magazine feature & official materials)

- Founded **2018** in **Lipa City** by husband-and-wife **Sherwin and Rose**; name from Sherwin's childhood nickname "Kwatog"
- **MAFBEX 2022** story — five days, zero deals, then inbox full of inquiries
- Earliest franchisees were loyal customers; grew from 1 partnership + 3 company-owned stores
- **40 branches, all franchised**; presence in **SM and Robinsons** malls; CALABARZON → Metro Manila → as far as **Isabela**
- Mid-2025 franchising pause to strengthen the **commissary**; commissary opens **Q2 2026**; franchising reopening
- **Franchise package inclusions** (all 12 items on the franchise page) — verbatim from the feature
- Founders' quote ("Stay committed. Keep moving forward…")
- Contact: **kwatogslipa@gmail.com · 0992-869-4196 · facebook.com/KwatogsLipa (Kwatogs PH)**
- Signage line: **LOMI X CHAMI X TAPSI X SISIG** (from the menu board). NOTE: the magazine storefront photo shows **GOTO X LOMI X TAPSI X SISIG** — the brand uses both. The site currently follows the menu board version; confirm the preferred tagline with the owners.
- Tagline: **"Taste comes first, toppings come second."**
- **Full menu** (`menu.html`) — all items from the official Kwatogs branch menu boards: Lomi (all sizes/variants), Chami Tamis-Anghang, Black Guisado, the Funsitan pancit family (Canton, Bihon, Sotanghon, Guisado, Kinaldereta, Lang-Lang + mixes), Silog meals, Sizzling/Sisig specials, Pansit sa Bilao trays, Rice meals. **Prices are intentionally not shown** (per owner request — they vary by branch). The page uses a card design: each dish has a description + variant pills (Special/Chicken/Sisig/Lechon, or size pills), with an ordering strip pointing to GrabFood/foodpanda. (The old price values still exist in git/menu-board photos if needed later; the `.price-list` CSS is unused but kept.)
- **Branch directory** (`assets/js/main.js` → `BRANCHES`) — 36 active branches from the owners' "Kwatogs Branch Directory.xlsx" (Branch Directory + Operating Hours sheets). Public-safe fields only: branch location, address, store contact number, and real operating hours (which drive the live Open Now / 24-7 status). **Deliberately excluded for privacy:** owner names, TINs, registered business/taxpayer names, contract/renewal dates, franchisee sales, and POS (Kyte) credentials — these are in other sheets of the workbook and must never be published. Branches with no hours in the workbook show "Hours vary — please call to confirm."

## What is INVENTED (placeholder — replace before launch)

- **Menu item descriptions / category blurbs** (`menu.html`) — the short Taglish intro lines are written copy; the item names and prices themselves are real (from the menu boards)
- **Delivery availability per branch** — the workbook has no Grab/foodpanda data, so per-branch delivery buttons were removed; only the generic section-level delivery links remain
- **Customer/franchisee testimonials** on the homepage
- **Career openings** and application process details
- Contact-form topics and office hours
- Franchise process steps/timelines and budget ranges in the inquiry form
- **Remaining food imagery** beyond the 4 signature dishes still uses stylized art / none — expand with the official photo library as more dishes get photographed

## Official assets in use (`assets/img/`)

- `logo.jpg` — the real Kwatogs logo (nav, footer, favicon on every page)
- `owners1.jpg` — Franchising.PH 2026 cover (homepage story strip + Our Story founders section)
- `owners2.jpg` — Franchising.PH 2026 feature spread (Franchise page)
- `inside.jpg` — branch interior (homepage "Bring Kwatogs to Your City" section)
- `hero-lomi.png` — faded lomi accent on the right of the homepage hero. Generated from the owners' raw photo via `../.imgtools/hero.js` (sharp): left edge + top/bottom feathered to transparent so it blends into the teal hero. Re-run that script to regenerate.
- `dishes/lomi.jpg`, `dishes/chami.jpg`, `dishes/blackguisado.jpg`, `dishes/bilao.jpg` — the four homepage Signature Dishes. Cropped square and lighting-normalized (matching brightness/contrast/saturation) from the owners' raw photos via `../.imgtools/process.js` (sharp). Re-run that script to reprocess new photos.

## Wiring needed at launch

1. **Forms** (`franchise.html`, `contact.html`) are **LIVE** via **Web3Forms** (see `initForms()` in `main.js`; access key is set in `WEB3FORMS_ACCESS_KEY`). Submissions email the inbox tied to that key. Verified working (POST → 200) on 2026-07-05. To change the destination, regenerate the key at https://web3forms.com with a different email. Optional: enable the Web3Forms → Google Sheets integration from their dashboard to also log leads to a Sheet (owner declined for now — email only).
2. **Delivery links** currently point to GrabFood/foodpanda homepages — replace with each branch's actual store URL. (The GrabFood/foodpanda logos are the official PNGs, whitespace-trimmed via `../.imgtools/logos.js`.)
3. **Franchise Kit PDF** — produce and host the actual kit
4. Add per-branch pages + LocalBusiness schema once the official directory is final
5. Add GA4 + Meta Pixel and OG share images (favicon already uses the official logo)
6. Decide static-hosting vs. CMS migration (recommendation: WordPress with Branch/Menu/Promo custom post types so staff can self-serve updates)

## Editing branch data

All branch info lives in one array in `assets/js/main.js` (`BRANCHES`). Add/edit entries there;
the Branches page and homepage featured cards update automatically. "Open Now" status is
computed live from the visitor's clock, including overnight hours (e.g., 8 AM–3 AM) and 24/7 flags.
