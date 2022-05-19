const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@atoms/*": path.resolve(__dirname, "./src/atoms/*"),
      "@atoms": path.resolve(__dirname, "./src/atoms"),
      "@organisms/*": path.resolve(__dirname, "./src/organisms/*"),
      "@organisms": path.resolve(__dirname, "./src/organisms"),
      "@molecules/*": path.resolve(__dirname, "./src/molecules/*"),
      "@molecules": path.resolve(__dirname, "./src/molecules"),
      "@assets/*": path.resolve(__dirname, "./src/assets/*"),
    },
  },
};
