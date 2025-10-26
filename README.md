# Portfolio tĩnh (V3) — Hero theo ảnh mẫu

- Thanh **menu dạng pill** giữa đầu trang (biểu tượng + nhãn).
- **Dark/Light toggle** kiểu segmented, nút ngôn ngữ dạng **bubble** (globe + chat).
- Tiêu đề **PORTFOLIO** chữ trắng đổ bóng 3D nhẹ.
- **Avatar tròn** phong cách flat + lời chào + 3 chevrons.
- Cấu trúc bên dưới: thẻ hồ sơ dính (trái) + nội dung (phải): About, Skills, Works, Contact.

## Sửa nhanh
- `script.js` → chỉnh `CONFIG` (CV_URL/EMAIL/PHONE/GITHUB), `ABOUT`, `SKILLS`, `PROJECTS`.
- Có thể thay SVG avatar bằng ảnh cá nhân: thay toàn bộ `<svg class="avatar">...</svg>` bằng `<img class="avatar" src="assets/me.jpg" alt="Phạm Phú Vĩ">`.

## Deploy
Upload `index.html`, `styles.css`, `script.js`, `cv.pdf` lên repo GitHub → **Settings → Pages** → `Deploy from a branch`.