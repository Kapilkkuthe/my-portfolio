# 🚀 Kapil Kuthe – Portfolio & Blog

A personal **portfolio website + technical blog** built with [**Eleventy (11ty)**](https://www.11ty.dev/), **TailwindCSS**, and **@tailwindcss/typography**.  
Showcasing **backend projects, fintech experience, and blogs** on Go, Java, and modern development.

---

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── _includes/         # Nunjucks layouts & partials
│   │   ├── base.njk       # Global site layout (header/footer)
│   │   ├── blog.njk       # Blog post layout
│   │   ├── header.njk     # Header / Navigation
│   │   └── footer.njk     # Footer
│   ├── assets/            # CSS, JS, resume, images
│   ├── blog/              # Blog index + posts
│   │   ├── index.njk      # Blog index page with pagination
│   │   └── why-learn-golang.md # Example post
│   └── index.md           # Landing page (hero, skills, projects, etc.)
├── tailwind.config.js     # Tailwind config with typography plugin
├── postcss.config.js      # PostCSS config
├── package.json           # Scripts & dependencies
└── .eleventy.js           # Eleventy config (shortcodes, dirs, etc.)
```

---

## ⚙️ Setup & Installation

1. **Clone the repo**
    ```bash
    git clone https://github.com/your-username/my-portfolio.git
    cd my-portfolio
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run locally with hot reload**
    ```bash
    npm run dev
    ```
    Visit → [http://localhost:8080](http://localhost:8080)

4. **Build for production**
    ```bash
    npm run build
    ```
    Output → `_site/`

---

## 🛠️ Tech Stack

- **Eleventy** – Static site generator
- **TailwindCSS** – Utility-first CSS framework
- **@tailwindcss/typography** – Beautiful prose for blog posts
- **Nunjucks** – Layouts & includes
- **Chart.js** – Skill graphs & visualizations

---

## ✨ Features

- 🌙 Dark/Light mode toggle
- 👨‍💻 Hero section with typing effect + tagline
- 📊 Skills section with icons & progress bars
- 📂 Projects section with categorized cards
- 🏢 Experience timeline with hover effects
- ✍️ Blog system with SEO optimization
- 📑 Resume download link
- 🔎 SEO optimized (meta, schema, JSON-LD)

---

## 📝 Writing a Blog Post

1. **Create a new Markdown file in `src/blog/`:**
    ```
    src/blog/my-first-post.md
    ```

2. **Add front matter:**
    ```yaml
    ---
    layout: blog.njk
    title: "My First Blog Post"
    date: 2025-09-15
    tags: post
    description: "Short description for SEO"
    author: "Kapil Kuthe"
    ---
    ```

3. **Write your post in Markdown.**  
   Eleventy + Tailwind Typography = clean, professional blog layout.

---

## 📬 Deployment

Static build — deploy anywhere:

- **Vercel**
- **Netlify**
- **GitHub Pages**

**Example (Netlify):**
```bash
npm run build
# deploy _site folder
```

---

## 🤝 Contributing Guide

Want to improve this repo? Contributions are welcome!

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push your branch
5. Open a Pull Request

**Contribution Ideas:**

- Improve UI/UX (animations, accessibility, performance)
- Add new blog posts (tech, fintech, backend topics)
- Enhance SEO and meta tags
- Add new skill or project cards
- Fix bugs in layout or styling

---

## 👤 Author

**Kapil Kuthe**  
Backend Developer (Go, Java Spring Boot, Fintech APIs)  
[GitHub](https://github.com/kapilkuthe) | [LinkedIn](https://linkedin.com/in/kapilkuthe)

---

## 📄 License

This project is licensed under the MIT License — you are free to use, modify, and distribute it with attribution.

```
MIT License

Copyright (c) 2025 Kapil Kuthe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
