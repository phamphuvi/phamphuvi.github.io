window.addEventListener("DOMContentLoaded", function () {
  
  // === 1. DỮ LIỆU ĐA NGÔN NGỮ ===
  const I18N = {
    vi: {
      roleText: "Sinh viên Kỹ thuật & IoT",
      navAbout: "Về tôi", navProjects: "Dự án", navSkills: "Kỹ năng", navContact: "Liên hệ",
      ctaCVText: "Tải CV / Resume", 
      titleProjects: "Dự án tiêu biểu",
      sloganProjects: "Think. Make. Solve.", // Thêm Slogan tiếng Việt (nếu muốn dịch)
      labelSchool: "Trường", labelLocation: "Nơi sống",
      valSchool: "Đại Học Công Nghệ-Kỹ Thuật Cần Thơ",
      valLocation: "Cần Thơ, Việt Nam",

      p1Title: "Mô hình mức nước", p1Text: "Thiết kế và vận hành mô hình bồn nước: cảm biến mức, điều khiển PID/biến tần, hiển thị trạng thái.",
      p2Title: "Giám sát IoT", p2Text: "Hệ thống dashboard thu thập dữ liệu, cảnh báo cho trồng cây nhà kính và trực quan hoá.",
      p3Title: "Tối ưu hoá PVsyst", p3Text: "Nghiên cứu & mô phỏng hệ thống pin mặt trời để hỗ trợ ra quyết định đầu tư.",
      titleSkills: "Kỹ năng", skTech: "Kỹ thuật", skTools: "Công cụ",
      skTechItem1: "Điện - Điện tử, Mạch nguyên lý", skTechItem2: "Lập trình C/C++, Arduino, Python cơ bản",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium", skToolsItem2: "PVsyst, GitHub, MS Office",
      titleContact: "Liên hệ", contactHint: "Đừng ngần ngại liên hệ với tôi qua:",
      langBtnText: "VI",
      
      "typewriter-text": "Là sinh viên tại Đại học Kỹ thuật - Công nghệ Cần Thơ (CTUT), tôi định hướng phát triển chuyên sâu trong lĩnh vực Tự động hóa và IoT."
    },
    en: {
      roleText: "IoT & Automation Student",
      navAbout: "About", navProjects: "Projects", navSkills: "Skills", navContact: "Contact",
      ctaCVText: "Download CV", 
      titleProjects: "Featured Projects",
      sloganProjects: "Think. Make. Solve.",
      labelSchool: "University", labelLocation: "Location",
      valSchool: "Can Tho University of Technology",
      valLocation: "Can Tho, Vietnam",

      p1Title: "Water Level Control", p1Text: "Designed and operated a water tank model: level sensors, PID control/inverter, status display.",
      p2Title: "IoT Monitoring", p2Text: "Dashboard system for collecting data, alerting for greenhouse farming, and visualization.",
      p3Title: "PVsyst Optimization", p3Text: "Research & simulation of solar power systems to support investment decisions.",
      titleSkills: "Skills", skTech: "Technical", skTools: "Tools",
      skTechItem1: "Electronics, Circuit Design", skTechItem2: "C/C++, Arduino, Python Basic",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium", skToolsItem2: "PVsyst, GitHub, MS Office",
      titleContact: "Contact", contactHint: "Feel free to contact me via:",
      langBtnText: "EN",

      "typewriter-text": "As a student at Can Tho University of Technology (CTUT), I aim to specialize in Automation and IoT."
    }
  };

  // === 2. XỬ LÝ NGÔN NGỮ ===
  let currentLang = localStorage.getItem("lang") || "vi";
  
  function applyLang(lang) {
    const data = I18N[lang];
    for (const [id, text] of Object.entries(data)) {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    }
    const btnText = document.querySelector("#langBtn .btn-text");
    if(btnText) btnText.textContent = data.langBtnText;
    localStorage.setItem("lang", lang);
  }
  
  applyLang(currentLang);

  document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";
    applyLang(currentLang);
    window.location.reload(); 
  });

  // === 3. XỬ LÝ GIAO DIỆN SÁNG/TỐI ===
  const root = document.body;
  const modeBtn = document.getElementById("modeBtn");
  const modeIcon = modeBtn.querySelector(".btn-icon");
  
  // Mặc định là Light theo giao diện mới
  let currentMode = localStorage.getItem("mode") || "light"; 

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
    currentMode = currentMode === "light" ? "dark" : "light";
    applyMode(currentMode);
  });

  // === 4. LINK LIÊN KẾT ===
  document.getElementById("year").textContent = new Date().getFullYear();
  const YOUR_EMAIL = "phamphuvi9@gmail.com";
  document.getElementById("openGmailBtn").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}`, '_blank');
  });
  document.getElementById("fbLink").href = "https://www.facebook.com/PhamVi1209";

  // === 5. HIỆU ỨNG GÕ CHỮ (TYPEWRITER) ===
  const typeWriterElement = document.getElementById('typewriter-text');
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

  // === 6. ANIMATION CUỘN TRANG (CARD FADE IN) ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  const animatedElements = document.querySelectorAll('.feature-card, .skill-card, .hero-content');
  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
  });

  // === 7. HIỆU ỨNG BLUR TEXT (MỚI THÊM) ===
  function initBlurText(elementId, delay = 150) {
    const el = document.getElementById(elementId);
    if (!el) return;

    // Tách nội dung thành các từ, giữ nguyên thẻ <br>
    const childNodes = Array.from(el.childNodes);
    el.innerHTML = ''; 

    childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            const words = node.textContent.trim().split(/\s+/);
            words.forEach(word => {
                if (word) {
                    const span = document.createElement('span');
                    span.textContent = word;
                    span.className = 'blur-word';
                    el.appendChild(span);
                    el.appendChild(document.createTextNode(' ')); 
                }
            });
        } else if (node.tagName === 'BR') {
            el.appendChild(node);
        } else {
             el.appendChild(node);
        }
    });

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const words = entry.target.querySelectorAll('.blur-word');
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('is-visible');
            }, index * delay); 
          });
          textObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    textObserver.observe(el);
  }

  // KÍCH HOẠT HIỆU ỨNG CHO 3 VỊ TRÍ
  setTimeout(() => {
      initBlurText("heroTitle", 100);       // "Hello, I'm Vĩ..."
      initBlurText("sloganProjects", 150);  // "Think. Make. Solve."
      initBlurText("titleContact", 150);    // "Liên hệ"
  }, 100);

});
