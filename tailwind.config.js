/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'login': '#FFFFFF',
        'profile': '#FDFDFD',
        'home-page': '#FAFAFA',
        'white-700': '#F1F1F1',
        'profile-page': '#F1F5F9',
        'primary-logo': '#02274F',
        'secondary-logo': '#FDCF00', 
        'hover-button': '#1f3d5b'
      },
      width: {
        'login': '438px',
        'logo': '295px',
        'input': '386px',        
        'button-logout': '272px',
        'profile': '356px',
        'input-profile': '296px',
        'img-profile': '58px',
        'container-picture-profile': '77px',
        'input-profile': '296px',
      },
      height: {
        'login': '534px',
        'logo': '116px',
        'input': '23px',
        'button-sign': '54px',
        'button-logout': '44px',
        'header': '70px',
        'profile': '315px',
        'input-profile': '44px',
        'img-profile': '56px',
        'container-picture-profile': '77px',
      }
    },
    borderRadius: {
      'radius-login': '18px',
      'radius-input': '9px',
      'radius-img-profile': '8px',
      'button-logout': '6.33px'
    },
    fontSize:{
        'text-lg-input': '18px',
        'text-title-profile': '12px',
        'text-title-information': '14px',
        'text-button-logout': '16px'
    },
    lineHeight:{
      'line-height-input': '22.5px',
      'line-height-button': '56.25px',
      'line-height-title-profile': '12px',
      'line-height-button-logout': '16px'
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      inter: ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}

