/* ==========================================================
   KWATOGS — shared site script
   Branch data = official directory (36 active branches) from the owners'
   "Kwatogs Branch Directory.xlsx" (Branch Directory + Operating Hours sheets).
   Only public-safe fields are used here: branch location, address, store
   contact number, and operating hours. (Owner names, TINs, sales, and POS
   credentials from the workbook are intentionally NOT included.)
   ========================================================== */

// ---------- Brand marks ----------

// Official Kwatogs logo (assets/img/logo.jpg), injected into every .logo-badge.
const LOGO_IMG = `<img src="assets/img/logo.jpg" alt="Kwatogs logo" />`;

// Decorative floral corner motif echoing the logo pattern.
const FLORAL_SVG = `
<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g opacity="0.9">
    <circle cx="250" cy="50" r="26" fill="none" stroke="#d4a93c" stroke-width="1.5" opacity="0.5"/>
    <circle cx="250" cy="50" r="10" fill="#d94f4f" opacity="0.55"/>
    <circle cx="196" cy="84" r="7" fill="#f2c94c" opacity="0.5"/>
    <circle cx="282" cy="110" r="8" fill="#56b8ae" opacity="0.45"/>
    <circle cx="226" cy="140" r="5" fill="#e08fb2" opacity="0.5"/>
    <circle cx="160" cy="50" r="5" fill="#7fb069" opacity="0.45"/>
    <circle cx="270 " cy="170" r="4" fill="#f2c94c" opacity="0.4"/>
    <path d="M180 110 q24 -30 60 -34" stroke="#7fb069" stroke-width="2" fill="none" opacity="0.4"/>
    <path d="M240 200 q30 -16 44 -44" stroke="#56b8ae" stroke-width="2" fill="none" opacity="0.35"/>
    <circle cx="210" cy="36" r="2" fill="#faf6ee" opacity="0.6"/>
    <circle cx="290" cy="76" r="2" fill="#faf6ee" opacity="0.6"/>
    <circle cx="252" cy="226" r="2" fill="#faf6ee" opacity="0.5"/>
    <circle cx="184" cy="180" r="3" fill="#d94f4f" opacity="0.4"/>
  </g>
</svg>`;

