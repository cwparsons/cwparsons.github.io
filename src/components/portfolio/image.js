import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';

export const Image = ({ alt, imgName }) => (
	<StaticQuery
		query={graphql`
			query {
				allImageSharp {
					edges {
						node {
							gatsbyImageData(width: 363, layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
							resize {
								originalName
							}
						}
					}
				}
			}
		`}
		render={data => {
			const image = data.allImageSharp.edges.find(
				edge => edge.node.resize.originalName === imgName
			);

			if (!image) {
				return null;
			}

			return <GatsbyImage alt={alt} image={image.node.gatsbyImageData} />;
		}}
	/>
);
