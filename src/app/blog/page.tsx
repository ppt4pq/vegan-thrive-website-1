import { getPublishedPosts } from '@/lib/notion';
import Link from 'next/link';

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl text-green-700 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
