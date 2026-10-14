# My Blog — Portfolio (Jekyll + GitHub Pages)

نفس ستايل `0xislvm.github.io/aboutme/`:
- Hero full-screen مع particles network
- My Expertise
- Featured Projects
- Footer © + Build with Jekyll

## 1) عدّل بياناتك

افتح `_config.yml` وغيّر:

```yaml
author:
  name: اسمك
  title: المسمى الوظيفي
  email: you@example.com
  github: اليوزرنيم
  linkedin: اليوزرنيم
  twitter: اليوزرنيم
url: "https://اليوزرنيم.github.io"
```

المشاريع موجودة في `_includes/portfolio.html` — غيّر النص واللينكات والصور.

## 2) شغّله محلياً (اختياري)

محتاج Ruby + Jekyll:

```bash
cd D:\myblog
bundle install
bundle exec jekyll serve
# افتح http://localhost:4000
```

من غير Ruby: افتح `index.html` مباشرة هيشتغل كـ static (بس particles من CDN محتاج نت).

## 3) ارفعه على github.io

1. اعمل repo جديد على GitHub اسمه بالظبط: `yourusername.github.io`
2. ارفع محتويات `D:\myblog`:
```bash
cd D:\myblog
git init
git add .
git commit -m "portfolio blog"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```
3. من Settings → Pages → اختار Branch: main / root
4. بعد دقيقة افتح:
- `https://yourusername.github.io/` 
- `https://yourusername.github.io/aboutme/` (نفس صفحة المثال)

## الملفات

```
myblog/
├── _config.yml
├── Gemfile
├── index.html          # الرئيسية
├── aboutme/index.html  # /aboutme/ زي المثال
├── _layouts/default.html
├── _includes/portfolio.html  # عدّل هنا مشاريعك
├── assets/css/style.css
└── assets/js/particles-config.js
```
