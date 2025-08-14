'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import BlogCard from './BlogCard';
import { useEffect } from 'react';

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
};


export default function BlogCarousel({ posts }: { posts: BlogPost[] }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
        '(min-width: 1024px)': {
          slides: { perView: 3, spacing: 10 },
        },
      },
    slides: { perView: 1, spacing: 10, }, 
    loop: true,
  });

  useEffect(() => {
    instanceRef.current?.next()
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 8000)
    return () => clearInterval(interval)
  }, []);

  const excerpt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div ref={sliderRef} className="keen-slider mx-auto p-5">
      {posts.map((post) => (
        <div key={post.id} className="keen-slider__slide justify-center items-center flex py-4">
          <div className="float-hover will-change-transform">
          <BlogCard
            title={post.title}
            slug={post.slug}
            date={post.date}
            excerpt={excerpt}
          />
          </div>
        </div>
      ))}
    </div>
  );
}
