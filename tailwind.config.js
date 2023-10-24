/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      cred_pry: "#29506b",
      cred_dark: "#2c785c",
      cred_light: "#eff0f0",
      cred_sec: "#36237d",
      cred_sec_green: "#64ba84",
    },
  },
  plugins: [],
};
