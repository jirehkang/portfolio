import React from "react";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
	return (
		<div className={styles.projectsContainer}>
			<section className={styles.projectsTitle}>
				<h2>Select writing projects</h2>
			</section>
			<section className={styles.cardContainer}>
				<a className={styles.card} href="/portfolio/projects/api-reference">
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>API reference</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a className={styles.card} href="/portfolio/projects/sdk-documentation">
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>SDK documentation</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/portfolio/projects/knowledge-base-article"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Knowledge base article</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a className={styles.card} href="/portfolio/projects/ux-writing">
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>UX writing</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/portfolio/projects/website-content-writing"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Website content writing</h2>
						<p>Kim & Chang </p>
					</div>
				</a>
				<a className={styles.card} href="/portfolio/projects/concept-explainer">
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Concept explainer</h2>
						<p>Codecademy </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/portfolio/projects/method-terminology"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Method terminology</h2>
						<p>Codecademy </p>
					</div>
				</a>
			</section>
		</div>
	);
}
