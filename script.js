window.addEventListener("DOMContentLoaded", function () {
  
  // === 1. DỮ LIỆU ĐA NGÔN NGỮ (VI/EN) ===
  const I18N = {
    vi: {
      roleText: "Sinh viên Kỹ thuật & IoT",
      navAbout: "Về tôi", navProjects: "Dự án", navSkills: "Kỹ năng", navContact: "Liên hệ",
      ctaCV: "Tải CV / Resume",
      
      titleAbout: "Về tôi",
      aboutText: "Xin chào! Tôi là sinh viên năm cuối Đại học Công Nghệ - Kỹ Thuật Cần Thơ. Tôi đam mê xây dựng các hệ thống tự động hoá thông minh, IoT và nghiên cứu giải pháp năng lượng tối ưu.",
      labelSchool: "Trường", labelLocation: "Nơi sống",
      
      titleProjects: "Dự án tiêu biểu",
      p1Title: "Mô hình mức nước",
      p1Text: "Thiết kế và vận hành mô hình bồn nước: cảm biến mức, điều khiển PID/biến tần, hiển thị trạng thái.",
      p2Title: "Giám sát IoT",
      p2Text: "Hệ thống dashboard thu thập dữ liệu, cảnh báo cho trồng cây nhà kính và trực quan hoá.",
      p3Title: "Tối ưu hoá PVsyst",
      p3Text: "Nghiên cứu & mô phỏng hệ thống pin mặt trời để hỗ trợ ra quyết định đầu tư.",

      titleSkills: "Kỹ năng",
      skTech: "Kỹ thuật", skTools: "Công cụ",
      skTechItem1: "Điện - Điện tử, Mạch nguyên lý",
      skTechItem2: "Lập trình C/C++, Arduino, Python cơ bản",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium",
      skToolsItem2: "PVsyst, GitHub, MS Office",

      titleContact: "Liên hệ",
      contactHint: "Đừng ngần ngại liên hệ với tôi qua:",
      
      // Text nút bấm
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
      p1Title: "Water Level Control",
      p1Text: "Designed and operated a water tank model: level sensors, PID control/inverter, status display.",
      p2Title: "IoT Monitoring",
      p2Text: "Dashboard system for collecting data, alerting for greenhouse farming, and visualization.",
      p3Title: "PVsyst Optimization",
      p3Text: "Research & simulation of solar power systems to support investment decisions.",

      titleSkills: "Skills",
      skTech: "Technical", skTools: "Tools",
      skTechItem1: "Electronics, Circuit Design",
      skTechItem2: "C/C++, Arduino, Python Basic",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium",
      skToolsItem2: "PVsyst, GitHub, MS Office",

      titleContact: "Contact",
      contactHint: "Feel free to contact me via:",

      langBtnText: "EN"
    }
  };

  // === 2. XỬ LÝ CHUYỂN ĐỔI NGÔN NGỮ ===
  let currentLang = localStorage.getItem("lang") || "vi";
  
  function applyLang(lang) {
    const data = I18N[lang];
    // Duyệt qua tất cả các ID trong data và gán text
    for (const [id, text] of Object.entries(data)) {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    }
    
    // Cập nhật nút ngôn ngữ
    const btnText = document.querySelector("#langBtn .btn-text");
    const btnIcon = document.querySelector("#langBtn .btn-icon");
    if(btnText) btnText.textContent = data.langBtnText;
    if(btnIcon) btnIcon.textContent = lang === "vi" ? "🇻🇳" : "🇺🇸";
    
    localStorage.setItem("lang", lang);
  }
  
  // Khởi chạy lần đầu
  applyLang(currentLang);

  // Sự kiện click nút đổi ngôn ngữ
  document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";
    applyLang(currentLang);
  });

  // === 3. XỬ LÝ GIAO DIỆN SÁNG / TỐI ===
  const root = document.body; // Gán class vào body
  const modeBtn = document.getElementById("modeBtn");
  const modeIcon = modeBtn.querySelector(".btn-icon");
  
  let currentMode = localStorage.getItem("mode") || "dark";

  function applyMode(mode) {
    if (mode === "light") {
      root.classList.add("light");
      modeIcon.textContent = "☀️"; // Mặt trời
    } else {
      root.classList.remove("light");
      modeIcon.textContent = "🌙"; // Mặt trăng
    }
    localStorage.setItem("mode", mode);
  }

  applyMode(currentMode);

  modeBtn.addEventListener("click", () => {
    currentMode = currentMode === "dark" ? "light" : "dark";
    applyMode(currentMode);
  });

  // === 4. XỬ LÝ CÁC LIÊN KẾT KHÁC ===
  // Cập nhật năm footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Nút Email (Mở Gmail)
  const YOUR_EMAIL = "phamphuvi9@gmail.com";
  document.getElementById("openGmailBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}`;
    window.open(url, '_blank');
  });

  // Link Facebook
  const YOUR_FB = "https://www.facebook.com/PhamVi1209";
  document.getElementById("fbLink").href = YOUR_FB;
});
