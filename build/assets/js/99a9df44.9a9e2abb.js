"use strict";
(self.webpackChunkmy_website = self.webpackChunkmy_website || []).push([
	[937],
	{
		93: (e, n, t) => {
			t.r(n),
				t.d(n, {
					assets: () => a,
					contentTitle: () => l,
					default: () => h,
					frontMatter: () => s,
					metadata: () => o,
					toc: () => d,
				});
			const o = JSON.parse(
				'{"id":"technical-writing/concept-explainer","title":"Concept explainer","description":"Codecademy  |  February 2025","source":"@site/docs/technical-writing/concept-explainer.mdx","sourceDirName":"technical-writing","slug":"/concept-explainer","permalink":"/portfolio/projects/concept-explainer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"concept-explainer","title":"Concept explainer","description":"Codecademy  |  February 2025","slug":"/concept-explainer","sidebar_label":"Concept explainer","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"User guide","permalink":"/portfolio/projects/user-guide"},"next":{"title":"Method terminology","permalink":"/portfolio/projects/method-terminology"}}'
			);
			var i = t(4848),
				r = t(8453),
				c = t(183);
			const s = {
					id: "concept-explainer",
					title: "Concept explainer",
					description: "Codecademy  |  February 2025",
					slug: "/concept-explainer",
					sidebar_label: "Concept explainer",
					sidebar_position: 4,
				},
				l = "Concept explainer",
				a = {},
				d = [
					{ value: "Project overview", id: "project-overview", level: 2 },
					{ value: "Scope of work", id: "scope-of-work", level: 2 },
					{ value: "Outcome", id: "outcome", level: 2 },
				];
			function p(e) {
				const n = {
					em: "em",
					h1: "h1",
					h2: "h2",
					header: "header",
					img: "img",
					li: "li",
					p: "p",
					ul: "ul",
					...(0, r.R)(),
					...e.components,
				};
				return (0, i.jsxs)(i.Fragment, {
					children: [
						(0, i.jsx)(n.header, {
							children: (0, i.jsx)(n.h1, {
								id: "concept-explainer",
								children: "Concept explainer",
							}),
						}),
						"\n",
						(0, i.jsx)(n.p, { children: "Codecademy | February 2025" }),
						"\n",
						(0, i.jsxs)(n.p, {
							children: [
								(0, i.jsx)(n.img, {
									src: "https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white",
									alt: "Markdown",
								}),
								" ",
								(0, i.jsx)(n.img, {
									src: "https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white",
									alt: "VSCode",
								}),
								" ",
								(0, i.jsx)(n.img, {
									src: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
									alt: "GitHub",
								}),
							],
						}),
						"\n",
						(0, i.jsx)(n.h2, {
							id: "project-overview",
							children: "Project overview",
						}),
						"\n",
						(0, i.jsx)(n.p, {
							children:
								"I contributed to Codecademy's open-source documentation by writing a concept explainer for Node.js.",
						}),
						"\n",
						(0, i.jsx)(c.A, {
							url: "https://www.codecademy.com/resources/docs/general/node-js",
							children: (0, i.jsx)(n.p, { children: "View Project \u2192" }),
						}),
						"\n",
						(0, i.jsx)(n.p, {
							children: (0, i.jsx)(n.em, {
								children: "Note: All content was written by me.",
							}),
						}),
						"\n",
						(0, i.jsx)(n.h2, {
							id: "scope-of-work",
							children: "Scope of work",
						}),
						"\n",
						(0, i.jsxs)(n.ul, {
							children: [
								"\n",
								(0, i.jsx)(n.li, {
									children:
										"Conducted research on Node.js, covering its event-driven architecture, single-threaded model, and non-blocking I/O system.",
								}),
								"\n",
								(0, i.jsx)(n.li, {
									children:
										"Explained technical concepts in plain language to ensure accessibility for a wide range of readers.",
								}),
								"\n",
								(0, i.jsx)(n.li, {
									children:
										"Organized content to follow Codecademy's guidelines for SEO, style, and structure.",
								}),
								"\n",
							],
						}),
						"\n",
						(0, i.jsx)(n.h2, { id: "outcome", children: "Outcome" }),
						"\n",
						(0, i.jsxs)(n.ul, {
							children: [
								"\n",
								(0, i.jsx)(n.li, {
									children:
										"Provided readers with a clear and approachable introduction to Node.js including its history, architecture, advantages, and limitations.",
								}),
								"\n",
								(0, i.jsx)(n.li, {
									children:
										"Highlighted practical applications and use cases where Node.js excels, helping readers understand when and why to use Node.js.",
								}),
								"\n",
							],
						}),
						"\n",
						(0, i.jsx)(n.p, {
							children: (0, i.jsx)(n.img, {
								alt: "screenshot of Node.js concept explainer page",
								src: t(4638).A + "",
								width: "2460",
								height: "1866",
							}),
						}),
					],
				});
			}
			function h(e = {}) {
				const { wrapper: n } = { ...(0, r.R)(), ...e.components };
				return n
					? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) })
					: p(e);
			}
		},
		183: (e, n, t) => {
			t.d(n, { A: () => r });
			t(6540);
			const o = { interactiveButton: "interactiveButton_m7jC" };
			var i = t(4848);
			function r(e) {
				let { url: n, children: t } = e;
				return (0, i.jsx)("a", {
					href: n,
					target: "_blank",
					rel: "noopener noreferrer",
					children: (0, i.jsx)("button", {
						className: o.interactiveButton,
						role: "button",
						children: t,
					}),
				});
			}
		},
		4638: (e, n, t) => {
			t.d(n, { A: () => o });
			const o =
				t.p +
				"assets/images/nodejs-concept-explainer-c5fd925bb4b9347a6baeb70d4d11335d.png";
		},
		8453: (e, n, t) => {
			t.d(n, { R: () => c, x: () => s });
			var o = t(6540);
			const i = {},
				r = o.createContext(i);
			function c(e) {
				const n = o.useContext(r);
				return o.useMemo(
					function () {
						return "function" == typeof e ? e(n) : { ...n, ...e };
					},
					[n, e]
				);
			}
			function s(e) {
				let n;
				return (
					(n = e.disableParentContext
						? "function" == typeof e.components
							? e.components(i)
							: e.components || i
						: c(e.components)),
					o.createElement(r.Provider, { value: n }, e.children)
				);
			}
		},
	},
]);
