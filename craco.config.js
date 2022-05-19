const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@atoms/*": path.resolve(__dirname, "./src/atoms/*"),
      "@atoms": path.resolve(__dirname, "./src/atoms"),
      "@organisms/*": path.resolve(__dirname, "./src/organism/s*"),
    },
  },
};
