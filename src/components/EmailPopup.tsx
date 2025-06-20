'use client';

import { useEffect, useState } from 'react';

export default function EmailPopup() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault;
        alert(`Thanks! We'll keep in touch at: ${email}`);
        setShow(false);
    };

    if(!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full relative">
                <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-black"
                >
                ×
                </button>
                <h2 className="text-xl font-semibold mb-2 text-black">Join Our Mailing List</h2>
                <p className="text-sm mb-4 text-gray-600">Stay updated with our latest blog posts.</p>
                <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-1 text-gray-800"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
                >
                    Subscribe
                </button>
                </form>
            </div>
        </div>
    );
}