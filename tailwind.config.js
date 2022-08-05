/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
    safelist: [],
    theme: {
    extend: {
        maxWidth: {
            '8xl'  : '86rem',
            '9xl'  : '90rem',
            '10xl' : '94rem',
        },
        colors: {
            brand: {
                '500' : ''
            }
        },
    },
    },
    plugins: [],
}