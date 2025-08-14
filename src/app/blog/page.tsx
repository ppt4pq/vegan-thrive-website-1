import { getPublishedPosts } from '@/lib/notion';
import BlogCarousel from '@/components/BlogCarousel';

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="p-10 flex-grow flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center">Vegan Thrive Blog</h1>
      <div className='mt-12'>
        <BlogCarousel posts={posts} />
      </div>
    </div>
  );
}
