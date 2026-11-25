export const SITE_CONFIG = {
    title: "Timothy Chan",
    logoSrc: "/favicon.svg",
    description: "Columbia Statistics · Quantitative Research and Trading · ML/AI System Engineering.",
    author: "Timothy Chan",
    signature: "TTC",
    site: "https://timothythchan.github.io",
    imageServer: ["https://images.pexels.com"],
    postsPerPage: 6,
    projectsPerPage: 12,
    defaultImage: "/blog-placeholder-1.png",
    nav: [
        { text: "Blog", href: "/blog" },
        { text: "Projects", href: "/projects" },
    ],
    homepage: {
        harmonicSystem: {
            seed: 2026,
            speed: 0.0042
        },
        links: [
            { text: "Read the blog", href: "/blog" },
            { text: "See the projects", href: "/projects" }
        ]
    },
    footer: {
        social: [
            { text: "Projects", href: "/projects" },
            { text: "Elsewhere", href: "/elsewhere" }
        ],
        copyright: "Timothy Chan"
    },
    elsewhere: [
        {
            name: "GitHub",
            handle: "timothythchan",
            url: "https://github.com/timothythchan",
        },
        {
            name: "LinkedIn",
            handle: "timothythchan",
            url: "https://linkedin.com/in/timothythchan/",
        },
        {
            name: "Mail",
            handle: "timothy.chan@stern.nyu.edu",
            url: "mailto:timothy.chan@stern.nyu.edu",
        }
    ],
    articleCopyright: {
        enabled: false,
        declaration: "No part of this article may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of the author."
    }
};
