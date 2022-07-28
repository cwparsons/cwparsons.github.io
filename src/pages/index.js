import React from 'react';

import { Introduction } from '../components/introduction/introduction';
import { Card } from '../components/card/card';
import { Diploma } from '../components/diploma/diploma';
import { Portfolio } from '../components/portfolio/portfolio';
import { SocialMedia } from '../components/social-media/social-media';

import * as styles from '../styles/main.module.scss';
import Seo from '../components/seo/seo';

const Index = ({ data }) => (
	<>
		<Seo />
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

export default Index;