import React from 'react';

import { Introduction } from '../components/introduction/introduction';
import { Card } from '../components/card/card';
import { Diploma } from '../components/diploma/diploma';
import { Portfolio } from '../components/portfolio/portfolio';
import { SocialMedia } from '../components/social-media/social-media';

import styles from '../styles/main.module.scss';
import SEO from '../components/seo/seo';

export default ({ data }) => (
	<>
		<SEO />
		<main className={styles.container} role="main">
			<div className="h-card">
				<Introduction />
				<section>
					<Card />
				</section>
				<section>
					<Portfolio />
				</section>
				<section>
					<Diploma />
				</section>
				<section>
					<SocialMedia />
				</section>
			</div>
		</main>
	</>
);
