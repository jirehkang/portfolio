import React from "react";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
	return (
		<div className={styles.projectsContainer}>
			<section className={styles.projectsTitle}>
				<h2>Featured projects</h2>
			</section>
			<section className={styles.cardContainer}>
				<a className={styles.card} href="/portfolio/projects/api-reference">
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>API Reference</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a className={styles.card} href="/portfolio/projects/sdk-documentation">
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>SDK Documentation</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/portfolio/projects/knowledge-base-article"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Knowledge Base Article</h2>
						<p>Sendbird </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/portfolio/projects/website-content-writing"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Website Content Writing</h2>
						<p>Kim & Chang </p>
					</div>
				</a>
				<a className={styles.card} href="/portfolio/projects/concept-explainer">
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Concept Explainer</h2>
						<p>Codecademy </p>
					</div>
				</a>
				<a
					className={styles.card}
					href="/portfolio/projects/positioning-generator"
				>
					<div className={styles.overlay}>
						<h2 className={styles.cardTitle}>Positioning Generator</h2>
						<p>Side Project </p>
					</div>
				</a>
			</section>
			<section className={styles.viewAllProjects}>
				<a href="/portfolio/projects/category/writings">
					<button>View All Projects →</button>
				</a>
			</section>
		</div>
	);
}
