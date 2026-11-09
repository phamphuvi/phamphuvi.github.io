window.addEventListener("DOMContentLoaded", function () {
  
  // === 1. DỮ LIỆU ĐA NGÔN NGỮ ===
  const I18N = {
    vi: {
      "heroTitle": "Xin chào, mình là <span class='text-highlight'>Vĩ.</span><br>Mời bạn tham quan<br>dự án cá nhân<br>của mình.",
      "roleText": "Kỹ sư Công nghệ Kỹ thuật Năng lượng",
      "navAbout": "Về tôi",
      "navProjects": "Dự án",
      "navExp": "Kinh nghiệm",
      "navSkills": "Kỹ năng",
      "navContact": "Liên hệ",
      "heroBtnProjects": "Xem dự án",
      "heroBtnCV": "Tải CV",
      "ctaCVText": "Tải CV / Resume",
      "titleProjects": "Dự án tiêu biểu",
      "sloganProjects": "Tư duy. Thực hiện. Giải quyết.",
      "labelSchool": "Trường",
      "labelLocation": "Nơi sống",
      "valSchool": "Đại Học Công Nghệ-Kỹ Thuật Cần Thơ",
      "valLocation": "Cần Thơ, Việt Nam",
      "p1Title": "Mô phỏng hệ thống điều hướng tấm pin mặt trời (PVsyst)",
      "p1Text": "Đề tài thực tập tốt nghiệp (báo cáo 8.9/10): dùng PVsyst so sánh hệ cố định, điều hướng 1 trục (có back-tracking) và 2 trục cho hệ 7,38 kWp (12 tấm 615 Wp) kèm pin lưu trữ 14,3 kWh, lấy số liệu từ một công trình thực tế tại Hậu Giang.",
      "p1Res": "Kết quả mô phỏng: 4.326 / 6.997 / 7.721 kWh/năm (cố định / 1 trục / 2 trục). Hệ 1 trục có tỷ số hiệu suất (PR) cao nhất nên được đề xuất cho hộ gia đình, vì cân bằng giữa sản lượng, chi phí và bảo trì.",
      "p2Title": "Hệ thống trồng hoa thông minh dùng năng lượng mặt trời",
      "p2Text": "Đề tài nhỏ trong học tập: thiết kế mô hình, lắp và đấu nối cảm biến, xây dựng luồng điều khiển tưới/chiếu sáng, cấu hình dashboard Blynk để giám sát từ xa và đặt ngưỡng cảnh báo. Mô hình vận hành ổn định trong phòng thí nghiệm.",
      "p2Res": "Tài liệu gốc đã thất lạc; mình đang lên kế hoạch làm lại một bản nhỏ kèm video demo.",
      "photoCap": "Hình ảnh công trình áp mái hộ gia đình mà mình tham gia khi thực tập tại Công ty Minh Sơn.",
      "titleSkills": "Kỹ năng",
      "skTech": "Chuyên môn",
      "skTools": "Công cụ và kỹ thuật",
      "skTechItem1": "Khảo sát, lắp đặt, nghiệm thu điện mặt trời áp mái: đã làm khi thực tập",
      "skTechItem2": "Mô phỏng và tối ưu hệ điện mặt trời bằng PVsyst: đã dùng trong đề tài",
      "skTechItem3": "PLC S7-1200 / TIA Portal, SCADA: cơ bản (học phần)",
      "skTechItem4": "IoT với Blynk và cảm biến: cơ bản (đề tài nhỏ)",
      "skToolsItem1": "AutoCAD: cơ bản",
      "skToolsItem2": "Mạng LAN/WiFi, máy in, máy chấm công, camera: đã làm thực tế",
      "skToolsItem3": "HTML/CSS/JS, GitHub Pages: cơ bản (chính trang này)",
      "skToolsItem4": "MS Office, Google Workspace, Canva, CapCut: đã dùng trong công việc",
      "titleExp": "Kinh nghiệm",
      "exp1Title": "Nhân viên kỹ thuật, trung tâm bảo hành thiết bị điện tử",
      "exp1Text": "Bảo hành, sửa chữa điện thoại TCL, HONOR và thiết bị trong hệ sinh thái DREAME.",
      "exp2Title": "Quản trị website và hỗ trợ kỹ thuật, Công ty TNHH DAFUNA",
      "exp2Text": "Quản trị website, tư vấn khách hàng, hỗ trợ đường truyền internet và thiết bị văn phòng (máy in, camera, máy tính, server nội bộ).",
      "exp3Title": "Thực tập sinh kỹ thuật, Công ty Minh Sơn",
      "exp3Text": "Khảo sát và tham gia lắp đặt hệ thống điện mặt trời áp mái, thiết bị điện dân dụng; hỗ trợ mạng nội bộ. Báo cáo thực tập loại Giỏi (8.9/10).",
      "exp4Title": "Nhân viên part-time, AM Coffee Cần Thơ",
      "exp4Text": "Chụp ảnh sản phẩm, thiết kế poster, dựng video ngắn; đề xuất lịch đăng bài, giúp lượt tiếp cận trang tăng hơn 30% trong 2 tháng.",
      "titleEdu": "Học vấn và chứng chỉ",
      "eduTitle": "Kỹ sư Công nghệ Kỹ thuật Năng lượng, ĐH Kỹ thuật - Công nghệ Cần Thơ",
      "eduText": "Tốt nghiệp loại Khá. Học phần tiêu biểu: điều khiển tự động, PLC & SCADA (TIA Portal, S7-1200), IoT công nghiệp, hệ thống năng lượng tái tạo (PVsyst).",
      "cert1": "Chứng nhận năng lực tiếng Anh CTUT: 835 điểm (06/2024)",
      "cert2": "Chứng chỉ Ứng dụng công nghệ thông tin cơ bản (01/2025)",
      "titleContact": "Liên hệ",
      "contactHint": "Đừng ngần ngại liên hệ với tôi qua:",
      "langBtnText": "VI",
      "cardRole": "Kỹ sư Năng lượng",
      "cardStatus": "Mở cơ hội mới",
      "typewriter-text": "Kỹ sư Công nghệ Kỹ thuật Năng lượng (CTUT, 2025), định hướng điện mặt trời, điện - điện tử và quản lý dự án. Thích học hỏi và luôn siêng năng trong công việc."
    },
    en: {
      "heroTitle": "Hello, I'm <span class='text-highlight'>Vi.</span><br>Welcome to my<br>Personal Projects.",
      "roleText": "Energy Engineering Technology Engineer",
      "navAbout": "About",
      "navProjects": "Projects",
      "navExp": "Experience",
      "navSkills": "Skills",
      "navContact": "Contact",
      "heroBtnProjects": "View projects",
      "heroBtnCV": "Download CV",
      "ctaCVText": "Download CV",
      "titleProjects": "Featured Projects",
      "sloganProjects": "Think. Make. Solve.",
      "labelSchool": "University",
      "labelLocation": "Location",
      "valSchool": "Can Tho University of Technology",
      "valLocation": "Can Tho, Vietnam",
      "p1Title": "Solar Tracker Simulation with PVsyst",
      "p1Text": "Graduation internship project (report score 8.9/10): used PVsyst to compare fixed, single-axis (with back-tracking) and dual-axis systems for a 7.38 kWp array (12 x 615 Wp panels) with a 14.3 kWh battery, using data from a real installation in Hau Giang.",
      "p1Res": "Simulated yield: 4,326 / 6,997 / 7,721 kWh/year (fixed / 1-axis / 2-axis). The 1-axis system had the highest performance ratio (PR), so it was recommended for households as the best balance of yield, cost and maintenance.",
      "p2Title": "Smart Flower Garden Powered by Solar Energy",
      "p2Text": "Small academic project: designed the model, wired the sensors, built the irrigation/lighting control flow, and set up a Blynk dashboard for remote monitoring and alert thresholds. The model ran stably in the lab.",
      "p2Res": "The original files were lost; I am planning to rebuild a small version with a demo video.",
      "photoCap": "Rooftop household installation I took part in during my internship at Minh Son Company.",
      "titleSkills": "Skills",
      "skTech": "Core skills",
      "skTools": "Tools and technical",
      "skTechItem1": "Rooftop solar survey, installation and acceptance: done during internship",
      "skTechItem2": "Solar system simulation and optimization with PVsyst: used in my project",
      "skTechItem3": "PLC S7-1200 / TIA Portal, SCADA: basic (coursework)",
      "skTechItem4": "IoT with Blynk and sensors: basic (small project)",
      "skToolsItem1": "AutoCAD: basic",
      "skToolsItem2": "LAN/WiFi, printers, time clocks, cameras: hands-on",
      "skToolsItem3": "HTML/CSS/JS, GitHub Pages: basic (this site)",
      "skToolsItem4": "MS Office, Google Workspace, Canva, CapCut: used at work",
      "titleExp": "Experience",
      "exp1Title": "Technician, electronics warranty and repair center",
      "exp1Text": "Warranty service and repair of TCL and HONOR phones and DREAME ecosystem devices.",
      "exp2Title": "Website administration and technical support, DAFUNA Co., Ltd.",
      "exp2Text": "Managed the website, advised customers, supported internet lines and office equipment (printers, cameras, computers, local server).",
      "exp3Title": "Technical intern, Minh Son Company",
      "exp3Text": "Surveyed and helped install rooftop solar and household electrical systems; supported the internal network. Internship report rated Excellent (8.9/10).",
      "exp4Title": "Part-time staff, AM Coffee Can Tho",
      "exp4Text": "Product photos, posters and short videos; proposed a posting schedule that raised average page reach by over 30% in 2 months.",
      "titleEdu": "Education and certificates",
      "eduTitle": "B.Eng. in Energy Engineering Technology, Can Tho University of Technology",
      "eduText": "Graduated with Good classification. Key courses: automatic control, PLC & SCADA (TIA Portal, S7-1200), industrial IoT, renewable energy systems (PVsyst).",
      "cert1": "CTUT English proficiency certificate: 835 points (06/2024)",
      "cert2": "Basic IT application certificate (01/2025)",
      "titleContact": "Contact",
      "contactHint": "Feel free to contact me via:",
      "langBtnText": "EN",
      "cardRole": "Energy Engineer",
      "cardStatus": "Open to opportunities",
      "typewriter-text": "Energy Engineering Technology graduate (CTUT, 2025) focused on solar power, electrical-electronics and project management. I enjoy learning and work diligently."
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

    document.documentElement.lang = lang;
  }
  
  applyLang(currentLang);

  document.getElementById("langBtn").addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";
    applyLang(currentLang);
    runIntro();
    });

  // === 3. DARK MODE ===
  const root = document.body;
  const modeBtn = document.getElementById("modeBtn");
  const modeIcon = modeBtn.querySelector(".btn-icon");
  let currentMode = localStorage.getItem("mode") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); 

  function applyMode(mode) {
    root.classList.toggle("light", mode === "light");
    // Biểu tượng cho biết nút sẽ chuyển sang chế độ nào
    modeIcon.textContent = "◐";
    localStorage.setItem("mode", mode);
  }
  applyMode(currentMode);

  modeBtn.addEventListener("click", () => {
    currentMode = currentMode === "light" ? "dark" : "light";
    applyMode(currentMode);
  });

  // === 4. LINKS ===
  document.getElementById("year").textContent = new Date().getFullYear();
  
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

  // Đã bỏ hiệu ứng gõ chữ và mờ chữ: nội dung do applyLang() hiển thị trực tiếp
  function runIntro() {}

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
