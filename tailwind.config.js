module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        background: "#070724",
        neutral: {
          100: "#FFFFFF",
          200: "#070724",
          300: "#38384F",
          400: "#838391",
          500: "#979797",
        },
        primary: {
          100: "#419EBB",
          200: "#EDA249",
          300: "#6F2ED6",
          400: "#D14C32",
        },
        secondary: {
          100: "#D83A34",
          200: "#CD5120",
          300: "#1EC2A4",
          400: "#2D68F0",
        },
        planets: {
          0: "#DEF4FC",
          1: "#F7CC7F",
          2: "#545BFE",
          3: "#FF6A45",
          4: "#ECAD7A",
          5: "#FCCB6B",
          6: "#65F0D5",
          7: "#497EFA",
        },
      },
      fontFamily: {
        antonio: ['"Antonio"', "sans-serif"],
        spartan: ['"Spartan"', "san-serif"],
      },
      fontSize: {
        80: "80px",
        48: "48px",
        40: "40px",
        28: "28px",
        24: "24px",
        15: "15px",
        14: "14px",
        12: "12px",
        11: "11px",
        9: "9px",
        8: "8px",
      },
      lineHeight: {
        103: "103px",
        62: "62px",
        52: "52px",
        36: "36px",
        31: "31px",
        25: "25px",
        22: "22px",
        16: "16px",
        10: "10px",
      },
      letterSpacing: {
        100: "-1.05px",
        200: "-1.5px",
        225: "-0.75px",
        250: "0.73px",
        300: "1px",
        400: "1.36px",
        500: "2.6px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
