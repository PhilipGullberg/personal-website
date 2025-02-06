// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{vue,js,ts,jsx,tsx}", // Anpassa efter dina filvägar
    ],
    theme: {
      extend: {
        colors: {
          // Primärfärger för en ren design
          primary: {
            DEFAULT: "#000000", // Svart används som primär färg för rubriker, ikoner, osv.
          },
          secondary: {
            DEFAULT: "#FFFFFF", // Vitt som basfärg för bakgrunder
          },
          // Olika nyanser av grått för subtila accenter, gränser och bakgrunder
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
        },
        fontFamily: {
          // En modern sans-serif för en ren och tydlig typografi
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
        spacing: {
          // Anpassade spacingvärden om du vill ha jämna marginaler och padding
          '128': '32rem',
          '144': '36rem',
        },
      },
    },
    plugins: [],
  };
  