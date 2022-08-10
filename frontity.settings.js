const settings = {
  name: "webe",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["About-us", "/about-us/"],
            ["Contact", "/contact-page/"],
            ["partners", "/partners/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // url: "https://test.frontity.org",
          url: "https://public-api.wordpress.com/wp/v2/sites/goiblas.wordpress.com",
          // url: "http://localhost:8080/wordpress",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
