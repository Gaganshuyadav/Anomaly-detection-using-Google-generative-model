// tailwind.config.js
module.exports = {
    content: [
      ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"], 
    ],
    theme: {
      extend: {
        colors: {
          bodyCustomColor: '#ddd8d8',
        },
      },
    },
    plugins: [],
  };