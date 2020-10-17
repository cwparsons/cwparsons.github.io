import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export const Image = ({ alt, imgName }) => (
	<StaticQuery
		query={graphql`
			query {
				allImageSharp {
					edges {
						node {
							fluid(maxWidth: 363) {
								...GatsbyImageSharpFluid_withWebp
								originalName
							}
						}
					}
				}
			}
		`}
		render={data => {
			const image = data.allImageSharp.edges.find(
				edge => edge.node.fluid.originalName === imgName
			);

			if (!image) {
				return null;
			}

			return <Img alt={alt} fluid={image.node.fluid} />;
		}}
	/>
);
