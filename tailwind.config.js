module.exports = {
  content: ["./src/**/*.{njk,md,html}"],
  darkMode: "class", // toggle with .dark
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        accent: "var(--accent)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
