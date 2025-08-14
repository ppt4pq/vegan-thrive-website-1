import Link from 'next/link';

interface BlogCardProps {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
  }

export default function BlogCard({ title, excerpt, slug }: BlogCardProps) {
    return ( 
        <Link href={slug ? `/blog/${slug}` : "/blog"} className='block group'>
        <div className='group relative border-green-700 border-1 p-10 h-90 w-90 transition-all duration-0 hover:bg-[#003000] hover:text-white'>
            <div className='flex flex-col h-full'>
            <h2 className='text-2xl'>{title}</h2>
            <p className='mt-10  overflow-hidden h-45 line-clamp-7'>{excerpt}</p>
            <div className="absolute bottom-0 left-0 w-full h-20 mb-10 bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-0 group-hover:bg-gradient-to-t group-hover:from-[#003000] group-hover:to-transparent" />
            </div>
        </div>
        </Link>
    )
}