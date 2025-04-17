import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                base: ['Montserrat', 'sans-serif'], 
            },
            fontSize: {
                xs: '0.75em',
                sm: '0.875em',
                base: '1em',
                lg: '1.125em',
                xl: '1.25em',
                '2xl': '1.5em',
                '3xl': '1.875em',
                '4xl': '2.25em',
            }
        },
    },
    plugins: [],
}
export default config
