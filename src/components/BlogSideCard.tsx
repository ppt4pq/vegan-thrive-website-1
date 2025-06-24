'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function toggleSideBar(setIsOpen: (callback: boolean) => void, isOpen: boolean) {
  setIsOpen(!isOpen);
}

export default function BlogSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-1/3 z-50 flex">
      {/* Sidebar */}
      <div
        className={`relative transition-transform duration-300 ease-in-out bg-white shadow-xl p-4 rounded-l-lg text-black w-64 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Arrow Button - left inside panel */}
        <button
          onClick={() => toggleSideBar(setIsOpen, isOpen)}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-green-600 text-white py-2 rounded-l hover:bg-green-700 transition"
        >
          {isOpen ? <ChevronRight /> : <ChevronLeft />}
        </button>

        <h2 className="text-xl font-bold mb-3">Check out her blog!</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog"
              className="block bg-gray-100 px-3 py-2 rounded hover:underline hover:text-green-600 transition"
            >
              How to Vegan Meal Prep
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block bg-gray-100 px-3 py-2 rounded hover:underline hover:text-green-600 transition"
            >
              Top 5 Plant Proteins
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block bg-gray-100 px-3 py-2 rounded hover:underline hover:text-green-600 transition"
            >
              Mindful Eating Tips
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
