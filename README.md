# 🚀 Kapil Kuthe – Senior Backend Developer Portfolio & Blog

A personal **portfolio website + technical blog** built with [**Eleventy (11ty)**](https://www.11ty.dev/) and **TailwindCSS** (v3). It showcases **backend projects, fintech/banking experience, and blogs** on Go, Java, and modern distributed systems.

Designed with a clean, production-grade architecture focusing on **recruiter conversion, Core Web Vitals performance, SEO optimization, and WCAG 2.2 AA accessibility standards**.

---

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── _data/             # Content data files (separates data from markup)
│   │   ├── site.json      # Global site metadata (author, social links, base URL)
│   │   ├── skills.json    # Skill levels, categories, and devicon SVGs
│   │   ├── projects.json  # Projects list, tech stacks, and GitHub links
│   │   └── experience.json# Chronological timeline details
│   ├── _includes/         # Nunjucks layouts & template partials
│   │   ├── base.njk       # Core HTML layout shell (metadata, analytics, scripts)
│   │   ├── blog.njk       # Chained layout for blog articles
│   │   ├── header.njk     # Navigation and Dark/Light toggle
│   │   ├── footer.njk     # Dynamic copyright footer
│   │   ├── hero.njk       # Welcome banner, typing script, and eager avatar load
│   │   ├── skills.njk     # Dynamic loops for semantic progress bars
│   │   ├── projects.njk   # Dynamic loops for projects with source links
│   │   ├── experience.njk # Semantic timeline timeline list
│   │   └── contact.njk    # Styled call-to-action contact portals
│   ├── assets/            # CSS stylesheets, JS scripts, resume file, images
│   │   ├── css/
│   │   │   ├── input.css  # Source CSS with Tailwind directives & contrast overrides
│   │   │   └── style.css  # Pre-compiled production Tailwind stylesheet
│   │   ├── img/
│   │   │   └── profile.webp # Optimized eagerly loaded avatar image
│   │   └── js/
│   │       └── main.js    # LocalStorage theme management & active scrollspy
│   ├── blog/              # Blog index + posts
│   │   ├── index.njk      # Blog list page with pagination
│   │   └── why-learn-golang.md # Example blog post markdown
│   ├── robots.njk         # Dynamic robots.txt generation
│   └── sitemap.njk        # Dynamic XML sitemap generation
├── tailwind.config.js     # Tailwind CSS design system rules
├── postcss.config.js      # PostCSS directives
├── package.json           # Dependencies and build pipelines
└── .eleventy.js           # Eleventy configuration (passthroughs, filters, shortcodes)
```

---

## ⚙️ Setup & Installation

> [!NOTE]
> This project requires **Node.js v18+** to compile Eleventy (v3) templates from scratch. 

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kapilkkuthe/my-portfolio.git
   cd my-portfolio
   ```

2. **Install node dependencies:**
   ```bash
   npm install
   ```

3. **Run local development server with hot reloading:**
   ```bash
   npm run dev
   ```
   Open → [http://localhost:8080](http://localhost:8080)

4. **Build production static assets:**
   ```bash
   npm run build
   ```
   Built HTML/assets compile into the `_site/` directory.

---

## 🛠️ Tech Stack & Dependencies

* **Eleventy (11ty)** – Static site builder
* **TailwindCSS (v3)** – Utility CSS framework
* **@tailwindcss/typography** – Fenced prose for readable blog posts
* **Nunjucks** – Templating engine & partial imports

---

## ✨ Production-Grade Features

* **Data-Driven Architecture:** Project details, skills, and experience items are decoupled into JSON databases under `src/_data/`, allowing quick updates without changing template layouts.
* **WCAG 2.2 AA Compliance:**
  * Strict viewport scaling allows user zooming.
  * Contrast ratio >= 4.5:1 on light background elements using high-contrast Amber colors.
  * Skip-to-content links focusable by keyboard tab commands.
  * Semantic elements (`<ol>`, `<li>`, progress bar roles) for screen reader accessibility.
* **Performance Tuning (Core Web Vitals):**
  * Avatar converted to WebP formats, set to `eager` loading, and configured with `fetchpriority="high"`.
  * Removed unused render-blocking external libraries (`Chart.js`).
* **SEO Excellence:**
  * Meta descriptions, OG tags, canonical URLs, and dynamic Person JSON-LD schemas.
  * Correct heading flows (retained single `h1` headings).
  * Auto-generated `sitemap.xml` and `robots.txt` templates.
* **Recruiter Call-to-Actions:** Accessible resume download links and high-contrast email contact panels.

---

## 📝 Modifying Content & Writing Posts

### Editing Portfolio Sections
Modify text lists directly by changing files in the data directory:
* **Add a Skill:** Modify `src/_data/skills.json`
* **Add a Project:** Modify `src/_data/projects.json` (include Title, description, tags, and GitHub repo link)
* **Add Jobs:** Modify `src/_data/experience.json`

### Creating a Blog Post
1. Create a new markdown file under `src/blog/`:
   `src/blog/my-new-article.md`
2. Add metadata front matter:
   ```yaml
   ---
   layout: blog.njk
   title: "My New Article Title"
   date: 2026-08-02
   tags: post
   description: "Enter SEO summary description"
   author: "Kapil Kuthe"
   ---
   ```
3. Write the article in standard Markdown format below the front matter divider.

---

## 📬 Deployment

Since the compilation produces plain static assets, the folder `_site/` can be instantly deployed on static hosts like **Netlify, Vercel, or GitHub Pages**.

**Example (Netlify Settings):**
* Build command: `npm run build`
* Publish directory: `_site`

---

## 👤 Author

**Kapil Kuthe**  
*Senior Backend Developer (Go, Java Spring Boot, Fintech APIs)*  
* [GitHub](https://github.com/kapilkkuthe)
* [LinkedIn](https://linkedin.com/in/kapil-kuthe)

---

## 📄 License

MIT License. Feel free to clone, edit, and use with attribution.
