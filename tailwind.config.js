module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    screens: {
      xs:'200px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {},
    fontFamily: {
      'main-font':'Cairo'
    }
    
  },
  plugins: [],
}