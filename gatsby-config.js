/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e0nm04p5xgz5`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "W-q1kmOgXABQudFfPJTj7bVXk0M610_tooLcP3M58TE",
      },
    },
  ],
}