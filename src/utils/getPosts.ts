const allMarkdownModules = import.meta.glob<{
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    pubDate?: string;
    readTime?: string;
    image?: string;
    slug?: string;
  };
  default: any;
}>('../content/blog/*.md', { eager: true });

export interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  href: string;
}

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];

    if (!module) continue;

    const frontmatter = module.frontmatter || {};

    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    const slug = frontmatter.slug || fileName;

    if (!slug) continue;

    const dateStr = frontmatter.date || frontmatter.pubDate || '';

    posts.push({
      title: frontmatter.title || '',
      description: frontmatter.description || '',
      date: dateStr,
      readTime: frontmatter.readTime || '5 min read',
      image: frontmatter.image || '/assets/images/tech-background-dark.svg',
      slug: slug,
      href: `/posts/${slug}/`,
    });
  }

  posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return posts;
}

export function getPostBySlug(slug: string): {
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    pubDate?: string;
    readTime?: string;
    image?: string;
    slug?: string;
  };
  Content: any;
  slug: string;
} | null {
  for (const filePath in allMarkdownModules) {
    const module = allMarkdownModules[filePath];
    if (!module) continue;

    const frontmatter = module.frontmatter || {};
    const pathMatch = filePath.match(/\/([^/]+)\.md$/);
    const fileName = pathMatch ? pathMatch[1] : '';
    const fileSlug = frontmatter.slug || fileName;

    if (fileSlug === slug) {
      return {
        frontmatter,
        Content: module.default,
        slug: fileSlug,
      };
    }
  }
  return null;
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
