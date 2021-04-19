const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    port:3001,
    alias: {
      "@": resolve('src'),
      "components": resolve("src/components")
    }
  }
}
