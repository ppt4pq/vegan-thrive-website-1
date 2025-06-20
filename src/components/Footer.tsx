import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-100 flex flex-wrap items-center justify-between py-5 px-10 border-t border-gray-300 bottom-0">
            <p className="w-full md:w-1/3 mb-3 md:mb-0 text-gray-500 text-center md:text-left">
                © 2025 Vegan Thrive Coaching
            </p>
            <Link href="/" className="w-full md:w-1/3 flex items-center justify-center mb-3 md:mb-0">Home</Link>
            <ul className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4 text-gray-500">
                <li><Link href="#" className="hover:text-gray-700">Home</Link></li>
                <li><Link href="#" className="hover:text-gray-700">Blog</Link></li>
                <li><Link href="#" className="hover:text-gray-700">Contact</Link></li>
            </ul>
        </footer>
    );
}