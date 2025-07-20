import { getPublishedPosts } from '@/lib/notion';
import Link from 'next/link';

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="flex flex-col flex-grow max-w-3xl mx-auto mt-10 p-6 overflow-hidden">
      <h1 className="text-3xl font-bold mb-6 shrink-0">Vegan Thrive Blogs</h1>
      <ul className="space-y-4 bg-white p-6 rounded flex-grow overflow-y-auto space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl text-green-700 hover:underline">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
