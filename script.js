window.addEventListener("DOMContentLoaded", function () {
  
  // === 1. HÀM TẠO HIỆU ỨNG RUNG (JELLO) ===
  function triggerAnimation(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
      el.classList.remove("jello-horizontal");
      void el.offsetWidth;
      el.classList.add("jello-horizontal");
      setTimeout(() => {
        el.classList.remove("jello-horizontal");
      }, 900);
    }
  }

  // === 2. DỮ LIỆU ĐA NGÔN NGỮ ===
  const I18N = {
    vi: {
      roleText: "Sinh viên Kỹ thuật & IoT",
      navAbout: "Về tôi", navProjects: "Dự án", navSkills: "Kỹ năng", navContact: "Liên hệ",
      ctaCV: "Tải CV / Resume",
      titleAbout: "Về tôi",
      labelSchool: "Trường", labelLocation: "Nơi sống",
      // --- ĐÃ THÊM DỮ LIỆU TIẾNG VIỆT ---
      valSchool: "Đại Học Công Nghệ-Kỹ Thuật Cần Thơ",
      valLocation: "Cần Thơ, Việt Nam",

      titleProjects: "Dự án tiêu biểu",
      p1Title: "Mô hình mức nước", p1Text: "Thiết kế và vận hành mô hình bồn nước: cảm biến mức, điều khiển PID/biến tần, hiển thị trạng thái.",
      p2Title: "Giám sát IoT", p2Text: "Hệ thống dashboard thu thập dữ liệu, cảnh báo cho trồng cây nhà kính và trực quan hoá.",
      p3Title: "Tối ưu hoá PVsyst", p3Text: "Nghiên cứu & mô phỏng hệ thống pin mặt trời để hỗ trợ ra quyết định đầu tư.",
      titleSkills: "Kỹ năng", skTech: "Kỹ thuật", skTools: "Công cụ",
      skTechItem1: "Điện - Điện tử, Mạch nguyên lý", skTechItem2: "Lập trình C/C++, Arduino, Python cơ bản",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium", skToolsItem2: "PVsyst, GitHub, MS Office",
      titleContact: "Liên hệ", contactHint: "Đừng ngần ngại liên hệ với tôi qua:",
      langBtnText: "VI",
      
      "typewriter-text": "Là sinh viên tại Đại học Kỹ thuật - Công nghệ Cần Thơ (CTUT), tôi định hướng phát triển chuyên sâu trong lĩnh vực Tự động hóa và IoT. Với tư duy kỹ thuật nhạy bén, tôi luôn nỗ lực nghiên cứu và kiến tạo các giải pháp tối ưu hóa năng lượng, hướng đến việc xây dựng những hệ thống thông minh và bền vững cho tương lai."
    },
    en: {
      roleText: "IoT & Automation Student",
      navAbout: "About", navProjects: "Projects", navSkills: "Skills", navContact: "Contact",
      ctaCV: "Download CV",
      titleAbout: "About Me",
      labelSchool: "University", labelLocation: "Location",
      // --- ĐÃ THÊM DỮ LIỆU TIẾNG ANH ---
      valSchool: "Can Tho University of Technology",
      valLocation: "Can Tho, Vietnam",

      titleProjects: "Featured Projects",
      p1Title: "Water Level Control", p1Text: "Designed and operated a water tank model: level sensors, PID control/inverter, status display.",
      p2Title: "IoT Monitoring", p2Text: "Dashboard system for collecting data, alerting for greenhouse farming, and visualization.",
      p3Title: "PVsyst Optimization", p3Text: "Research & simulation of solar power systems to support investment decisions.",
      titleSkills: "Skills", skTech: "Technical", skTools: "Tools",
      skTechItem1: "Electronics, Circuit Design", skTechItem2: "C/C++, Arduino, Python Basic",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium", skToolsItem2: "PVsyst, GitHub, MS Office",
      titleContact: "Contact", contactHint: "Feel free to contact me via:",
      langBtnText: "EN",

      "typewriter-text": "As a student at Can Tho University of Technology (CTUT), I aim to specialize in Automation and IoT. With a sharp technical mindset, I constantly strive to research and create energy-optimized solutions, aiming to build smart and sustainable systems for the future."
    }
  };

  // === 3. XỬ LÝ NGÔN NGỮ ===
  let currentLang = localStorage.getItem("lang") || "vi";
  
  function applyLang(lang) {
    const data = I18N[lang];
    for (const [id, text] of Object.entries(data)) {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    }
    const btnText = document.querySelector("#langBtn .btn-text");
    const btnIcon = document.querySelector("#langBtn .btn-icon");
    if(btnText) btnText.textContent = data.langBtnText;
    if(btnIcon) btnIcon.textContent = lang === "vi" ? "🇻🇳" : "🇺🇸";
    localStorage.setItem("lang", lang);
  }
  
  // Chạy lần đầu
  applyLang(currentLang);

  document.getElementById("langBtn").addEventListener("click", () => {
    triggerAnimation("langBtn");
    currentLang = currentLang === "vi" ? "en" : "vi";
    applyLang(currentLang);
    
    // Reset hiệu ứng gõ chữ khi đổi ngôn ngữ
    if(typeWriterElement) {
        // Cập nhật text mới
        const newText = I18N[currentLang]["typewriter-text"];
        // Nếu muốn chạy lại hiệu ứng từ đầu:
        charIndex = 0;
        typeWriterElement.textContent = "";
        // Gọi lại hàm gõ chữ (cần cẩn thận để không bị chồng chéo timeout, nhưng đơn giản nhất là để nó tự chạy tiếp hoặc reload)
        // Cách tốt nhất đơn giản cho code này là reload trang hoặc gán thẳng text nếu không muốn phức tạp logic gõ chữ
        // Ở đây tôi chọn cách reload nhẹ hoặc gán thẳng text để tránh lỗi hiển thị
        // typeWriterElement.textContent = newText; // Bỏ comment dòng này nếu muốn hiện luôn không gõ lại
        window.location.reload(); // Reload để hiệu ứng gõ chữ mượt mà nhất với ngôn ngữ mới
    }
  });

  // === 4. XỬ LÝ GIAO DIỆN SÁNG/TỐI ===
  const root = document.body;
  const modeBtn = document.getElementById("modeBtn");
  const modeIcon = modeBtn.querySelector(".btn-icon");
  let currentMode = localStorage.getItem("mode") || "dark";

  function applyMode(mode) {
    if (mode === "light") {
      root.classList.add("light");
      modeIcon.textContent = "☀️";
    } else {
      root.classList.remove("light");
      modeIcon.textContent = "🌙";
    }
    localStorage.setItem("mode", mode);
  }
  applyMode(currentMode);

  modeBtn.addEventListener("click", () => {
    triggerAnimation("modeBtn");
    currentMode = currentMode === "dark" ? "light" : "dark";
    applyMode(currentMode);
  });

  // === 5. CÁC TÁC VỤ KHÁC ===
  document.getElementById("year").textContent = new Date().getFullYear();
  const YOUR_EMAIL = "phamphuvi9@gmail.com";
  document.getElementById("openGmailBtn").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}`, '_blank');
  });
  document.getElementById("fbLink").href = "https://www.facebook.com/PhamVi1209";

  // === 6. HIỆU ỨNG GÕ CHỮ ===
  const typeWriterElement = document.getElementById('typewriter-text');
  // Lấy nội dung từ I18N
  const fullText = I18N[currentLang]["typewriter-text"]; 
  const typingSpeed = 40; 
  let charIndex = 0;

  function typeEffect() {
    if (!typeWriterElement) return;
    if (charIndex < fullText.length) {
       typeWriterElement.textContent = fullText.substring(0, charIndex + 1);
       charIndex++;
       setTimeout(typeEffect, typingSpeed);
    }
  }

  if(typeWriterElement) {
      typeWriterElement.textContent = ""; 
      typeEffect();
  }
});
