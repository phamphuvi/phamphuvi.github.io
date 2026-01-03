window.addEventListener("DOMContentLoaded", function () {
  
  // === 1. DỮ LIỆU ĐA NGÔN NGỮ ===
  const I18N = {
    vi: {
      heroTitle: "Xin chào, mình là <span class='text-highlight'>Vĩ.</span>Xin mời bạn tham quan<br> dự án cá nhân của mình.<br>",
      roleText: "Sinh viên Kỹ thuật & IoT",
      navAbout: "Về tôi", navProjects: "Dự án", navSkills: "Kỹ năng", navContact: "Liên hệ",
      ctaCVText: "Tải CV / Resume", 
      titleProjects: "Dự án tiêu biểu",
      sloganProjects: "Tư duy. Thực hiện. Giải quyết.",
      labelSchool: "Trường", labelLocation: "Nơi sống",
      valSchool: "Đại Học Công Nghệ-Kỹ Thuật Cần Thơ",
      valLocation: "Cần Thơ, Việt Nam",

      p1Title: "Mô hình mức nước", p1Text: "Thiết kế và vận hành mô hình bồn nước: cảm biến mức, điều khiển PID/biến tần.",
      p2Title: "Giám sát IoT", p2Text: "Hệ thống dashboard thu thập dữ liệu, cảnh báo cho trồng cây nhà kính.",
      p3Title: "Tối ưu hoá PVsyst", p3Text: "Nghiên cứu & mô phỏng hệ thống pin mặt trời hỗ trợ đầu tư.",
      titleSkills: "Kỹ năng", skTech: "Kỹ thuật", skTools: "Công cụ",
      skTechItem1: "Điện - Điện tử, Mạch nguyên lý", skTechItem2: "Lập trình C/C++, Arduino, Python",
      skToolsItem1: "Matlab/Simulink, AutoCAD, Altium", skToolsItem2: "PVsyst, GitHub, MS Office",
      titleContact: "Liên hệ", contactHint: "Đừng ngần ngại liên hệ với tôi qua:",
      langBtnText: "VI",
      
      "typewriter-text": "Là sinh viên tại Đại học Kỹ thuật - Công nghệ Cần Thơ (CTUT), tôi định hướng phát triển chuyên sâu trong lĩnh vực Tự động hóa và IoT."
    },
    en: {
      heroTitle: "Hello, I'm <span class='text-highlight'>Vi.</span><br>Welcome to my<br>Personal Projects.",

      roleText: "IoT & Automation Student",
      navAbout: "About", navProjects: "Projects", navSkills: "Skills", navContact: "Contact",
      ctaCVText: "Download CV", 
      titleProjects: "Featured Projects",
      sloganProjects: "Think. Make. Solve.",
      labelSchool: "University", labelLocation: "Location",
      valSchool: "Can Tho University of Technology",
      valLocation: "Can Tho, Vietnam",

      p1Title: "Water Level Control", p1Text: "Designed and operated a water tank model: level sensors, PID control.",
      p2Title: "IoT Monitoring", p2Text: "Dashboard system for collecting data, alerting for greenhouse farming.",
      p3Title: "PVsyst Optimization", p3Text: "Research & simulation of solar power systems to support investment.",
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
      if (el) {
          el.innerHTML = text; 
      }
    }
    const btnText = document.querySelector("#langBtn .btn-text");
    if(btnText) btnText.textContent = data.langBtnText;
    localStorage.setItem("lang", lang);

    setTimeout(() => {
        initBlurText("heroTitle", 100);
    }, 50);
  }
  
  applyLang(currentLang);

  document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";
    applyLang(currentLang);
    window.location.reload(); 
  });

  // === 3. DARK MODE ===
  const root = document.body;
  const modeBtn = document.getElementById("modeBtn");
  const modeIcon = modeBtn.querySelector(".btn-icon");
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

  // === 4. LINKS ===
  document.getElementById("year").textContent = new Date().getFullYear();
  const YOUR_EMAIL = "phamphuvi9@gmail.com";
  document.getElementById("openGmailBtn").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}`, '_blank');
  });
  document.getElementById("fbLink").href = "https://www.facebook.com/PhamVi1209";

  // === 5. BLUR TEXT ANIMATION ===
  function initBlurText(elementId, delay = 150) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    el.innerHTML = I18N[currentLang][elementId] || el.innerHTML;

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
        } else {
             const clone = node.cloneNode(true);
             if (clone.tagName !== 'BR' && !clone.classList.contains('blur-word')) {
                 clone.classList.add('blur-word');
             }
             el.appendChild(clone);
             if (clone.tagName !== 'BR') el.appendChild(document.createTextNode(' '));
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

  // === RUN ANIMATION ===
  setTimeout(() => {
      initBlurText("heroTitle", 100);       
      initBlurText("sloganProjects", 150);  
      initBlurText("titleContact", 150);  
      
      const typeWriterElement = document.getElementById('typewriter-text');
      const fullText = I18N[currentLang]["typewriter-text"]; 
      let charIndex = 0;
      if(typeWriterElement) {
        typeWriterElement.textContent = "";
        function type() {
            if (charIndex < fullText.length) {
                typeWriterElement.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(type, 40);
            }
        }
        type();
      }
  }, 100);

  // === SCROLL FADE IN ===
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.feature-card, .skill-card, .hero-content').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
  });

  // === 6. PROFILE CARD TILT ENGINE (Đã chuyển đổi từ React sang JS thuần) ===
  function initProfileCard() {
    const wrap = document.getElementById('profileCardWrapper');
    if (!wrap) return;

    let width = wrap.clientWidth;
    let height = wrap.clientHeight;
    let targetX = width / 2;
    let targetY = height / 2;
    let currentX = width / 2;
    let currentY = height / 2;
    let rafId = null;

    // Giới hạn giá trị min/max
    const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

    // Cập nhật biến CSS để tạo hiệu ứng 3D
    function updateCSS(x, y) {
        const percentX = clamp((100 / width) * x, 0, 100);
        const percentY = clamp((100 / height) * y, 0, 100);
        
        // Tính toán các thông số vị trí cho ánh sáng và bóng đổ
        const pointerFromLeft = x / width;
        const pointerFromTop = y / height;
        const pointerFromCenter = Math.hypot(pointerFromLeft - 0.5, pointerFromTop - 0.5);

        // Góc xoay (Chia số càng lớn thì xoay càng nhẹ)
        const rotateX = -((percentY - 50) / 3.5); 
        const rotateY = (percentX - 50) / 3;

        wrap.style.setProperty('--pointer-x', `${percentX}%`);
        wrap.style.setProperty('--pointer-y', `${percentY}%`);
        wrap.style.setProperty('--pointer-from-left', pointerFromLeft);
        wrap.style.setProperty('--pointer-from-top', pointerFromTop);
        wrap.style.setProperty('--pointer-from-center', pointerFromCenter);
        wrap.style.setProperty('--rotate-x', `${rotateX}deg`);
        wrap.style.setProperty('--rotate-y', `${rotateY}deg`);
    }

    // Animation loop (Lerp - Linear Interpolation) để chuyển động mượt mà
    function animate() {
        const k = 0.1; // Độ trễ (0.1 = mượt, 1 = nhanh)
        currentX += (targetX - currentX) * k;
        currentY += (targetY - currentY) * k;

        updateCSS(currentX, currentY);

        const dist = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
        if (dist > 0.1) {
            rafId = requestAnimationFrame(animate);
        } else {
            rafId = null;
        }
    }

    function startAnimation() {
        if (!rafId) rafId = requestAnimationFrame(animate);
    }

    // Sự kiện chuột
    wrap.addEventListener('mousemove', (e) => {
        const rect = wrap.getBoundingClientRect();
        targetX = e.clientX - rect.left;
        targetY = e.clientY - rect.top;
        startAnimation();
    });

    wrap.addEventListener('mouseleave', () => {
        targetX = width / 2;
        targetY = height / 2;
        startAnimation();
    });
    
    window.addEventListener('resize', () => {
        width = wrap.clientWidth;
        height = wrap.clientHeight;
    });
    
    // Khởi tạo trạng thái ban đầu
    updateCSS(width / 2, height / 2);
  }

  // Kích hoạt Profile Card
  initProfileCard();

});
