module.exports = {
  siteMetadata: {
    description: "Kartik Kumar Gujarati's personal page",
    locale: "en",
    title: "👨‍💻 Kartik Kumar Gujarati",
    formspreeEndpoint: "https://formspree.io/f/{your-id}",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: {
          'back': '#e8eaef',
          'front': '#1f1f1f',
          'lead': '#eee841',
          'lead-text': '#1f1f1f',
          'line': '#cfd1d7'
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-83586790-3"
        ],
      },
    },
  ],
}