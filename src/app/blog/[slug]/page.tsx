import * as React from 'react';
import { getPublishedPosts, getPage } from '@/lib/notion';
import NotionClientRenderer from '@/components/NotionClientRenderer';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params; // ✅ Important!

  return {
    title: slug,
  };
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({
    params,
  }: BlogPostPageProps) {
    const { slug } = params;
  

  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === slug);

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
