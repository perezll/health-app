module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      16: "16px",
      15: "16px",
      18: "18px",
      11: "11px",
    },
    fontFamily: {
      noto: ["Noto Sans JP", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "primary-300": "#FFCC21",
      "primary-400": "#FF963C",
      white: "#FFFFFF",
      "gray-400": "#777777",
      "dark-500": "#414141",
      "dark-600": "#2E2E2E",
    },
    extend: {
      height: {
        72: "72px",
        56: "56px",
        "64px": "64px",
        234: "234px",
        "312px": "312px",
      },
      width: {
        234: "234px",
        296: "296px",
        280: "280px",
      },
    },
  },
  plugins: [],
};
