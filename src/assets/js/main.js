document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeToggle.textContent = isDark ? "🌙" : "☀️";
    });

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      themeToggle.textContent = "🌙";
    }
  }

  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      const expanded = mobileBtn.getAttribute("aria-expanded") === "true";
      mobileBtn.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Scroll Spy with Intersection Observer
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href*='#']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navLink = document.querySelector(`nav a[href="/#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) =>
            link.classList.remove("text-amber-500", "font-semibold")
          );
          navLink?.classList.add("text-amber-500", "font-semibold");
        }
      });
    },
    { threshold: 0.6 } // trigger when 60% of section is visible
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Auto-highlight Blog link if we're on /blog/
  const blogLink = document.querySelector('nav a[href="/blog/"]');
  if (window.location.pathname.startsWith("/blog")) {
    blogLink?.classList.add("text-amber-500", "font-semibold", "active");
    const underline = blogLink.querySelector("span");
    if (underline) underline.style.width = "100%";
  }

  // Project modal
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const h3 = card.querySelector("h3");
      const descElem = card.querySelector("p");
      modalDesc.textContent = descElem ? descElem.textContent : "";
      modalDesc.textContent = card.querySelector("p").textContent;
      modal.classList.remove("hidden");
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => modal.classList.add("hidden"));
  }

  // Skills radar chart
  const skillsChartElem = document.getElementById("skills-chart");
  if (skillsChartElem) {
    if (typeof Chart !== "undefined") {
      const ctx = skillsChartElem.getContext("2d");
      new Chart(ctx, {
        type: "radar",
        data: {
          labels: [
            "Go",
            "Java",
            "PostgreSQL",
            "Redis",
            "MS SQL",
            "API Design",
            "System Design",
          ],
          datasets: [
            {
              label: "Skills",
              data: [80, 75, 75, 65, 80, 70, 65],
              backgroundColor: "rgba(59,130,246,0.2)",
              borderColor: "rgba(59,130,246,1)",
            },
          ],
        },
        options: { responsive: true, scales: { r: { beginAtZero: true } } },
      });
    } else {
      console.error("Chart.js is not loaded. Skills chart cannot be rendered.");
    }
  }
});
