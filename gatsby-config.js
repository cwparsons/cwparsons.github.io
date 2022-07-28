const path = require('path');

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`)
			}
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: `GTM-P68XJS`,
				includeInDevelopment: true
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-smartypants`]
			}
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`
	],
	siteMetadata: {
		author: '@cwlparsons',
		title: `Christopher Parsons, Front-End Developer`,
		siteUrl: `https://cwparsons.ca`,
		description: `A portfolio site for Christopher Parsons, front-end developer.`
	}
};
