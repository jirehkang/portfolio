// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Jireh Kang's Writing Portfolio",
	tagline: "Technical Writing, UX Writing, and More",
	favicon: "img/jk-logo.ico",

	// Set the production url of your site here
	url: "https://jirehkang.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/portfolio/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "jirehkang", // Usually your GitHub org/user name.
	projectName: "portfolio", // Usually your repo name.
	trailingSlash: false,
	deploymentBranch: "gh-pages",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					routeBasePath: "/projects",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				blog: false,
				/*	{
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				}, */
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/jirehkang-logo.png",
			navbar: {
				title: "Jireh Kang",
				logo: {
					alt: "Jireh Kang's Portfolio Logo",
					src: "img/jirehkang-logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Projects",
					},
					{
						to: "/about",
						position: "left",
						label: "About",
					},
					// { to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/jirehkang/portfolio",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				// links: [
				// 	{
				// 		title: "Docs",
				// 		items: [
				// 			{
				// 				label: "Writings",
				// 				to: "/docs/intro",
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "Community",
				// 		items: [
				// 			{
				// 				label: "Stack Overflow",
				// 				href: "https://stackoverflow.com/questions/tagged/docusaurus",
				// 			},
				// 			{
				// 				label: "Discord",
				// 				href: "https://discordapp.com/invite/docusaurus",
				// 			},
				// 			{
				// 				label: "X",
				// 				href: "https://x.com/docusaurus",
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: "More",
				// 		items: [
				// 			{
				// 				label: "Blog",
				// 				to: "/blog",
				// 			},
				// 			{
				// 				label: "GitHub",
				// 				href: "https://github.com/jirehkang/portfolio",
				// 			},
				// 		],
				// 	},
				// ],
				copyright: `Copyright © ${new Date().getFullYear()} Jireh Kang's Writing Portfolio. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
