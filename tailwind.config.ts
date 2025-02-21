import type {Config} from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const flowbite = require("flowbite-react/tailwind");

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primaryGray: '#F5F5F5',
                primaryRed: '#F6334A',
                primaryGreen: '#16A34A',
                primaryBlack: '#09090B',
                primaryBlue: '#0E7490',
                primaryText: '#252727',
            },
        },
    },
    plugins: [
        flowbite.plugin(),
    ],
} satisfies Config;