// ---------- Official branch directory (34 branches) ----------
// Source: owners' "BRANCHES CONTACT INFO.docx" (public-facing store info).
// hours: { alwaysOpen: true }  |  { open: "HH:MM", close: "HH:MM" }  |  { unknown: true }
// Overnight spans (e.g. 16:00 -> 03:00, or 06:30 -> 00:00) are supported.
const BRANCHES = [
  // ---- BATANGAS ----
  { name: "Kwatogs Lipa — Main (Inosluban)", city: "Lipa City", province: "Batangas",
    address: "Purok 2, Brgy. Inosluban, Lipa City, Batangas", phone: "0995-893-5566",
    hours: { alwaysOpen: true }, badge: "★ Original Branch",
    fb: "https://www.facebook.com/KwatogsLipa" },

  { name: "Kwatogs Tanauan — Darasa", city: "Tanauan City", province: "Batangas",
    address: "777 Jose P. Laurel Highway, Darasa, Tanauan City, Batangas", phone: "0964-954-9850",
    hours: { open: "06:30", close: "00:00" } },

  { name: "Kwatogs Lipa — Sabang", city: "Lipa City", province: "Batangas",
    address: "Gen. Luna St., Brgy. 10, Sabang, Lipa City, Batangas", phone: "0981-225-3736",
    hours: { alwaysOpen: true }, badge: "Open 24/7" },

  { name: "Kwatogs Malvar", city: "Malvar", province: "Batangas",
    address: "Luta del Norte, Malvar, Batangas", phone: "0985-477-5724",
    hours: { open: "05:00", close: "22:00" } },

  { name: "Kwatogs San Jose", city: "San Jose", province: "Batangas",
    address: "Poblacion 4, San Jose, Batangas", phone: "0966-004-7358",
    hours: { open: "08:00", close: "22:00" } },

  { name: "Kwatogs Batangas — Alangilan", city: "Batangas City", province: "Batangas",
    address: "Sitio Ilaya, Alangilan, Batangas City", phone: "0962-662-3019",
    hours: { open: "06:00", close: "23:00" } },

  { name: "Kwatogs SM City Sto. Tomas", city: "Sto. Tomas", province: "Batangas",
    address: "SM City Santo Tomas Food Court, Santo Tomas, Batangas", phone: "(043) 233 1639",
    hours: { open: "10:00", close: "20:30" }, badge: "Mall Branch" },

  { name: "Kwatogs Robinsons Lipa", city: "Lipa City", province: "Batangas",
    address: "Robinsons Lipa Food Court, Lipa City, Batangas", phone: "",
    hours: { open: "10:00", close: "21:00" }, badge: "Mall Branch" },

  { name: "Kwatogs Sto. Tomas — San Vicente", city: "Sto. Tomas", province: "Batangas",
    address: "387 San Vicente, Santo Tomas, Batangas", phone: "0946-311-1591",
    hours: { open: "07:00", close: "21:00" }, note: "Open until 10 PM on weekends" },

  { name: "Kwatogs Rosario", city: "Rosario", province: "Batangas",
    address: "Rosario, Batangas", phone: "0956-375-9978",
    hours: { open: "07:00", close: "20:00" } },

  { name: "Kwatogs Batangas — Gulod Pallocan", city: "Batangas City", province: "Batangas",
    address: "Ebron Drive, Brgy. Gulod Labak, Batangas City", phone: "0970-855-9954",
    hours: { open: "09:00", close: "21:00" } },

  { name: "Kwatogs Batangas — Bolbok Diversion", city: "Batangas City", province: "Batangas",
    address: "Purok 3, Bolbok, Batangas City", phone: "0927-067-0715",
    hours: { open: "06:00", close: "23:30" } },

  { name: "Kwatogs San Pascual", city: "San Pascual", province: "Batangas",
    address: "Brgy. San Antonio, San Pascual, Batangas", phone: "",
    hours: { open: "10:00", close: "22:00" }, badge: "New!" },

  // ---- LAGUNA ----
  { name: "Kwatogs San Pablo — Calihan", city: "San Pablo City", province: "Laguna",
    address: "Maharlika Highway, Purok 3, San Francisco, San Pablo City, Laguna", phone: "0956-861-2702",
    hours: { open: "10:00", close: "23:00" }, note: "Open until 12 AM on weekends" },

  { name: "Kwatogs San Pablo — San Nicolas", city: "San Pablo City", province: "Laguna",
    address: "Maharlika Highway, Brgy. San Nicolas, San Pablo City, Laguna", phone: "0906-513-5643",
    hours: { open: "06:00", close: "23:30" } },

  { name: "Kwatogs San Pablo — Del Remedio", city: "San Pablo City", province: "Laguna",
    address: "1432 Brgy. Del Remedio, San Pablo City, Laguna", phone: "0967-452-9133",
    hours: { open: "08:00", close: "23:30" } },

  { name: "Kwatogs Calamba — Burgos", city: "Calamba City", province: "Laguna",
    address: "Dong Mangahas, Brgy. 3, Burgos St., Calamba, Laguna", phone: "0946-745-3049",
    hours: { open: "09:00", close: "23:00" } },

  { name: "Kwatogs Canlubang", city: "Calamba City", province: "Laguna",
    address: "Unit 24/25, iMall Canlubang, Calamba, Laguna", phone: "0966-665-3136",
    hours: { open: "08:00", close: "20:30" }, badge: "Mall Branch" },

  { name: "Kwatogs Santa Cruz", city: "Santa Cruz", province: "Laguna",
    address: "National Highway, MAA Bldg. Unit 2, Brgy. Gatid, Santa Cruz, Laguna", phone: "0970-583-3071",
    hours: { open: "09:00", close: "23:00" } },

  { name: "Kwatogs Santa Rosa", city: "Santa Rosa City", province: "Laguna",
    address: "Purok 6, Rizal Blvd., Brgy. Tagapo, Santa Rosa, Laguna", phone: "0930-224-8864",
    hours: { open: "10:00", close: "23:00" } },

  { name: "Kwatogs Los Baños", city: "Los Baños", province: "Laguna",
    address: "1209 Lopez Ave., Batong Malaki, Los Baños, Laguna", phone: "0939-306-5940",
    hours: { open: "10:00", close: "22:00" } },

  { name: "Kwatogs Alaminos", city: "Alaminos", province: "Laguna",
    address: "Del Pilar St., Brgy. 2, Alaminos, Laguna", phone: "0993-160-1291",
    hours: { open: "07:00", close: "00:00" } },

  { name: "Kwatogs San Pedro", city: "San Pedro City", province: "Laguna",
    address: "Maharlika St., San Pedro, Laguna", phone: "0956-375-9978",
    hours: { open: "07:00", close: "00:00" } },

  // ---- CAVITE ----
  { name: "Kwatogs Silang", city: "Silang", province: "Cavite",
    address: "San Miguel 2, Emilio Aguinaldo Highway, Bypass Road, Silang, Cavite", phone: "0927-471-0650",
    hours: { open: "10:00", close: "23:00" } },

  { name: "Kwatogs Imus", city: "Imus City", province: "Cavite",
    address: "Punasin, Anabu II-A, Imus, Cavite", phone: "0963-948-0292",
    hours: { open: "11:00", close: "23:00" } },

  { name: "Kwatogs Molino", city: "Bacoor", province: "Cavite",
    address: "Blk 5 Lot 9, Molino Road, Molino II, Bacoor, Cavite", phone: "0933-966-6603",
    hours: { open: "16:00", close: "03:00" }, badge: "Open Late",
    fb: "https://www.facebook.com/kwatogsmolino" },

  { name: "Kwatogs Dasmariñas", city: "Dasmariñas", province: "Cavite",
    address: "190 Don Placido Campos Avenue, Brgy. Sabang, Dasmariñas, Cavite", phone: "0976-611-7517",
    hours: { open: "11:00", close: "00:00" }, badge: "New!" },

  { name: "Kwatogs General Trias", city: "General Trias City", province: "Cavite",
    address: "Skymart Manggahan, General Trias, Cavite", phone: "",
    hours: { open: "06:00", close: "23:30" } },

  // ---- QUEZON ----
  { name: "Kwatogs Candelaria", city: "Candelaria", province: "Quezon",
    address: "Maharlika Highway, Malabanban Norte, Candelaria, Quezon", phone: "0947-941-9004",
    hours: { open: "08:00", close: "23:00" } },

  { name: "Kwatogs Candelaria II", city: "Candelaria", province: "Quezon",
    address: "Poblacion, Candelaria, Quezon", phone: "",
    hours: { unknown: true }, badge: "New!" },

  { name: "Kwatogs Lucena — Poblacion", city: "Lucena City", province: "Quezon",
    address: "M.H. del Pilar St. cor. Sisa St., Brgy. 5, Poblacion, Lucena City, Quezon", phone: "0995-673-8058",
    hours: { open: "06:00", close: "23:20" } },

  // ---- METRO MANILA ----
  { name: "Kwatogs Las Piñas", city: "Las Piñas City", province: "Metro Manila",
    address: "7 Crispina Ave., Las Piñas Village, Pamplona Tres, Las Piñas City", phone: "",
    hours: { open: "11:00", close: "23:00" } },

  // ---- ISABELA ----
  { name: "Kwatogs Santiago", city: "Santiago City", province: "Isabela",
    address: "Maharlika Highway, Dubihan East, Santiago City, Isabela", phone: "0965-944-0664",
    hours: { open: "08:00", close: "00:00" }, badge: "Farthest North" },
];

