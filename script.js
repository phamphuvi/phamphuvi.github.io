window.addEventListener("DOMContentLoaded", function () {
  
  // === CẤU HÌNH THÔNG TIN CỦA BẠN ===
  const YOUR_EMAIL = "phamphuvi9@gmail.com"; 
  const YOUR_FACEBOOK = "https://www.facebook.com/PhamVi1209";

  // === DỮ LIỆU ĐA NGÔN NGỮ (Sửa nội dung trực tiếp ở đây) ===
  const I18N = {
    vi: {
      navProjects: "Dự án", navSkills: "Kỹ năng", navContact: "Liên hệ",
      kicker: "Portfolio cá nhân",
      heroHelloPrefix: "Xin chào, tôi là",
      heroLead: "Sinh viên trường Đại học Công Nghệ - Kỹ Thuật Cần Thơ. Quan tâm đến công nghệ, tự động hoá, IoT, năng lượng, và các dự án thực tiễn.",
      ctaCV: "Tải CV / Resume", ctaContact: "Liên hệ ngay",
      
      titleProjects: "Dự án tiêu biểu",
      p1Title: "Mô hình mức nước",
      p1Text: "Thiết kế và vận hành mô hình bồn nước: cảm biến mức, điều khiển PID/biến tần.",
      p2Title: "Giám sát IoT",
      p2Text: "Xây dựng hệ thống dashboard thu thập dữ liệu, cảnh báo cho trồng cây nhà kính.",
      p3Title: "Tối ưu hoá PVsyst",
      // ĐÃ SỬA ĐOẠN NÀY CHO BẠN:
      p3Text: "Nghiên cứu & mô phỏng hệ thống pin mặt trời có dàn chân điều hướng 1 trục hoặc 2 trục bằng phần mềm PVsyst để hỗ trợ tính toán hiệu suất tối ưu trước khi quyết định đầu tư cho hộ gia đình.",

      titleSkills: "Kỹ năng",
      skTech: "Kỹ thuật", skTools: "Công cụ", skOther: "Khác",
      skTechItem1: "Lập trình cơ bản, điện - điện tử",
      skTechItem2: "Thiết kế mô hình thử nghiệm",
      skToolsItem1: "Matlab/Simulink, PVsyst, AutoCAD",
      skToolsItem2: "GitHub Pages, bộ công cụ văn phòng",
      skOtherItem1: "Làm việc nhóm, báo cáo",
      skOtherItem2: "Tư duy logic, tự học",

      titleContact: "Liên hệ",
      contactHint: "Kết nối với tôi qua email hoặc mạng xã hội:",
      btnEmailText: "Gửi Email",
      emailLabel: "Email:",
    },
    en: {
      navProjects: "Projects", navSkills: "Skills", navContact: "Contact",
      kicker: "Personal Portfolio",
      heroHelloPrefix: "Hello, I'm",
      heroLead: "Student at Can Tho University of Technology and Engineering. Interested in Automation, IoT, and Renewable Energy.",
      ctaCV: "Download CV", ctaContact: "Contact Me",
      
      titleProjects: "Featured Projects",
      p1Title: "Water Level Control",
      p1Text: "Designed and operated a water tank model with level sensors and PID control.",
      p2Title: "IoT Monitoring",
      p2Text: "Built a dashboard for data collection and alerts for greenhouse farming.",
      p3Title: "PVsyst Optimization",
      p3Text: "Researched & simulated solar tracking systems using PVsyst to support investment decisions for households.",

      titleSkills: "Skills",
      skTech: "Technical", skTools: "Tools", skOther: "Other",
      skTechItem1: "Basic Programming, Electronics",
      skTechItem2: "Prototype Design",
      skToolsItem1: "Matlab/Simulink, PVsyst, AutoCAD",
      skToolsItem2: "GitHub Pages, MS Office",
      skOtherItem1: "Teamwork, Reporting",
      skOtherItem2: "Logical Thinking, Self-learning",

      titleContact: "Contact",
      contactHint: "Connect with me via email or social media:",
      btnEmailText: "Send Email",
      emailLabel: "Email:",
    }
  };

  // === LOGIC XỬ LÝ (KHÔNG CẦN SỬA) ===
  
  // 1. Cập nhật Link Facebook & Email hiển thị
  const fbBtn = document.getElementById("fbLink");
  if(fbBtn) fbBtn.href = YOUR_FACEBOOK;
  
  const emailDisplay = document.getElementById("yourEmail");
  if(emailDisplay) emailDisplay.textContent = YOUR_EMAIL;

  // 2. Xử lý nút Gửi Email (Mở Gmail hoặc Copy)
  const mailBtn = document.getElementById("openGmailBtn");
  if(mailBtn) {
    mailBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}`;
      window.open(url, '_blank');
    });
  }

  // 3. Xử lý Đa ngôn ngữ (I18N)
  const TEXT_IDS = Object.keys(I18N.vi);
  let currentLang = localStorage.getItem("lang") || "vi";
  
  function applyLang(lang) {
    const data = I18N[lang];
    TEXT_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = data[id];
    });
    document.getElementById("langBtn").textContent = lang.toUpperCase();
    localStorage.setItem("lang", lang);
  }
  
  applyLang(currentLang);
  document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";
    applyLang(currentLang);
  });

  // 4. Xử lý Dark/Light Mode
  const root = document.documentElement;
  let currentMode = localStorage.getItem("mode") || "dark"; // Mặc định Dark
  
  function applyMode(mode) {
    if (mode === "light") root.classList.add("light");
    else root.classList.remove("light");
    localStorage.setItem("mode", mode);
  }

  applyMode(currentMode);
  document.getElementById("modeBtn").addEventListener("click", () => {
    currentMode = root.classList.contains("light") ? "dark" : "light";
    applyMode(currentMode);
  });

  // 5. Cập nhật năm Footer
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
});
