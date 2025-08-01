// src/app/blog/[slug]/page.tsx
import { getPublishedPosts, getPage } from '@/lib/notion';
import NotionClientRenderer from '@/components/NotionClientRenderer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic'; // Force dynamic resolution

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // Defensive check for params being async in edge environments
  const { slug } = await Promise.resolve(params);

  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === slug);

  return {
    title: post?.title || 'Post',
  };
}

export default async function Page(
  { params }: { params: { slug: string } }
) {
  // Defensive await for edge case compatibility
  const { slug } = await Promise.resolve(params);

  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  const recordMap = await getPage(post.id);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <NotionClientRenderer recordMap={recordMap} />
    </div>
  );
}
