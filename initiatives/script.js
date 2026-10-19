(function () {
  "use strict";

  /* ---------- Icon sprite (inline, no external deps) ---------- */
  var ICONS = {
    shield: '<path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    pulse: '<path d="M3 12h4l2 5 4-10 2 5h6"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    server: '<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><circle cx="8" cy="7" r=".6" fill="currentColor"/><circle cx="8" cy="17" r=".6" fill="currentColor"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".7" fill="currentColor"/>',
    users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c2.6.4 4.5 2.5 4.5 5.8"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/>',
    layout: '<rect x="3.5" y="3.5" width="17" height="17" rx="1.5"/><path d="M3.5 9.5h17M9.5 9.5v11"/>',
    phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.3"/><path d="M10.3 18.3h3.4"/>',
    plug: '<path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0V8z"/><path d="M12 16v5"/>',
    bars: '<path d="M5 20V12M12 20V5M19 20v-7"/>',
    trend: '<path d="M4 16l5-5 4 4 7-8"/><path d="M15 7h5v5"/>',
    wallet: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 10h18"/><path d="M16 14.2h2.2"/><path d="M7 7V5.6A1.6 1.6 0 0 1 8.6 4h8.8"/>',
    scale: '<path d="M12 3v15M7 21h10M4 8l3-4 3 4-3 4-3-4zM14 8l3-4 3 4-3 4-3-4z"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.3 4 5.3 4 8.5s-1.4 6.2-4 8.5c-2.6-2.3-4-5.3-4-8.5s1.4-6.2 4-8.5z"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.4A4.6 4.6 0 0 1 12 6.6a4.6 4.6 0 0 1 7.5 3c0 5.8-7.5 10.4-7.5 10.4z"/>',
    badge: '<circle cx="12" cy="10" r="6.5"/><path d="M9.2 10.2l1.9 1.9 3.5-3.8"/><path d="M9 16l-1.5 5 4.5-2 4.5 2L15 16"/>',
    piggy: '<path d="M4 13c0-3.6 3.1-6.5 7-6.5 1 0 2 .2 2.8.5l2.2-1.6v2.4l1.6.9A4 4 0 0 1 19 12v1.5c0 .6-.5 1-1 1h-1"/><path d="M4 13v3.3c0 .7.5 1.2 1.2 1.2H7l.5 2h2l.4-2h2l.4 2h2l.3-1.6"/><circle cx="9.5" cy="11.5" r=".6" fill="currentColor"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4L10 14"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>'
  };

  function icon(name, cls) {
    var d = ICONS[name] || "";
    return '<svg class="' + (cls || "w-[17px] h-[17px]") + ' flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + d + "</svg>";
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Escapes text but turns any http(s) URL inside it into a clickable link. */
  function linkify(s) {
    var text = String(s);
    var urlRe = /https?:\/\/[^\s<>()"']+/g;
    var out = "";
    var lastIndex = 0;
    var m;
    while ((m = urlRe.exec(text))) {
      var url = m[0];
      var trail = "";
      while (url && /[.,;:!?)\]]$/.test(url)) {
        trail = url.slice(-1) + trail;
        url = url.slice(0, -1);
      }
      if (!url) continue;
      out += esc(text.slice(lastIndex, m.index));
      out += '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 align-baseline underline decoration-dotted underline-offset-2 hover:opacity-75 break-words">' +
        '<span>' + esc(url) + '</span>' + icon("external", "w-3 h-3") +
        "</a>";
      out += esc(trail);
      lastIndex = m.index + m[0].length;
    }
    out += esc(text.slice(lastIndex));
    return out;
  }

  var arrowSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';

  var VARIANT = {
    discover: { bar: "from-[#0DA968] to-[#097A4B]", border: "border-[#BDEBD7]", head: "text-[#097A4B]", footBg: "bg-[#F3FBF7]", footBorder: "border-[#BDEBD7]" },
    design: { bar: "from-[#7B3FE4] to-[#5A28B3]", border: "border-[#D8C6F7]", head: "text-[#5A28B3]", footBg: "bg-[#F8F4FE]", footBorder: "border-[#D8C6F7]" },
    deliver: { bar: "from-[#E8920F] to-[#B96E06]", border: "border-[#F6DBAA]", head: "text-[#B96E06]", footBg: "bg-[#FDF6E8]", footBorder: "border-[#F6DBAA]" }
  };

  /* ---------- Content (schema field -> icon / guiding prompts / mindset tag).
     Guiding prompts render only when the matching JSON section is empty;
     otherwise the real answer from the loaded canvas JSON is shown. ---------- */
  var SPINE = [
    { key: "gov_regulatory", icon: "shield", title: "Regulatory Pathway", fallback: [] },
    { key: "gov_clinical", icon: "pulse", title: "Clinical Governance", fallback: [] },
    { key: "gov_data", icon: "lock", title: "Data Governance", fallback: [] },
    { key: "gov_tech", icon: "server", title: "Tech Governance", fallback: [] }
  ];

  var DISCOVER = [
    { key: "disc_challenge", icon: "target", title: "Health Challenge", tag: "Mindset: Design Thinking – Empathy & Problem Definition", fallback: [] },
    { key: "disc_users", icon: "users", title: "User Profiles", tag: "Mindset: Human-Centered Design – User Research", fallback: [] },
    { key: "disc_stakeholders", icon: "pin", title: "Stakeholder Map", tag: "Mindset: Multi-Stakeholder Collaboration", fallback: [] }
  ];

  var DESIGN = [
    { key: "des_arch", icon: "layout", title: "Solution Architecture", tag: "Tools: Core Digital Health Pillars", fallback: [] },
    { key: "des_ux", icon: "phone", title: "User Experience", tag: "Tools: Usability & UX – Adoption Enabler", fallback: [] },
    { key: "des_integration", icon: "plug", title: "Enterprise Interoperability", tag: "Tools: National Health Information System", fallback: [] }
  ];

  var DELIVER = [
    { key: "del_evidence", icon: "bars", title: "Evidence Plan", tag: "Mindset: Dual Framework – Strategy + Reality", fallback: [] },
    { key: "del_scale", icon: "trend", title: "Scale Strategy", tag: "Mindset: Systems Thinking – Scaling Complexity", fallback: [] },
    { key: "del_business", icon: "wallet", title: "Business Model", tag: "Safety: Financial Governance – Sustainable Investment", fallback: [] }
  ];

  var VALUE_ANCHOR = [
    { key: "val_equity", icon: "scale", title: "Health Equity", line: "Accessible care for all", fallback: "" },
    { key: "val_population", icon: "globe", title: "Population Health", line: "Better outcomes at scale", fallback: "" },
    { key: "val_patient", icon: "heart", title: "Patient Experience", line: "Satisfaction & engagement", fallback: "" },
    { key: "val_provider", icon: "badge", title: "Provider Satisfaction", line: "Clinician well-being", fallback: "" },
    { key: "val_cost", icon: "piggy", title: "Cost Reduction", line: "Efficiency & sustainability", fallback: "" }
  ];

  /* ---------- Content resolution: real answer from JSON if present, else the guiding fallback ---------- */
  function bulletLines(text) {
    return String(text).split(/\n+/).map(function (l) { return l.replace(/^-\s*/, "").trim(); }).filter(Boolean);
  }

  function answerList(sections, key, fallbackArr) {
    var v = sections && sections[key] ? String(sections[key]).trim() : "";
    if (v) return { lines: bulletLines(v), filled: true };
    return { lines: (fallbackArr && fallbackArr.length) ? fallbackArr : ["Not yet filled"], filled: false };
  }

  function answerText(sections, key, fallbackStr) {
    var v = sections && sections[key] ? String(sections[key]).trim() : "";
    if (v) return { text: v, filled: true };
    return { text: fallbackStr || "Not yet filled", filled: false };
  }

  /* ---------- Render (Tailwind utility classes) ---------- */
  function renderSpine(sections) {
    var el = document.getElementById("spineCards");
    el.innerHTML = SPINE.map(function (c) {
      var a = answerList(sections, c.key, c.fallback);
      var textCls = a.filled ? "text-slate-800" : "text-[#8E1F1A]/70 italic";
      return (
        '<div class="phase-card-break bg-[#FDEEEC] border border-[#F2B3AC] rounded-xl p-4 flex flex-col gap-2">' +
        '<div class="flex items-center gap-2 font-extrabold text-sm text-[#8E1F1A]">' + icon(c.icon, "w-[18px] h-[18px]") + esc(c.title) + "</div>" +
        '<ul class="flex flex-col gap-1.5 text-xs ' + textCls + ' list-none p-0 m-0">' +
        a.lines.map(function (x) { return '<li class="leading-snug">• ' + linkify(x) + "</li>"; }).join("") +
        "</ul>" +
        "</div>"
      );
    }).join("");
  }

  function phaseCard(item, variant, number, sections) {
    var v = VARIANT[variant];
    var a = answerList(sections, item.key, item.fallback);
    var textCls = a.filled ? "text-slate-800" : "text-slate-500 italic";
    return (
      '<div class="phase-card-break bg-white border ' + v.border + ' rounded-xl overflow-hidden shadow-sm flex flex-col">' +
      '<div class="flex items-center gap-2 px-4 py-2.5 text-white font-extrabold text-sm bg-gradient-to-r ' + v.bar + '">' +
      icon(item.icon, "w-[18px] h-[18px]") + "<span>" + number + ". " + esc(item.title).toUpperCase() + "</span>" +
      "</div>" +
      '<div class="px-4 pt-3.5 pb-2"><ul class="flex flex-col gap-2 text-[13px] ' + textCls + ' list-none p-0 m-0">' +
      a.lines.map(function (x) { return '<li class="leading-snug">• ' + linkify(x) + "</li>"; }).join("") +
      "</ul></div>" +
      "</div>"
    );
  }

  var FRAMEWORK_REFERENCE_URL = "https://www.monash.edu/it/digital-health/research/vdhic";

  function phaseFooter(items, variant) {
    var v = VARIANT[variant];
    return (
      '<div class="phase-card-break rounded-xl border border-dashed ' + v.footBg + " " + v.footBorder + ' p-3.5 h-full flex flex-col">' +
      '<span class="block text-[10.5px] font-extrabold tracking-widest uppercase text-slate-500 mb-1.5">Mindset &amp; Tools</span>' +
      '<ul class="flex flex-col gap-1 text-xs italic text-slate-700 list-none p-0 m-0">' +
      items.filter(function (it) { return it.tag; }).map(function (it) { return "<li>" + esc(it.tag) + "</li>"; }).join("") +
      "</ul>" +
      "</div>"
    );
  }

  function phaseColumn(variant, phaseNum, label, items, offset, sections) {
    var v = VARIANT[variant];
    return (
      '<div class="flex flex-col gap-3.5">' +
      '<div class="text-center font-extrabold text-lg tracking-wide ' + v.head + '">' +
      '<span class="block text-[10.5px] font-bold tracking-[0.16em] opacity-65 mb-0.5">PHASE ' + phaseNum + "</span>" + label +
      "</div>" +
      items.map(function (item, i) { return phaseCard(item, variant, offset + i, sections); }).join("") +
      phaseFooter(items, variant) +
      "</div>"
    );
  }

  function renderBoard(sections) {
    var el = document.getElementById("board");
    var html = "";
    html += phaseColumn("discover", 1, "DISCOVER", DISCOVER, 1, sections);
    html += '<div class="no-print hidden lg:flex items-center justify-center text-slate-400 self-stretch">' + arrowSvg.replace("<svg ", '<svg class="w-5 h-5" ') + "</div>";
    html += phaseColumn("design", 2, "DESIGN", DESIGN, 4, sections);
    html += '<div class="no-print hidden lg:flex items-center justify-center text-slate-400 self-stretch">' + arrowSvg.replace("<svg ", '<svg class="w-5 h-5" ') + "</div>";
    html += phaseColumn("deliver", 3, "DELIVER", DELIVER, 7, sections);
    el.innerHTML = html;
  }

  function renderAnchor(sections) {
    var el = document.getElementById("anchorCards");
    el.innerHTML = VALUE_ANCHOR.map(function (c) {
      var a = answerText(sections, c.key, c.fallback);
      var textCls = a.filled ? "text-slate-800" : "text-slate-500 italic";
      return (
        '<div class="phase-card-break bg-[#FFF0DE] border border-[#F6CA93] rounded-xl p-3.5 text-center">' +
        '<div class="flex items-center justify-center gap-1.5 font-extrabold text-[13.5px] text-[#8A4A09] mb-1">' + icon(c.icon, "w-4 h-4") + esc(c.title) + "</div>" +
        '<p class="text-xs text-slate-800 mb-1.5">' + esc(c.line) + "</p>" +
        '<p class="text-[11.5px] ' + textCls + '">' + linkify(a.text) + "</p>" +
        "</div>"
      );
    }).join("");
  }

  function renderAll(sections) {
    renderSpine(sections);
    renderBoard(sections);
    renderAnchor(sections);
  }

  renderAll({});

  /* ---------- Data loading: Google Sheet (published, key/value rows) is the
     default source. Falls back to the bundled aamako-maya-nepal.json if the
     sheet can't be reached, then to bare metadata. A user-uploaded canvas
     JSON (via "Use my data") always overrides whatever loaded automatically,
     and "Export JSON" downloads whatever is currently displayed. ---------- */
  /* Published-to-web CSV link (File > Share > Publish to web > Sheet1 > CSV).
     Using the publish pipeline instead of the gviz export endpoint, which got
     stuck serving a stale cached snapshot of this sheet and never refreshed. */
  var GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR-Og29cw-jufHOovZhCi2Nko313rN533W8hsdXoYIZDRiJ9pmqzAjGBQzmozn1Papsexp3GBUqrPut/pub?gid=0&single=true&output=csv";

  var DEFAULT_DATA_URL = "aamako-maya-nepal.json";
  var FALLBACK_METADATA = {
    innovationName: "RMNCH Program",
    author: "Aamako Maya (आमाको माया — Mother's Love)",
    date: "2026-10-16"
  };

  var SECTION_KEYS = [
    "gov_regulatory", "gov_clinical", "gov_data", "gov_tech",
    "disc_challenge", "disc_users", "disc_stakeholders",
    "des_arch", "des_ux", "des_integration",
    "del_evidence", "del_scale", "del_business",
    "val_equity", "val_population", "val_patient", "val_provider", "val_cost"
  ];
  var META_KEYS = { project_name: "innovationName", projectname: "innovationName", innovationname: "innovationName", author: "author", date: "date" };

  var nameEl = document.getElementById("metaName");
  var authorEl = document.getElementById("metaAuthor");
  var dateEl = document.getElementById("metaDate");
  var currentData = null;

  function formatDate(d) {
    if (!d) return "—";
    var parsed = new Date(d + "T00:00:00");
    if (isNaN(parsed.getTime())) return d;
    return parsed.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

  function applyData(data, sourceLabel) {
    currentData = data;
    var meta = (data && data.metadata) || {};
    nameEl.textContent = meta.innovationName || meta.projectName || "Untitled initiative";
    authorEl.textContent = meta.author || "—";
    dateEl.textContent = formatDate(meta.date);
    nameEl.title = sourceLabel || "";
    renderAll((data && data.sections) || {});
  }

  /* Minimal RFC-4180 CSV parser: handles quoted fields, embedded commas/newlines, "" escapes. */
  function parseCsv(text) {
    var rows = [];
    var row = [];
    var field = "";
    var inQuotes = false;
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i++; }
          else { inQuotes = false; }
        } else {
          field += c;
        }
      } else if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        row.push(field); field = "";
      } else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field); field = "";
        rows.push(row); row = [];
      } else {
        field += c;
      }
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (cell) { return cell.trim() !== ""; }); });
  }

  /* key/value CSV rows -> canvas JSON shape {metadata:{...}, sections:{...}} */
  function sheetRowsToCanvasData(rows) {
    var metadata = {};
    var sections = {};
    rows.forEach(function (r) {
      var rawKey = (r[0] || "").trim();
      var value = (r[1] || "").trim();
      if (!rawKey) return;
      var key = rawKey.toLowerCase();
      if (key === "key" && value.toLowerCase() === "value") return; // header row
      if (META_KEYS[key]) {
        metadata[META_KEYS[key]] = value;
      } else if (SECTION_KEYS.indexOf(rawKey) !== -1) {
        sections[rawKey] = value;
      }
    });
    return { metadata: metadata, sections: sections };
  }

  function loadFromDefaultJson() {
    fetch(DEFAULT_DATA_URL)
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (data) { applyData(data, "Default: " + DEFAULT_DATA_URL); })
      .catch(function () {
        applyData({ metadata: FALLBACK_METADATA, sections: {} }, "Default metadata only (nothing reachable — open via a local server, or use \"Use my data\")");
      });
  }

  function loadDefault() {
    fetch(GOOGLE_SHEET_CSV_URL)
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.text(); })
      .then(function (csvText) {
        var data = sheetRowsToCanvasData(parseCsv(csvText));
        applyData(data, "Google Sheet (published CSV)");
      })
      .catch(function () { loadFromDefaultJson(); });
  }

  loadDefault();

  var loadBtn = document.getElementById("loadBtn");
  var fileInput = document.getElementById("fileInput");
  if (loadBtn && fileInput) {
    loadBtn.addEventListener("click", function () { fileInput.click(); });
    fileInput.addEventListener("change", function () {
      var file = fileInput.files && fileInput.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          applyData(data, "Loaded: " + file.name);
        } catch (err) {
          window.alert("That file doesn't look like valid canvas JSON (" + err.message + ").");
        }
        fileInput.value = "";
      };
      reader.onerror = function () {
        window.alert("Couldn't read that file.");
        fileInput.value = "";
      };
      reader.readAsText(file);
    });
  }

  var exportBtn = document.getElementById("exportBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", function () {
      if (!currentData) return;
      var meta = currentData.metadata || {};
      var slugSource = meta.innovationName || meta.projectName || "canvas";
      var slug = String(slugSource).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "canvas";
      var blob = new Blob([JSON.stringify(currentData, null, 2)], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = slug + ".json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  var printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", function () { window.print(); });
  }
})();
