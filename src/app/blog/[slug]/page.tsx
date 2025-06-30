import { getPublishedPosts, getPage } from '@/lib/notion';
import NotionClientRenderer from '@/components/NotionClientRenderer';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // Better than a <div> for 404
  }

  const recordMap = await getPage(post.id);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <NotionClientRenderer recordMap={recordMap} />
    </div>
  );
}
