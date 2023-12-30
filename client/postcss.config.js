module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    
     {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    },
    require('tailwind-accent-color'),
  ],
}