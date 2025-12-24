window.addEventListener("DOMContentLoaded", function () {
  
  // === 1. HÀM TẠO HIỆU ỨNG RUNG (JELLO) ===
  // Hàm này sẽ thêm class animation, đợi 900ms rồi gỡ bỏ
  function triggerAnimation(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
      el.classList.remove("jello-horizontal"); // Reset trước cho chắc
      void el.offsetWidth; // Hack nhỏ để trình duyệt nhận diện lại animation
      el.classList.add("jello-horizontal");
      
      // Xóa class sau khi chạy xong (0.9s = 900ms)
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
      aboutText: "Xin chào! Tôi là sinh viên Đại Học Kỹ Thuật-Công Nghệ Cần Thơ tôi đam mê xây dựng các hệ thống tự động hóa thông minh,Iot và nghiên cứu giải pháp năng lượng tối ưu",
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
      aboutText: "Hello! I am a final-year student at Can Tho University of Technology. I am passionate about building smart automation systems, IoT, and researching optimal energy solutions.",
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

  // SỰ KIỆN NÚT ĐỔI NGÔN NGỮ (Kèm hiệu ứng rung)
  document.getElementById("langBtn").addEventListener("click", () => {
    triggerAnimation("langBtn"); // <--- Kích hoạt hiệu ứng Jello
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

  // SỰ KIỆN NÚT ĐỔI GIAO DIỆN (Kèm hiệu ứng rung)
  modeBtn.addEventListener("click", () => {
    triggerAnimation("modeBtn"); // <--- Kích hoạt hiệu ứng Jello
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
});
