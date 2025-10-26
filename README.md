# Portfolio tĩnh (V2) — Giữ nguyên trang đầu, layout mới phần còn lại

Phần **hero đầu trang giữ nguyên**, các phần phía dưới lấy cảm hứng từ mẫu: hhlitval/simple-portfolio-template (layout 2 cột: trái là thẻ hồ sơ cố định, phải là nội dung).

## Cấu trúc
```
index.html
styles.css
script.js
cv.pdf     (tùy chọn)
```

## Sửa nhanh
Trong `script.js` → `CONFIG`:
- `CV_URL`, `EMAIL`, `PHONE`, `GITHUB`, `LINKEDIN`.

Cập nhật nội dung:
- `PROJECTS`, `SKILLS`, `TIMELINE`.
- Đa ngôn ngữ VI/EN: `I18N`.

## Deploy GitHub Pages
1. Tạo repo → upload 3 file + `cv.pdf` (nếu có).
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Lấy URL `https://<username>.github.io/<repo>/`.

> Gợi ý: Thay ảnh avatar (CSS `.avatar`) bằng `<img>` hoặc nền ảnh tròn; chỉnh màu trong `:root`.