const PROVINCES = ["All", "Batangas", "Cavite", "Laguna", "Quezon", "Metro Manila", "Isabela"];

// ---------- Open-now logic ----------
function toMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function branchStatus(b) {
  if (b.hours.unknown) return { key: "unknown", label: "" };
  if (b.hours.alwaysOpen) return { key: "always", label: "Open 24/7" };
  const now = new Date();
  const cur = now.getHours() * 60 + now.getMinutes();
  const open = toMinutes(b.hours.open);
  let close = toMinutes(b.hours.close);
  if (close === 0) close = 24 * 60;                 // midnight close = end of day
  let isOpen;
  if (close > open) {
    isOpen = cur >= open && cur < close;            // same-day span
  } else {
    isOpen = cur >= open || cur < close;            // overnight span
  }
  return isOpen ? { key: "open", label: "Open Now" } : { key: "closed", label: "Closed" };
}

function hoursLabel(b) {
  if (b.hours.unknown) return "Hours vary — please call to confirm";
  if (b.hours.alwaysOpen) return "Open 24 hours, 7 days a week";
  const fmt = (hhmm) => {
    let [h, m] = hhmm.split(":").map(Number);
    if (h === 0 && m === 0) return "12:00 MN";
    const ap = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, "0")} ${ap}`;
  };
  let label = `Daily, ${fmt(b.hours.open)} – ${fmt(b.hours.close)}`;
  if (b.note) label += ` · ${b.note}`;
  return label;
}

// ---------- Branch card rendering ----------
function branchCard(b) {
  const st = branchStatus(b);
  const mapsUrl = "https://maps.google.com/?q=" + encodeURIComponent("Kwatogs " + b.address);
  const tel = b.phone.replace(/[^\d]/g, "");
  return `
  <article class="branch-card">
    <div class="top">
      <div>
        <h3>${b.name}</h3>
        ${st.label ? `<span class="status ${st.key}">${st.label}</span>` : `<span class="branch-est">Branch${b.since ? " · Est. " + b.since : ""}</span>`}
      </div>
      ${b.badge ? `<span class="badge">${b.badge}</span>` : ""}
    </div>
    <p class="addr">${b.address}</p>
    <div class="meta">
      <span><span class="ico">Hours</span> ${hoursLabel(b)}</span>
      ${b.phone ? `<span><span class="ico">Call</span> <a href="tel:${tel}">${b.phone}</a></span>` : ""}
    </div>
    <div class="actions">
      <a class="btn btn-dark btn-sm" href="${mapsUrl}" target="_blank" rel="noopener">Get Directions</a>
      ${b.fb ? `<a class="btn btn-outline-dark btn-sm" href="${b.fb}" target="_blank" rel="noopener">Facebook</a>` : ""}
    </div>
  </article>`;
}

// ---------- Branch finder (branches.html) ----------
function initFinder() {
  const grid = document.getElementById("branch-grid");
  if (!grid) return;

  const search = document.getElementById("branch-search");
  const chipWrap = document.getElementById("province-chips");
  const openNowChk = document.getElementById("filter-open");
  const alwaysChk = document.getElementById("filter-247");
  const countEl = document.getElementById("branch-count");
  let province = "All";

  PROVINCES.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "chip" + (p === "All" ? " active" : "");
    btn.textContent = p;
    btn.addEventListener("click", () => {
      province = p;
      chipWrap.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      render();
    });
    chipWrap.appendChild(btn);
  });

  function render() {
    const q = (search.value || "").toLowerCase().trim();
    const list = BRANCHES.filter(b => {
      if (province !== "All" && b.province !== province) return false;
      if (openNowChk && openNowChk.checked && branchStatus(b).key !== "open" && branchStatus(b).key !== "always") return false;
      if (alwaysChk && alwaysChk.checked && !b.hours.alwaysOpen) return false;
      if (q && !(b.name + b.city + b.province + b.address).toLowerCase().includes(q)) return false;
      return true;
    });
    grid.innerHTML = list.length
      ? list.map(branchCard).join("")
      : `<p style="grid-column:1/-1;color:var(--muted);padding:30px 0;">No branches match your search — try another city or clear the filters.</p>`;
    if (countEl) countEl.textContent = list.length;
  }

  search.addEventListener("input", render);
  if (openNowChk) openNowChk.addEventListener("change", render);
  if (alwaysChk) alwaysChk.addEventListener("change", render);
  render();
  // Refresh open/closed status every minute
  setInterval(render, 60000);
}

// ---------- Featured branches (index.html) ----------
function initFeaturedBranches() {
  const wrap = document.getElementById("featured-branches");
  if (!wrap) return;
  const pick = (kw) => BRANCHES.find(b => b.name.includes(kw));
  const featured = [pick("Main (Inosluban)"), pick("Molino"), pick("Santiago")].filter(Boolean);
  wrap.innerHTML = featured.map(branchCard).join("");
}

// ---------- Contact & Franchise form delivery (Web3Forms) ----------
// SETUP (one-time): get a free access key at https://web3forms.com — enter the
// Kwatogs inbox (kwatogslipa@gmail.com); the key is emailed instantly, no login.
// Paste it below. Submissions then arrive at that inbox. The key is public/safe
// to expose in client code. Until a real key is set, forms show a local
// "received" message but do NOT actually send.
const WEB3FORMS_ACCESS_KEY = "YOUR-WEB3FORMS-ACCESS-KEY";

function initForms() {
  const configured = WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR-WEB3FORMS-ACCESS-KEY";

  document.querySelectorAll("form[data-web3form]").forEach(form => {
    const success = form.querySelector(".form-success");
    const errorEl = form.querySelector(".form-error");
    const btn = form.querySelector("button[type=submit]");
    const lock = () => form.querySelectorAll("input, select, textarea, button").forEach(el => el.disabled = true);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (errorEl) errorEl.style.display = "none";

      // Honeypot — if a bot filled the hidden field, silently ignore
      const hp = form.querySelector("input[name=botcheck]");
      if (hp && hp.checked) return;

      // No key yet → show the "please email us instead" stopgap (does NOT send,
      // does NOT lock, so the visitor can copy their message). Automatically
      // switches to the real success message once WEB3FORMS_ACCESS_KEY is set.
      if (!configured) {
        const pending = form.querySelector(".form-pending");
        if (pending) pending.style.display = "block";
        else if (success) { success.style.display = "block"; lock(); }
        return;
      }

      const data = new FormData(form);
      data.append("access_key", WEB3FORMS_ACCESS_KEY);
      data.append("subject", form.dataset.subject || "New Kwatogs website submission");
      data.append("from_name", "Kwatogs Website");

      const label = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

      try {
        const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
        const json = await res.json();
        if (json.success) {
          if (success) success.style.display = "block";
          lock();
        } else {
          throw new Error(json.message || "Submission failed");
        }
      } catch (err) {
        if (btn) { btn.disabled = false; btn.textContent = label; }
        if (errorEl) {
          errorEl.textContent = "Sorry, something went wrong sending your message. Please email kwatogslipa@gmail.com or try again.";
          errorEl.style.display = "block";
        }
      }
    });
  });
}

// ---------- Boot ----------
document.addEventListener("DOMContentLoaded", () => {
  // Inject brand marks
  document.querySelectorAll(".logo-badge").forEach(el => { el.innerHTML = LOGO_IMG; });
  document.querySelectorAll(".floral-corner").forEach(el => { el.innerHTML = FLORAL_SVG; });

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Footer copyright year (scoped to footer — .year is also used by the story timeline)
  document.querySelectorAll(".site-footer .year").forEach(el => { el.textContent = new Date().getFullYear(); });

  initFinder();
  initFeaturedBranches();
  initForms();
});
