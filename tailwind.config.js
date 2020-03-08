module.exports = {
  theme: {
    colors: {
    	purple: {
	    	dark: "#1f1528",
	    	light: "#332541"
    	},
      white: "#ffffff",
      grey: "#bbb8be"
    },
    container: {
      center: true,
      padding: '2rem'
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
     },
     inset: {
     	"1": "1.5rem"
     },
     fontFamily: {
     	"heading": ["CPMono_v07 Bold", "Lucida Console", "Monaco"],
     	"footer": ["CPMono_v07 Plain", "Lucida Console", "Monaco"],
     }
  },
  variants: {
  	width: ["responsive"]
  },
  plugins: []
}
