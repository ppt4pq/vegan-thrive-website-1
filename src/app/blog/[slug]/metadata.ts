import { getPublishedPosts } from '@/lib/notion';
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === params.slug);

  return {
    title: post?.title || 'Post'
  };
}
