/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#E87BF8",
        purple: {
          base: "#8456EC",
          dark: "#240D57",
          light: "#501FC1",
          1: "#CCB6FF",
          2: "#EDE5FF",
          3: "#F6F2FF",
        },

        gray: {
          1: "#FBFAFF",
          2: "#F2F2F2",
          3: "#E0E0E0",
          4: "#BDBDBD",
          5: "#828282",
          6: "#4F4F4F",
        },
      },
    },
    borderRadius: {
      DEFAULT: "10px"
    },
  },
  plugins: [],
};
