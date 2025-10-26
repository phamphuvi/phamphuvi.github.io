/* =========================
   CONFIG
   ========================= */
const CONFIG = {
  CV_URL: "cv.pdf",
  EMAIL: "your.email@example.com",
  PHONE: "+84 00 000 000",
  GITHUB: "https://github.com/yourprofile",
  LINKEDIN: "https://www.linkedin.com/in/yourprofile"
};

/* =========================
   I18N
   ========================= */
const I18N = {
  vi: {
    nav: { works:"Sản phẩm", skills:"Kỹ năng", about:"Về tôi", contact:"Liên hệ" },
    hero: {
      greeting: "Xin chào, mình là Vĩ—rất hân hạnh được đón bạn tại trang thông tin của mình!",
      name: "PHẠM PHÚ VĨ",
      sub: "Sinh viên năm cuối Đại học Công Nghệ – Kỹ Thuật Cần Thơ, đam mê công nghệ & kỹ thuật. Đây là portfolio về quá trình học, các dự án tiêu biểu và định hướng tương lai.",
      cta1: "PORTFOLIO",
      cta2: "Tải CV"
    },
    profile: { role: "Automation • IoT • Năng lượng tái tạo" },
    sections: {
      about: { title: "Về tôi", subtitle: "Tóm tắt nhanh" },
      focus: { title: "Trọng tâm chuyên môn" },
      skills: { title: "Kỹ năng" },
      works: { title: "Sản phẩm", subtitle: "Một số dự án tiêu biểu" },
      timeline: { title: "Kinh nghiệm & Học vấn" },
      contact: { title: "Liên hệ" }
    },
    aboutBullets: [
      "Sinh viên năm cuối khoa Điện–Điện tử, định hướng Tự động hóa, IoT, Năng lượng tái tạo.",
      "Khóa luận: Hệ điều hướng tấm pin mặt trời (PVsyst) & Điều khiển mức bồn nước (PLC S7‑1200).",
      "Yêu thích dự án thực tiễn: PLC, VFD, Modbus RS‑485, mini‑SCADA, MATLAB/Simulink."
    ],
    focus: [
      { title:"PLC & SCADA mini", text:"Lập trình S7‑1200/TIA, PID Compact, giao diện giám sát, cảnh báo, logging." },
      { title:"IoT & Web Dashboard", text:"Kết nối thiết bị qua Modbus/RS‑485, hiển thị dữ liệu thời gian thực, báo cáo." },
      { title:"PVsyst & PV Tracking", text:"Mô phỏng hiệu suất, phân tích bóng đổ, tối ưu một trục/hai trục." }
    ],
    contact: { note:"Mở cơ hội thực tập/toàn thời gian. Mình sẵn sàng học hỏi để phù hợp với yêu cầu công việc.", email:"Gửi email", call:"Gọi điện" }
  },
  en: {
    nav: { works:"Works", skills:"Skills", about:"About", contact:"Contact" },
    hero: {
      greeting: "Hi, I'm Vi — welcome to my portfolio!",
      name: "PHAM PHU VI",
      sub: "Final-year student at CTUET. This is my journey, featured projects and future direction.",
      cta1: "PORTFOLIO",
      cta2: "Download CV"
    },
    profile: { role: "Automation • IoT • Renewable Energy" },
    sections: {
      about: { title: "About", subtitle: "Quick summary" },
      focus: { title: "Core Focus" },
      skills: { title: "Skills" },
      works: { title: "Works", subtitle: "Selected projects" },
      timeline: { title: "Experience & Education" },
      contact: { title: "Contact" }
    },
    aboutBullets: [
      "Final-year Electrical–Electronics student focusing on Automation, IoT, Renewable Energy.",
      "Capstone: Solar tracking (PVsyst) & Single‑tank level control (Siemens S7‑1200).",
      "Hands‑on: PLC, VFD, Modbus RS‑485, mini‑SCADA, MATLAB/Simulink."
    ],
    focus: [
      { title:"PLC & mini‑SCADA", text:"S7‑1200/TIA programming, PID Compact, HMI/alarms/logging." },
      { title:"IoT & Web Dashboard", text:"Modbus/RS‑485 device data, real‑time charts and reports." },
      { title:"PVsyst & PV Tracking", text:"Performance modeling, shading analysis, 1‑axis/2‑axis optimization." }
    ],
    contact: { note:"Open to internships/full-time roles. Eager to learn and adapt.", email:"Send email", call:"Call" }
  }
};

