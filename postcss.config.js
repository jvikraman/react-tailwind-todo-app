// Minimal postcss config to start with.
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify paths to all template files in the project.
  content: ["./src/**/*.html", "./src/**/*.jsx"],

  // Default function to extract classnames from templates.
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
