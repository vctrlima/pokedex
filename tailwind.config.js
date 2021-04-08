module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: [
                'Segoe UI',
                'Arial',
                'sans-serif'
            ],
        },
        extend: {
            colors: {
                'white-default': '#FFFFFF',
                'ebony-clay': '#232C37',
                'porcelain': '#F5F6F7',
                'mercury': '#E6E6E6',
                'cadet-blue': '#B0B8C7',
                'mountain-meadow': '#159F6E',
                'buttercup': '#F7A61C',
                'cinnabar': '#E4362B',
                'merlin': '#3D3D38',
                'indigo': '#366FC6',
                'shakespeare': '#40A0CD',
                'trendy-pink': '#7C538C',
                'coral-tree': '#B1736C',
                'shamrock': '#48D0B0',
                'carnation': '#F76363',
                'mirage': '#1A232E',
                'oxford-blue': '#35414F'
            },
            screens: {
				'lg': '992px'
			},
        },
    },
    variants: {
        backgroundColor: ['hover', 'focus', 'dark'],
        textColor: ['hover', 'focus', 'dark'],
    },
    plugins: [],
};
