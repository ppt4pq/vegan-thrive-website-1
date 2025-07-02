// src/app/blog/[slug]/page.tsx

import { getPublishedPosts, getPage } from '@/lib/notion';
import NotionClientRenderer from '@/components/NotionClientRenderer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: { params: { slug: string } }
): Promise<Metadata> {
  return {
    title: props.params.slug,
  };
}

export default async function Page(
  props: { params: { slug: string } }
) {
  const slug = props.params.slug;

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
