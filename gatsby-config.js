module.exports = {
  siteMetadata: {
    description: "Personal page of Kartik Kumar Gujarati",
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
          'line': '#cfd1d7',
          'skill-1': '#3DDC84',
          'skill-2': '#766DB2',
          'skill-3': '#f4447c',
          'skill-4': '#007acc',
          'skill-5': '#3c873a',
          'skill-6': '#e2432a',
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