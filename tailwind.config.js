/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html", 
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#2d71ae",
				primary2: "#83A5C8",
				primary3: "#D7E7F8",
				primary4: "#F9FCFF",
				primary5: "#FFBE84",
				primaryPink: "#E27A7A",
				primaryOrange: "#FF9E30",
			},
			gridTemplateColumns: {
				"30-70": "30% 70%",
				"40-60": "40% 60%",
			},
		},
	},
	plugins: [],
};
