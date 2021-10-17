require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Rachid BAAZIZ - Software Engineer`,
    siteTitle: `Rachid BAAZIZ`,
    siteTitleAlt: `Rachid BAAZIZ - Software Engineer`,
    siteHeadline: `Rachid BAAZIZ - Software Engineer`,
    siteUrl: `https://rachidba.com`,
    siteDescription: `Rachid BAAZIZ - Software Engineer`,
    siteLanguage: `en`,
    author: `@rachidba`,
  },
  plugins: [
    googleAnalyticsTrackingId && {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          googleAnalyticsTrackingId,
        ],
        pluginConfig: {
          head: true,
          anonymize_ip: true,
        },
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rachid BAAZIZ - Software Engineer`,
        short_name: `rachidba`,
        description: `Software engineer`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
