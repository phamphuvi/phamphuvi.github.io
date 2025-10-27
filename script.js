/* Config */
const CONFIG = {
  CV_URL: "cv.pdf",
  EMAIL: "your.email@example.com",
  PHONE: "+84 00 000 000",
  GITHUB: "https://github.com/yourprofile"
};

const ABOUT = [
  "Sinh viên năm cuối khoa Điện–Điện tử, định hướng Tự động hóa, IoT, Năng lượng tái tạo.",
  "Khóa luận: Hệ điều hướng tấm pin mặt trời (PVsyst) & Điều khiển mức bồn nước (PLC S7-1200).",
  "Yêu thích dự án thực tiễn: PLC, VFD, Modbus RS-485, mini-SCADA, MATLAB/Simulink."
];

const SKILLS = [
  { name: "PLC S7-1200 / TIA Portal", level: 80 },
  { name: "INVT GD20 / VFD", level: 70 },
  { name: "Modbus RS-485", level: 75 },
  { name: "MATLAB/Simulink", level: 65 },
  { name: "PVsyst", level: 72 },
  { name: "HTML/CSS/JS", level: 70 }
];

const PROJECTS = [
  { title:"PV Tracking — PVsyst", desc:"Mô phỏng tối ưu bức xạ, phân tích bóng đổ, 1-trục/2-trục.", tags:["PVsyst","Tracking","Optimization"], link:"#"},
  { title:"Single-Tank — PLC S7-1200", desc:"PID Compact, cảm biến 4–20 mA, VFD INVT GD20, Modbus RS-485.", tags:["PLC","PID","Modbus"], link:"#"},
  { title:"Mini-SCADA Dashboard", desc:"Giám sát thời gian thực, cảnh báo mức, báo cáo dữ liệu.", tags:["SCADA","IoT"], link:"#"},
  { title:"Web Portfolio", desc:"Portfolio tĩnh, dark/light, song ngữ.", tags:["HTML","CSS","JS"], link:"#"},
  { title:"ANN-PID (MATLAB)", desc:"Huấn luyện mạng nơ-ron tối ưu điều khiển mức.", tags:["MATLAB","ANN"], link:"#"},
  { title:"Modbus Toolkit", desc:"Ví dụ đọc/ghi thanh ghi CB1241.", tags:["Modbus","S7-1200"], link:"#"},
];

/* Helpers — render nội dung tĩnh */
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

/* =========================================================
   HIỆU ỨNG CHỮ (GSAP)
   - Split “PORTFOLIO” thành ký tự và animate khi vào viewport
   - ScrollFloat cho tiêu đề: Phạm Phú Vĩ / Về tôi / Kỹ năng / Dự án / Liên hệ
   - Gõ chữ (typing) cho câu chào ở hero
   ========================================================= */

/* (1) Tiện ích: tách text thành <span class="char">…</span> */
function splitToChars(el){
  if(!el) return [];
  const text = el.textContent;
  el.textContent = "";
  const frag = document.createDocumentFragment();
  const spans = [];
  for(const ch of text){
    const s = document.createElement("span");
    s.className = "char";
    s.textContent = ch === " " ? "\u00A0" : ch;
    frag.appendChild(s);
    spans.push(s);
  }
  el.appendChild(frag);
  return spans;
}

/* (2) Split + animate cho PORTFOLIO (kiểu “SplitText”) */
function animateMega(){
  if(!(window.gsap && window.ScrollTrigger)) return;
  const el = document.getElementById("megaTitle");
  if(!el) return;
  const chars = splitToChars(el);              // tách ký tự
  gsap.fromTo(
    chars,
    { opacity:0, y:80, scale:0.9, willChange:"transform,opacity" },
    {
      opacity:1, y:0, scale:1,
      duration:0.8, ease:"back.out(2)",
      stagger:0.04,
      scrollTrigger:{
        trigger: el,
        start: "top 70%",   // bắt đầu khi gần vào viewport
        once: true
      }
    }
  );
}

/* (3) ScrollFloat cho các heading có class .sf */
function animateScrollFloat(){
  if(!(window.gsap && window.ScrollTrigger)) return;
  document.querySelectorAll(".sf").forEach(el=>{
    const chars = splitToChars(el);
    gsap.fromTo(
      chars,
      { opacity:0, yPercent:120, scaleY:2.2, scaleX:0.75, transformOrigin:"50% 0%", willChange:"transform,opacity" },
      {
        opacity:1, yPercent:0, scaleY:1, scaleX:1,
        duration:1, ease:"back.inOut(2)",
        stagger:0.03,
        scrollTrigger:{
          trigger: el,
          start: "center bottom+=40%",
          end: "bottom bottom-=30%",
          scrub: true
        }
      }
    );
  });
}

/* (4) Gõ chữ cho câu chào (#heroType) */
function typeText({
  el, texts,
  typingSpeed=55, pause=2200, deletingSpeed=30,
  loop=false, showCursor=true, cursorChar="|"
}){
  if(!el) return;
  // Tạo con trỏ nháy
  let cursor; if(showCursor){
    cursor = document.createElement("span");
    cursor.className = "type-cursor";
    cursor.textContent = cursorChar;
    el.after(cursor);
  }
  let ti = 0, ci = 0, deleting = false, timer;
  const next = ()=>{
    const full = texts[ti];
    if(!deleting){
      if(ci < full.length){
        el.textContent = full.slice(0, ci+1);
        ci++;
        timer = setTimeout(next, typingSpeed);
      }else{
        if(texts.length > 1 || loop){
          deleting = true;
          timer = setTimeout(next, pause);
        }
      }
    }else{
      if(ci > 0){
        el.textContent = full.slice(0, ci-1);
        ci--;
        timer = setTimeout(next, deletingSpeed);
      }else{
        deleting = false;
        ti = (ti+1) % texts.length;
        timer = setTimeout(next, 200);
      }
    }
  };
  next();
  return ()=>clearTimeout(timer);
}

document.addEventListener("DOMContentLoaded", ()=>{
  renderList(); renderSkills(); renderProjects(); wire();

  // Kích hoạt hiệu ứng (đã chèn CDN trong index.html)
  if(window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    animateMega();
    animateScrollFloat();
  }

  // Bắt đầu gõ câu chào
  typeText({
    el: document.getElementById("heroType"),
    texts: ["Xin chào, mình là Vĩ—rất hân hạnh được đón bạn tại trang thông tin của mình!"],
    typingSpeed: 55,
    pause: 2200,
    deletingSpeed: 30,
    loop: false,
    showCursor: true,
    cursorChar: "|"
  });
});
