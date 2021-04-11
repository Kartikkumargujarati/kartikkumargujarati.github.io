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
        theme: "classic",
      },
    },
  ],
}