module.exports = {
  email: 'christiankingnyamekye@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ChristianNyamekye',
    },
    {
      name: 'Linkedin',
      url: 'http://linkedin.com/in/christian-k-nyamekye',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/christiannyamekye.kjr?igsh=dzdlY3hrNHp2bWQ%3D&utm_source=qr',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/printlnxristian?s=21',
    },

    {
      name: 'Codepen',
      url: 'https://codepen.io/Christian-King-the-vuer',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#ffc663',
    navy: '#1e1e1f',
    darkNavy: '#121212',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
