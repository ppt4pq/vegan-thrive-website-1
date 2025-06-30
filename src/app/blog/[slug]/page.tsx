import { getPublishedPosts, getPage } from '@/lib/notion';
import NotionClientRenderer from '@/components/NotionClientRenderer';
import type { Metadata } from 'next';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

export default async function BlogPostPage({ params }: Params) {
  const posts = await getPublishedPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    // You may want to redirect or throw notFound()
    return <div className="text-center py-20 text-gray-500">404 – Post not found</div>;
  }

  const recordMap = await getPage(post.id);

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-xl bg-white shadow">
      <NotionClientRenderer recordMap={recordMap} />
    </div>
  );
}
