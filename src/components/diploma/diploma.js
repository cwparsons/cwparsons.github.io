import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

import globalStyles from "../../styles/main.module.scss";
import styles from "./diploma.module.scss";

export const Diploma = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "diploma/coatofarms.png" }) {
          childImageSharp {
            fixed(width: 30, height: 40) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <>
      <p className={globalStyles.narrative}>
        I received my <abbr title="Bachelor of Science">B.Sc.</abbr> in
        Computing Science
        <br /> from Simon Fraser University.
      </p>

      <div className={styles.diploma}>
        <a className={styles.link} href="http://www.sfu.ca">
          <Img fixed={image.childImageSharp.fixed} />
          <div className={styles.school}>Simon Fraser University</div>
        </a>

        <div className={styles.narrative}>
          The chancellor and senate of Simon Fraser University
          <br />
          on the recommendation of
          <br />
          the Faculty of Applied Sciences
          <br />
          have awarded
        </div>

        <div className={styles.name}>Christopher Whitelaw Parsons</div>

        <div className={styles.narrative}>The degree of</div>

        <div className={styles.degree}>Bachelor of Science</div>

        <div className={styles.narrative}>
          In testimony whereof we have sealed and subscribed
          <br />
          this diploma by our hand.
        </div>

        <div className={styles.date}>September 2012</div>

        <div className={styles.seal}>Seal of Simon Fraser University</div>
      </div>
    </>
  );
};
