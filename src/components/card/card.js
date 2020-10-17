import React from 'react';
import classnames from 'classnames';

import styles from './card.module.scss';

export const Card = () => (
	<div className={styles.wrapper}>
		<div
			className={classnames(styles.card, styles.back)}
			itemScope
			itemType="http://schema.org/Person"
		>
			<div className={styles.container}>
				<a
					className={classnames(
						styles.name,
						styles['p-name'],
						styles['u-url']
					)}
					href="https://www.habaneroconsulting.com/team/christopher-parsons"
					itemProp="name"
				>
					Christopher <b>Parsons</b>
				</a>

				<div className={styles.title} itemProp="jobTitle">
					Front-End Architect
				</div>

				<div className={styles.contact}>
					<a
						className={classnames(styles.link, styles.phone)}
						href="tel:14162605959,196"
						itemProp="telephone"
					>
						416.260.5959 x196
					</a>
					<a
						className={classnames(styles.link, styles.phone)}
						href="tel:18668416201,196"
						itemProp="telephone"
					>
						866.841.6201{' '}
						<span className={styles.phoneType}>Toll-Free</span>
					</a>
					<a
						className={classnames(styles.link, styles.email)}
						href="mailto:cparsons@habaneroconsulting.com"
						itemProp="email"
					>
						cparsons@habaneroconsulting.com
					</a>
					<a
						className={classnames(styles.link, styles.url)}
						href="https://www.habaneroconsulting.com"
						itemProp="url"
					>
						habaneroconsulting.com
					</a>
				</div>
			</div>
		</div>

		<div className={classnames(styles.card, styles.front)}>
			<div className={styles.container}>
				<a
					className={styles.organization}
					href="https://www.habaneroconsulting.com"
					title="Habanero"
					itemProp="organization"
				>
					Habanero
				</a>
				<address className={styles.address} itemProp="address">
					<span itemProp="streetAddress">
						705 - 119 Spadina Avenue
					</span>
					,&nbsp;
					<span itemProp="addressLocality">Toronto</span>
					,&nbsp;
					<span itemProp="addressRegion">Ontario</span>
					&nbsp;
					<span itemProp="postalCode">M5V 2L1</span>
				</address>
			</div>
		</div>
	</div>
);
