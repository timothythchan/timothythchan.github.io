import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://timothythchan.github.io/",
    title: "Timothy Chan",
    description:
      "Personal website of Timothy Chan — Columbia Statistics, quantitative research and trading, and ML/AI system engineering.",
    author: "Timothy Chan",
    profile: "https://timothythchan.github.io/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/New_York",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/timothythchan/timothythchan.github.io/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/timothythchan" },
    { name: "linkedin", url: "https://linkedin.com/in/timothythchan/" },
    { name: "mail", url: "mailto:timothy.chan@stern.nyu.edu" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
