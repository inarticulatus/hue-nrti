module.exports = {
  title: "HUE",
  themeConfig: {
    logo: '/images/navbarLogo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'HUEloop', link: '/hueloop/'  },
      { text: 'About Us', link: '/AboutUs/'  }
      ]
    },
    head: [
      ['link', { rel: 'icon', href: `/images/navbarLogo.png` }],
    ]
}