/* =========================
   Content data
   ========================= */
const PROJECTS = [
  { title: "PV Tracking — PVsyst", desc: "Mô phỏng tối ưu bức xạ, phân tích bóng đổ, 1‑trục/2‑trục.", tags: ["PVsyst","PV tracking","Optimization"], link: "#" },
  { title: "Single‑Tank — PLC S7‑1200", desc: "PID Compact, cảm biến 4–20 mA, VFD INVT GD20, Modbus RS‑485.", tags: ["PLC","PID","Modbus"], link: "#" },
  { title: "Mini‑SCADA Dashboard", desc: "Giám sát thời gian thực, cảnh báo mức, báo cáo dữ liệu.", tags: ["SCADA","IoT","Visualization"], link: "#" },
  { title: "Web Portfolio", desc: "Trang portfolio tĩnh, dark/light, song ngữ VI/EN.", tags: ["HTML","CSS","JS"], link: "#" },
  { title: "ANN‑PID (MATLAB)", desc: "Huấn luyện mạng nơ‑ron tối ưu điều khiển mức.", tags: ["MATLAB","ANN","Control"], link: "#" },
  { title: "Modbus Toolkit", desc: "Bộ mã ví dụ đọc/ghi thanh ghi qua CB1241.", tags: ["Modbus","S7‑1200"], link: "#" }
];

const SKILLS = [
  { name: "PLC S7‑1200 / TIA Portal", level: 80 },
  { name: "INVT GD20 / VFD", level: 70 },
  { name: "Modbus RS‑485", level: 75 },
  { name: "MATLAB/Simulink", level: 65 },
  { name: "PVsyst", level: 72 },
  { name: "HTML/CSS/JS", level: 70 }
];

const TIMELINE = [
  { title:"Khóa luận tốt nghiệp: PV Tracking & Bồn nước đơn", when:"2025", where:"CTUET", details:"Mô phỏng PVsyst; thiết kế điều khiển PID mức bồn; dashboard giám sát." },
  { title:"Thực tập & dự án phòng lab", when:"2024", where:"Khoa Điện–Điện tử", details:"PLC S7‑1200, INVT GD20, Modbus RS‑485, mini‑SCADA." },
  { title:"Đại học Công Nghệ – Kỹ Thuật Cần Thơ", when:"2019–2025", where:"Điện–Điện tử", details:"Chuyên ngành Tự động hóa, IoT và Năng lượng tái tạo." }
];

/* ============== DOM Helpers ============== */
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

