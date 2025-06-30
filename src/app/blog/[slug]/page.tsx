// Server Component — NO 'use client' here
import { getPublishedPosts, getPage } from '@/lib/notion';
import NotionClientRenderer from '@/components/NotionClientRenderer';

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: params.slug,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <div>404</div>;

  const recordMap = await getPage(post.id);

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-xl bg-white">
      <NotionClientRenderer recordMap={recordMap} />
    </div>
  );
}
