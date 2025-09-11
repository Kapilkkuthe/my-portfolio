document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "🌓 Theme";
  toggleBtn.className = "fixed bottom-4 right-4 px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    // save preference
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // load preference
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

});
