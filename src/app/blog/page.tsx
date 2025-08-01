import { getPublishedPosts } from '@/lib/notion';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <BlogCard />
    </div>
  );
}
