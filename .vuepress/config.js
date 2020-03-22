module.exports = {
  description: 'HUErustics Homepage',
  themeConfig: {
    logo: '/images/navbarLogo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'HUEloop', link: '/hueloop/'  }
      ]
    },
    plugins: [
      "vuepress-plugin-mailchimp",
      {
        // You need to provide this plugin with your Mailchimp endpoint in order for it
        // to know where to save the email address. See more detail in Config section.
        endpoint: "https://gmail.us19.list-manage.com/subscribe/post?u=23e8f2e6ee91a4286e9f04e63&amp;id=49f63c2c6a"
      }
    ]
}

