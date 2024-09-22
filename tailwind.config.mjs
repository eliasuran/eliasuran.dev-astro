/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors: {
        bg: "#DCD7BA",
        text: "#16161D",
        primary: "#2D4F67",
        secondary: "#213249"
      },
      keyframes: {
        bounceToRight: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(0px)' },
          '75%': { transform: 'translateX(2.5px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideDown: {
          '0%': { transform:'translateY(5px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
      animation: {
        'bounceToRight': 'bounceToRight 1s ease-in-out infinite',
        'slideDown': 'slideDown 0.3s'
      },
    },
	},
}
