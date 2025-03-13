
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom cyberpunk theme colors
				cyber: {
					black: '#0D0D0F',
					darkgray: '#121218',
					gray: '#1D1D25',
					blue: '#33FFFF',
					purple: '#A64FFF',
					pink: '#FF33AA',
					accent: '#FFCC33',
					'text-primary': '#FFFFFF',
					'text-secondary': '#AAAACC'
				},
				medieval: {
					gold: '#D4AF37',
					silver: '#AAB1C0',
					parchment: '#F5ECDA',
					wood: '#8B5A2B',
					stone: '#7D7F80'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				cyber: ['Orbitron', 'sans-serif'],
				medieval: ['Cinzel', 'serif'],
				sans: ['Inter', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px 0 rgba(51, 255, 255, 0.3), 0 0 10px 0 rgba(51, 255, 255, 0.2)'
					},
					'50%': { 
						boxShadow: '0 0 20px 5px rgba(51, 255, 255, 0.5), 0 0 30px 10px rgba(51, 255, 255, 0.3)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'text-flicker': {
					'0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
					'20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.5' }
				},
				'slide-from-right': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-from-left': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-from-bottom': {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'text-flicker': 'text-flicker 3s linear infinite',
				'slide-from-right': 'slide-from-right 0.6s ease-out',
				'slide-from-left': 'slide-from-left 0.6s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-from-bottom': 'slide-from-bottom 0.6s ease-out'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(51, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 255, 255, 0.05) 1px, transparent 1px)',
				'cyber-glow': 'radial-gradient(circle at center, rgba(51, 255, 255, 0.15) 0%, rgba(13, 13, 15, 0) 70%)',
				'medieval-texture': 'url("/medieval-texture.png")'
			},
			boxShadow: {
				'neon-blue': '0 0 5px 0 rgba(51, 255, 255, 0.7), 0 0 10px 0 rgba(51, 255, 255, 0.5), 0 0 15px 0 rgba(51, 255, 255, 0.3)',
				'neon-purple': '0 0 5px 0 rgba(166, 79, 255, 0.7), 0 0 10px 0 rgba(166, 79, 255, 0.5), 0 0 15px 0 rgba(166, 79, 255, 0.3)',
				'neon-pink': '0 0 5px 0 rgba(255, 51, 170, 0.7), 0 0 10px 0 rgba(255, 51, 170, 0.5), 0 0 15px 0 rgba(255, 51, 170, 0.3)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
