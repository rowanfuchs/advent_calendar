module.exports = {
    purge: {
        layers: [
            'base',
            'utilities'
        ],
        content: [
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}'
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    75: '#c2e0eb'
                }
            },
            maxWidth: {
                'xxs': '12rem'
            },
            minHeight: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
