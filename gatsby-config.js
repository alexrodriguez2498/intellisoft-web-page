module.exports = {
  siteMetadata: {
    title: `Intellisoft`,
    description: `Intellisoft is a custom software development solution for all kind of problems and clients, we offer services like scaling tech,
    build custom software (release), migration to top modern tech, software maintenance and many more!`,
    author: `@intellisoft_pr`,
    siteUrl: `https://intellisoftpr.com`,
    image: 'og/.png'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Intellisoft`,
        short_name: `Intellisoft`,
        start_url: `/`,
        background_color: '#fffffff',
        theme_color:  `#F79416`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-45666519-2',
    //   },
    // },
  ],
}
