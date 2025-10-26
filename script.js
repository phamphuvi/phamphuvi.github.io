/* Config */
const CONFIG = {
  CV_URL: "cv.pdf",
  EMAIL: "your.email@example.com",
  PHONE: "+84 00 000 000",
  GITHUB: "https://github.com/yourprofile"
};

const ABOUT = [
  "Sinh viên năm cuối khoa Điện–Điện tử, định hướng Tự động hóa, IoT, Năng lượng tái tạo.",
  "Khóa luận: Hệ điều hướng tấm pin mặt trời (PVsyst) & Điều khiển mức bồn nước (PLC S7‑1200).",
  "Yêu thích dự án thực tiễn: PLC, VFD, Modbus RS‑485, mini‑SCADA, MATLAB/Simulink."
];

const SKILLS = [
  { name: "PLC S7‑1200 / TIA Portal", level: 80 },
  { name: "INVT GD20 / VFD", level: 70 },
  { name: "Modbus RS‑485", level: 75 },
  { name: "MATLAB/Simulink", level: 65 },
  { name: "PVsyst", level: 72 },
  { name: "HTML/CSS/JS", level: 70 }
];

const PROJECTS = [
  { title:"PV Tracking — PVsyst", desc:"Mô phỏng tối ưu bức xạ, phân tích bóng đổ, 1‑trục/2‑trục.", tags:["PVsyst","Tracking","Optimization"], link:"#"},
  { title:"Single‑Tank — PLC S7‑1200", desc:"PID Compact, cảm biến 4–20 mA, VFD INVT GD20, Modbus RS‑485.", tags:["PLC","PID","Modbus"], link:"#"},
  { title:"Mini‑SCADA Dashboard", desc:"Giám sát thời gian thực, cảnh báo mức, báo cáo dữ liệu.", tags:["SCADA","IoT"], link:"#"},
  { title:"Web Portfolio", desc:"Portfolio tĩnh, dark/light, song ngữ.", tags:["HTML","CSS","JS"], link:"#"},
  { title:"ANN‑PID (MATLAB)", desc:"Huấn luyện mạng nơ‑ron tối ưu điều khiển mức.", tags:["MATLAB","ANN"], link:"#"},
  { title:"Modbus Toolkit", desc:"Ví dụ đọc/ghi thanh ghi CB1241.", tags:["Modbus","S7‑1200"], link:"#"},
];

/* Helpers */
const $ = (s, r=document)=>r.querySelector(s);
function renderList(){
  const list = $("#aboutList"); list.innerHTML = "";
  ABOUT.forEach(t => { const li = document.createElement("li"); li.textContent = t; list.appendChild(li); });
}
function renderSkills(){
  const root = $("#skillsGrid"); root.innerHTML = "";
  SKILLS.forEach(s => {
    const el = document.createElement("div");
    el.className = "skill";
    el.innerHTML = `<div class="top"><strong>${s.name}</strong><span>${s.level}%</span></div><div class="bar"><span style="width:${s.level}%"></span></div>`;
    root.appendChild(el);
  });
}
function renderProjects(){
  const root = $("#projectsGrid"); root.innerHTML = "";
  PROJECTS.forEach(p => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `<div class="thumb"></div><h5 style="margin:.25rem 0">${p.title}</h5><p class="muted">${p.desc}</p><div class="badges">${p.tags.map(t=>`<span class="badge">${t}</span>`).join("")}</div>`;
    root.appendChild(el);
  });
}
function wire(){
  $("#year").textContent = new Date().getFullYear();
  $("#btnEmail").href = $("#btnEmailSide").href = `mailto:${CONFIG.EMAIL}`;
  $("#btnCall").href = `tel:${CONFIG.PHONE.replace(/\s/g,'')}`;
  $("#btnCVSide").href = CONFIG.CV_URL;
  $("#gitFoot").href = CONFIG.GITHUB;

  // theme toggle
  const seg = $("#themeToggle");
  seg.addEventListener("click", (e)=>{
    const btn = e.target.closest(".seg-btn"); if(!btn) return;
    seg.querySelectorAll(".seg-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    if(btn.dataset.theme === "light"){ document.body.classList.add("light"); document.body.classList.remove("dark"); }
    else { document.body.classList.remove("light"); document.body.classList.add("dark"); }
  });

  // smooth scroll
  document.querySelectorAll("a[href^='#']").forEach(a=>{
    a.addEventListener("click", (e)=>{
      const id = a.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:"smooth"}) }
    });
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderList(); renderSkills(); renderProjects(); wire();
});