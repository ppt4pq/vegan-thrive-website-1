import { getPublishedPosts } from '@/lib/notion';
import Link from 'next/link';

export default function BlogCard() {
    return ( 
        <div className='relative border-green-700 border-1 p-10 h-80 w-80'>
            <h2 className='text-2xl'>Blog Title</h2>
            <p className='mt-10 line-clamp-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="absolute bottom-0 left-0 w-full h-20 mb-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>
    )
}