export default function Navbar() {
    console.log("navbar loaded");
    return (
        <nav className="font-sans absolute p-4 w-full z-100">
            <div className="hidden md:flex space-x-5 flex justify-end me-15">
                <a href="/" className="hover:bg-gray-500 px-2 py-1 rounded transition">Home</a>
                <a href="/blog" className="hover:bg-gray-500 px-2 py-1 rounded transition">Blog</a>
                <a href="/contact" className="hover:bg-gray-500 px-2 py-1 rounded transition">Contact</a>
            </div>
            <div className="md:hidden">
                <button className="focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
        </nav>
    );
}