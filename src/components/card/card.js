//@ts-check

import React from 'react';
import classnames from 'classnames';

// @ts-ignore
import * as styles from './card.module.scss';

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
						'p-name',
						'u-url'
					)}
					href="https://www.habaneroconsulting.com/team/christopher-parsons"
					itemProp="name"
				>
					Christopher <b>Parsons</b>
				</a>

				<div className="title" itemProp="jobTitle">
					Front-End Architect
				</div>

				<div className={styles.contact}>
					<a
						className={classnames(styles.link, styles.phone)}
						href="tel:6479056845"
						itemProp="telephone"
					>
						647.905.6845
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
						className={classnames(styles.link, 'url')}
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
						510 - 1111 Melville Street
					</span>
					,&nbsp;
					<span itemProp="addressLocality">Vancouver</span>
					,&nbsp;
					<span itemProp="addressRegion">BC</span>
					&nbsp;
					<span itemProp="postalCode">V6E 3V6</span>
				</address>
			</div>
		</div>
	</div>
);
