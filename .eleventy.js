const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");

  // Create a collection for blog posts
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").sort((a, b) => {
      return b.date - a.date; // newest first
    });
  });

  // Add a date filter
  eleventyConfig.addFilter("date", function(dateObj, format = "yyyy-MM-dd") {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
