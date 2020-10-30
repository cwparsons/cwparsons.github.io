import React from 'react';

import globalStyles from '../../styles/main.module.scss';
import styles from './socialmedia.module.scss';

export const SocialMedia = () => (
	<>
		<h2 className={globalStyles.narrative}>I can be found around the web:</h2>

		<ul className={styles.list}>
			<li className={styles.item}>
				<a className={styles.icon} href="https://github.com/cwparsons">
					GitHub
				</a>
			</li>
			<li className={styles.item}>
				<a
					className={styles.icon}
					href="https://www.linkedin.com/in/cwlparsons"
				>
					LinkedIn
				</a>
			</li>
			<li className={styles.item}>
				<a className={styles.icon} href="http://www.last.fm/user/Whtlw">
					last.fm
				</a>
			</li>
		</ul>
	</>
);
