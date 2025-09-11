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

  // Project modal
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalClose = document.getElementById("modal-close");

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.querySelector("h3").textContent;
      modalDesc.textContent = card.querySelector("p").textContent;
      modal.classList.remove("hidden");
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => modal.classList.add("hidden"));
  }

  // Skills radar chart
  if (document.getElementById("skills-chart")) {
    const ctx = document.getElementById("skills-chart").getContext("2d");
    new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["Go", "Java", "PostgreSQL", "Redis", "API Design", "System Design"],
        datasets: [{
          label: "Skills",
          data: [85, 80, 75, 70, 80, 65],
          backgroundColor: "rgba(59,130,246,0.2)",
          borderColor: "rgba(59,130,246,1)"
        }]
      },
      options: { responsive: true, scales: { r: { beginAtZero: true } } }
    });
  }
});
