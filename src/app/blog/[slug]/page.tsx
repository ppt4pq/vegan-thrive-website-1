// src/app/blog/[slug]/page.tsx

import { getPublishedPosts, getPage } from '@/lib/notion';
import NotionClientRenderer from '@/components/NotionClientRenderer';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// ✅ REQUIRED for static params
export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ✅ DON'T use a custom type name like PageProps
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

// ✅ Keep function name as `Page`, and inline types
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const recordMap = await getPage(post.id);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <NotionClientRenderer recordMap={recordMap} />
    </div>
  );
}
