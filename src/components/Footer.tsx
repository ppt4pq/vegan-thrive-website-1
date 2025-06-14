export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow-sm w-full">
            <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
                © 2025 <a href="#" className="hover:underline">Vegan Thrive Coaching™</a>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Blog</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>

    );
}