/* ============== Renderers ============== */
function setLang(lang){
  localStorage.setItem("lang", lang);
  const t = I18N[lang];
  // nav
  $$("[data-i18n^='nav.']").forEach(el=>{
    const key = el.getAttribute("data-i18n").split(".")[1];
    el.textContent = t.nav[key];
  });
  // hero
  $("[data-i18n='hero.greeting']").textContent = t.hero.greeting;
  $("[data-i18n='hero.name']").textContent = t.hero.name;
  $("[data-i18n='hero.sub']").textContent = t.hero.sub;
  $("[data-i18n='hero.cta1']").textContent = t.hero.cta1;
  $("[data-i18n='hero.cta2']").textContent = t.hero.cta2;
  // profile
  $("[data-i18n='profile.role']").textContent = t.profile.role;
  // section headings
  $$("[data-i18n^='sections.']").forEach(el=>{
    const [_, sec, key] = el.getAttribute("data-i18n").split(".");
    if(key){ el.textContent = t.sections[sec][key]; }
  });
  $("#contactNote").textContent = t.contact.note;
  $$("[data-i18n='contact.email']").forEach(el=> el.textContent = t.contact.email);
  $$("[data-i18n='contact.call']").forEach(el=> el.textContent = t.contact.call);

  // about bullets
  const list = $("#aboutList"); list.innerHTML = "";
  t.aboutBullets.forEach(x=>{
    const li = document.createElement("li"); li.textContent = x; list.appendChild(li);
  });

  // focus cards
  const fg = $("#focusGrid"); fg.innerHTML = "";
  t.focus.forEach(f=>{
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h4 style="margin:0">${f.title}</h4><p class="muted" style="margin:.25rem 0 0">${f.text}</p>`;
    fg.appendChild(card);
  });

  // Label
  $("#langLabel").textContent = lang.toUpperCase();
}

function setTheme(theme){
  if(theme === "dark"){ document.body.classList.add("dark"); }
  else { document.body.classList.remove("dark"); }
  localStorage.setItem("theme", theme);
  $("#iconTheme use").setAttribute("href", theme === "dark" ? "#icon-sun" : "#icon-moon");
}

function renderProjects(){
  const grid = $("#projectsGrid"); grid.innerHTML = "";
  PROJECTS.forEach(p=>{
    const card = document.createElement("article");
    card.className = "card project";
    card.innerHTML = `
      <div class="thumb"></div>
      <h4 style="margin:.2rem 0">${p.title}</h4>
      <p class="muted">${p.desc}</p>
      <div class="badges">${p.tags.map(t=>`<span class="badge">${t}</span>`).join("")}</div>
      <p style="margin:.5rem 0 0"><a href="${p.link}" target="_blank" rel="noreferrer">Demo <svg class="icon" style="vertical-align:-3px"><use href="#icon-external"/></svg></a></p>
    `;
    grid.appendChild(card);
  });
}

function renderSkills(){
  const grid = $("#skillsGrid"); grid.innerHTML = "";
  SKILLS.forEach(s=>{
    const el = document.createElement("div");
    el.className = "skill";
    el.innerHTML = `
      <div class="row">
        <strong>${s.name}</strong>
        <span class="muted">${s.level}%</span>
      </div>
      <div class="bar"><span style="width: ${s.level}%"></span></div>
    `;
    grid.appendChild(el);
  });
}

function renderTimeline(){
  const root = $("#timelineList"); root.innerHTML = "";
  TIMELINE.forEach(item=>{
    const el = document.createElement("div");
    el.className = "timeline-item";
    el.innerHTML = `
      <h4>${item.title}</h4>
      <div class="when">${item.when} · ${item.where}</div>
      <p class="muted">${item.details}</p>
    `;
    root.appendChild(el);
  });
}

function wireLinks(){
  const emailHref = `mailto:${CONFIG.EMAIL}`;
  const phoneHref = `tel:${CONFIG.PHONE.replace(/\s/g,'')}`;
  const cvHref = CONFIG.CV_URL;

  // Social across places
  ["#githubLink","#githubLink2","#githubLinkSide"].forEach(sel=> $(sel).setAttribute("href", CONFIG.GITHUB));
  ["#linkedinLink","#linkedinLink2","#linkedinLinkSide"].forEach(sel=> $(sel).setAttribute("href", CONFIG.LINKEDIN));
  ["#emailLink","#emailLink2"].forEach(sel=> $(sel).setAttribute("href", emailHref));

  // CTAs
  $("#cvBtn").setAttribute("href", cvHref);
  $("#profileCV").setAttribute("href", cvHref);
  ["#profileEmail","#emailBtn"].forEach(sel => $(sel).setAttribute("href", emailHref));
  ["#callBtn"].forEach(sel => $(sel).setAttribute("href", phoneHref));
}

/* ============== Init ============== */
function init(){
  $("#year").textContent = new Date().getFullYear();
  renderProjects();
  renderSkills();
  renderTimeline();
  wireLinks();

  // theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
  $("#themeBtn").addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    setTheme(next);
  });

  // language
  const savedLang = localStorage.getItem("lang") || "vi";
  setLang(savedLang);
  $("#langBtn").addEventListener("click", () => {
    const next = (localStorage.getItem("lang") || "vi") === "vi" ? "en" : "vi";
    setLang(next);
  });

  // smooth anchors
  document.querySelectorAll("a[href^='#']").forEach(a=>{
    a.addEventListener("click", e=>{
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:"smooth", block:"start"}); }
    });
  });
}
document.addEventListener("DOMContentLoaded", init);