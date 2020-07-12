module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-remove-serviceworker',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Clark Portfolio`,
        short_name: `AC Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#c1c9c9`,
        display: `standalone`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-128518967-1',
        head: true,
        defer: false,
        cookieDomain: "aaronmichaelclark.com",
      }
    }
  ],
};
