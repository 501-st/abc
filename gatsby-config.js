module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "My Gatsby Site",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'https://st.example.ipst-dev.com',
                collectionTypes: [ // List of the Content Types you want to be able to request from Gatsby.
                    'articles',
                ],
                singleTypes: [
                    'info'
                ],
                queryLimit: 1000,
            },
        },
    ],

};
