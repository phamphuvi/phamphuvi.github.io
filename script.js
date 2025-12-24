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
  // Lưu ý: Đã bỏ aboutText ở đây để không bị xung đột với hiệu ứng gõ chữ
  const I18N = {
    vi: {
      roleText: "Sinh viên Kỹ thuật & IoT",
      navAbout: "Về tôi", navProjects: "Dự án", navSkills: "Kỹ năng", navContact: "Liên hệ",
      ctaCV: "Tải CV / Resume",
      titleAbout: "Về tôi",
      labelSchool: "Trường", labelLocation: "Nơi sống",
      titleProjects: "Dự án tiêu biểu",
      p1Title: "Mô hình mức nước", p1Text: "Thiết kế và vận hành mô hình bồn nước: cảm biến mức, điều khiển PID/biến tần, hiển thị trạng thái.",
      p2Title: "Giám sát IoT", p2Text: "Hệ thống dashboard thu thập dữ liệu, cảnh báo cho trồng cây nhà kính và trực quan hoá.",
      p3Title: "Tối ưu hoá PVsyst", p3Text: "Nghiên cứu & mô phỏng hệ thống pin mặt trời để hỗ trợ ra quyết định đầu tư.",
      titleSkills: "Kỹ năng", skTech: "Kỹ thuật", skTools: "Công cụ",
      skTechItem1: "Điện - Điện tử, Mạch nguyên lý", skTechItem2: "Lập trình C/C++, Arduino, Python cơ bản",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium", skToolsItem2: "PVsyst, GitHub, MS Office",
      titleContact: "Liên hệ", contactHint: "Đừng ngần ngại liên hệ với tôi qua:",
      langBtnText: "VI"
    },
    en: {
      roleText: "IoT & Automation Student",
      navAbout: "About", navProjects: "Projects", navSkills: "Skills", navContact: "Contact",
      ctaCV: "Download CV",
      titleAbout: "About Me",
      labelSchool: "University", labelLocation: "Location",
      titleProjects: "Featured Projects",
      p1Title: "Water Level Control", p1Text: "Designed and operated a water tank model: level sensors, PID control/inverter, status display.",
      p2Title: "IoT Monitoring", p2Text: "Dashboard system for collecting data, alerting for greenhouse farming, and visualization.",
      p3Title: "PVsyst Optimization", p3Text: "Research & simulation of solar power systems to support investment decisions.",
      titleSkills: "Skills", skTech: "Technical", skTools: "Tools",
      skTechItem1: "Electronics, Circuit Design", skTechItem2: "C/C++, Arduino, Python Basic",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium", skToolsItem2: "PVsyst, GitHub, MS Office",
      titleContact: "Contact", contactHint: "Feel free to contact me via:",
      langBtnText: "EN"
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
  applyLang(currentLang);

  document.getElementById("langBtn").addEventListener("click", () => {
    triggerAnimation("langBtn");
    currentLang = currentLang === "vi" ? "en" : "vi";
    applyLang(currentLang);
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

  // === 6. HIỆU ỨNG GÕ CHỮ (TYPEWRITER) ===
  const typeWriterElement = document.getElementById('typewriter-text');
  
  // Chia đoạn văn dài thành các câu nhỏ để hiệu ứng đẹp hơn
  const textArray = [
    "Xin chào! Tôi là sinh viên Đại Học Kỹ Thuật-Công Nghệ Cần Thơ.",
    "Tôi đam mê xây dựng các hệ thống tự động hóa thông minh, IoT.",
    "Và nghiên cứu giải pháp năng lượng tối ưu."
  ];

  const typingSpeed = 50;    // Tốc độ gõ
  const deletingSpeed = 30;  // Tốc độ xóa
  const pauseDuration = 2000; // Thời gian dừng

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!typeWriterElement) return;

    const currentText = textArray[textIndex];
    
    if (isDeleting) {
      typeWriterElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeWriterElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = pauseDuration; // Dừng lại đọc
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length; // Chuyển câu tiếp theo
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Chạy hiệu ứng
  typeEffect();
});
