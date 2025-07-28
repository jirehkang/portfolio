import React from "react";
import styles from "./IntroSection.module.css";
import ScrollIcon from "../ScrollIcon";

export default function IntroSection() {
	return (
		<div className={styles.introContainer}>
			<section className={styles.introSection}>
				<div className={styles.introTextContainer}>
					<p className={styles.jobTitle}>
						Technical content writer and strategist
					</p>
				</div>
				<div className={styles.introTextContainer}>
					<h1 className={styles.myName}>Jireh Kang</h1>
				</div>
				<div className={styles.descriptionContainer}>
					<p>I make complex ideas clear,</p>
					<p>content purposeful,</p>
					<p>and experiences user-centered.</p>
				</div>
				<div className={styles.scrollIcon}>
					<ScrollIcon />
				</div>
			</section>
		</div>
	);
}
