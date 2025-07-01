import svgToDataUri from "mini-svg-data-uri";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xs: "475px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        // Deep Ocean Professional Theme
        theme: {
          primary: {
            50: "#f0f9ff",
            100: "#e0f2fe", 
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",  // Main sky blue
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e"
          },
          accent: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",  // Main slate
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a"
          },
          neutral: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a"  // Deep slate for dark backgrounds
          },
          yellow: {
            50: "#fffbeb",   // Very light cream
            100: "#fef3c7",  // Light cream
            200: "#fde68a",  // Light yellow
            300: "#fcd34d",  // Medium light yellow
            400: "#fbbf24",  // Medium yellow
            500: "#f59e0b",  // Professional amber
            600: "#d97706",  // Darker amber
            700: "#b45309",  // Deep amber
            800: "#92400e",  // Very deep amber
            900: "#78350f"   // Darkest amber
          }
        },
        // Keep legacy colors for compatibility
        blue: {
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
        },
        purple: "#0ea5e9", // Replace purple with primary blue
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          spotlight: "spotlight 2s ease .75s 1 forwards",
          shimmer: "shimmer 2s linear infinite",
          first: "moveVertical 30s ease infinite",
          second: "moveInCircle 20s reverse infinite",
          third: "moveInCircle 40s linear infinite",
          fourth: "moveHorizontal 40s ease infinite",
          fifth: "moveInCircle 20s ease infinite",
          scroll:
            "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          spotlight: {
            "0%": {
              opacity: 0,
              transform: "translate(-72%, -62%) scale(0.5)",
            },
            "100%": {
              opacity: 1,
              transform: "translate(-50%,-40%) scale(1)",
            },
          },
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
          moveHorizontal: {
            "0%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
            "50%": {
              transform: "translateX(50%) translateY(10%)",
            },
            "100%": {
              transform: "translateX(-50%) translateY(-10%)",
            },
          },
          moveInCircle: {
            "0%": {
              transform: "rotate(0deg)",
            },
            "50%": {
              transform: "rotate(180deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          moveVertical: {
            "0%": {
              transform: "translateY(-50%)",
            },
            "50%": {
              transform: "translateY(50%)",
            },
            "100%": {
              transform: "translateY(-50%)",
            },
          },
          scroll: {
            to: {
              transform: "translate(calc(-50% - 0.5rem))",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function (_a) {
      var matchUtilities = _a.matchUtilities,
        theme = _a.theme;
      matchUtilities(
        {
          "bg-grid": function (value) {
            return {
              backgroundImage: 'url("'.concat(
                svgToDataUri(
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="'.concat(
                    value,
                    '"><path d="M0 .5H31.5V32"/></svg>'
                  )
                ),
                '")'
              ),
            };
          },
          "bg-grid-small": function (value) {
            return {
              backgroundImage: 'url("'.concat(
                svgToDataUri(
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="'.concat(
                    value,
                    '"><path d="M0 .5H31.5V32"/></svg>'
                  )
                ),
                '")'
              ),
            };
          },
          "bg-dot": function (value) {
            return {
              backgroundImage: 'url("'.concat(
                svgToDataUri(
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="'.concat(
                    value,
                    '" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>'
                  )
                ),
                '")'
              ),
            };
          },
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

export default config;
