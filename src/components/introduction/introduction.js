import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import styles from '../../styles/main.module.scss';

export const Introduction = () => {
	const { image } = useStaticQuery(
		graphql`
			query {
				image: file(relativePath: { eq: "portrait/portrait.jpg" }) {
					childImageSharp {
						fixed(width: 160, height: 160) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		`
	);

	return (
		<>
			<picture className={styles.portrait}>
				<Img fixed={image.childImageSharp.fixed} />
			</picture>

			<h1 className={styles.narrative}>
				Hi. I’m <b>Christopher Parsons</b>,<br />a front-end developer
				living in Toronto, Canada.
			</h1>
		</>
	);
};
