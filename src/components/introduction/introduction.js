//@ts-check

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';

// @ts-ignore
import * as globalStyles from '../../styles/main.module.scss';

export const Introduction = () => {
	const { image } = useStaticQuery(
		graphql`{
        image: file(relativePath: {eq: "portrait/portrait.jpg"}) {
          childImageSharp {
            gatsbyImageData(width: 160, height: 160, layout: CONSTRAINED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
	);

	return <>
        <picture className={globalStyles.portrait}>
            <GatsbyImage alt="A profile photo of Christopher Parsons." image={image.childImageSharp.gatsbyImageData} />
        </picture>

        <h1 className={globalStyles.narrative}>
            Hi. I’m <b>Christopher Parsons</b>,<br />a front-end developer
            living in Vancouver, Canada.
        </h1>
    </>;
};
