module.exports = {
  siteMetadata: {
    title: `YAMLayout Default Starter`,
    description: `The default Gatsby starter for YAMLayout projects.`,
    author: `@telework`,
    siteUrl: `https://yamlayout.netlify.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work Sans:800', 'Public Sans:500&display=swap'],
        }
      }
    }
  ],
}
