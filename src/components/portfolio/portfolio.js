import React from 'react';

import { Image } from './image';

import data from './data.json';

import globalStyles from '../../styles/main.module.scss';
import styles from './portfolio.module.scss';

const PortfolioItem = item => (
	<li className={styles.item} key={`${item.img}-key`}>
		<a className={styles.link} href={item.url} rel="nofollow">
			<div className={styles.frame}>
				<Image alt={item.alt} imgName={item.img} />
			</div>

			<span className={styles.title}>{item.name}</span>

			<span
				className={styles.desc}
				dangerouslySetInnerHTML={{ __html: item.desc }}
			/>
		</a>
	</li>
);

export const Portfolio = () => (
	<>
		<h2 className={globalStyles.narrative}>
			I’ve worked on some fun projects:
		</h2>

		<div className={styles.portfolio}>
			<ul className={styles.list}>
				{data && data.items && data.items.map(PortfolioItem)}
			</ul>
		</div>
	</>
);
