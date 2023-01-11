module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "publish",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    flexGrow: {
      0: 0,
      DEFAULT: 1,
      1: 1,
      2: 2,
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      inherit: "inherit",
      none: "none",
      2: "2 2 0%",
    },
    extend: {},
  },
  plugins: [],
};
