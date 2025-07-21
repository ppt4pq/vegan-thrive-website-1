'use client';

import EmailPopup from "@/components/EmailPopup";
import Image from "next/image";
import BlogSideBar from "@/components/BlogSideCard";
import InstagramWidget from "@/components/InstagramWidget";
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);
  
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-100">
      <EmailPopup />
      <BlogSideBar />
      <div className="relative flex flex-col header shadow-2xl z-10 bg-white justify-center items-center">
        <Image width={500} height={500} src="/images/logo-green-uncompressed.png" alt="vegan thrive logo" className="object-contain max-h-[45vh] bottom-0 justify-center"></Image>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center p-10 bg-white">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {/* Eat Better */}
          <div className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition duration-300 origin-right ${ inView ? 'scale-110' : 'scale-100' }`}>
            <Image
              src="/images/french-toast.jpeg"
              alt="vegan tacos"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute bottom-4 left-4 text-3xl text-green-700 font-semibold bg-white bg-opacity-80 px-2 py-1 rounded">
              Eat Better.
            </h1>
          </div>

          {/* Feel Better */}
          <div className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition duration-300 ${ inView ? 'scale-110' : 'scale-100' }`}>
              <Image
              src="/images/feel-better.jpg"
              alt="Kayla smiling with her cat"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute bottom-4 left-4 text-3xl text-green-700 font-semibold bg-white bg-opacity-80 px-2 py-1 rounded">
              Feel Better.
            </h1>
          </div>

          {/* Thrive */}
          <div className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition duration-300 origin-left ${ inView ? 'scale-110' : 'scale-100' }`}>
              <Image
              src="/images/kayak-back.jpg"
              alt="vegan tacos"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <h1 className="absolute bottom-4 left-4 text-3xl text-green-700 font-semibold bg-white bg-opacity-80 px-2 py-1 rounded">
              Thrive.
            </h1>
          </div>
        </div>
      </div>

      
      <section data-aos="fade-up" className="p-20 pb-0 pt-0 justify-center items-center z-10 flex flex-col space-x-2 w-full">
        
        <div className="flex flex-col md:flex-row gap-6 items-center p-10 pt-0">
          <Image height="400" width="300" src="/images/kayla-headshot-unedited-shorter.jpg" alt="picture of Kayla" className="w-64 md:w-80 object-cover rounded h-auto"></Image>
          <div className="p-10 pe-0 text-black flex-[1.7]">
            <h1 className="text-3xl border-b-3 border-green-900 border-radius-5 w-60 pb-1">Meet Kayla</h1>
            <p className="mt-3 max-w-md">
              Kayla (they/them) is a certified nutrition and wellness coach based in Richmond, Virginia. Vegan since 2020, they&rsquo;re driven by a deep commitment to animal rights and social justice — and believe that nourishing yourself shouldn&rsquo;t come at the expense of your values or your well-being.
            </p>
            <p className="mt-5 max-w-md">
              With a research-driven approach and a love for systems thinking, Kayla helps values-aligned vegans cut through the noise and find simple, sustainable ways to feel better — physically, mentally, and emotionally. Their work is rooted in curiosity, compassion, and a belief that health looks different for everyone.
            </p>
            <p className="mt-5 max-w-md">
              When they&rsquo;re not coaching, you&rsquo;ll find them exploring human and animal behavior, lifting weights, or spending time outside.
            </p>
          </div>
          <div className="flex-[1] w-full items-center">
            <InstagramWidget />
          </div>
          
        </div>
        
      </section>
      <section data-aos="fade-up" id="about" className="p-20 justify-center items-center z-10 text-black flex flex-col space-x-2 w-full bg-white">
        
        <div className="flex flex-col md:flex-row gap-10">
        <div className="hidden grid grid-cols-3 items-center h-20 mt-5 w-80 max-w-7xl mx-auto">
          <div className="relative flex justify-center h-20 w-auto">
          <Image
          src="/images/minglewood.jpg"
          alt="Minglewood Logo"
          fill
          className="object-contain"
          />
          </div>
          <div className="flex justify-center items-center h-full w-auto">
          <Image
          src="/images/x-1.png"
          alt="X symbol"
          width={28}
          height={28}
          className="h-7 w-auto"
          />
          </div>
          <div className="relative flex justify-center h-20 w-auto">
          <Image
          src="/images/logo-black.png"
          alt="Vegan Thrive logo"
          fill
          className="object-contain"
          />
          </div>
        </div>
        <div className="flex w-full max-w-7xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="100" className="p-6 w-180">
          <h1 className="text-3xl border-b-3 border-green-900 border-radius-5 w-70 pb-1 mb-5">Nourish to Thrive</h1>
            <p className="w-170 indent-8">Nourish to Thrive is a 4-week nutrition and wellness coaching program for vegans who want to eat better, feel better, and thrive. In the program, you will learn how to properly fuel and nourish your body and mind in a way that is simple and sustainable. You&rsquo;ll get 1:1 nutrition and wellness support from a certified nutrition coach and be a part of our supportive vegan community.</p>
            
            <p data-aos="fade-up" data-aos-delay="100" className="mt-6">Nourish to Thrive is for you if you:</p>
            <ul data-aos="fade-up" data-aos-delay="100" className="list-disc pl-10 space-y-1 m-3">
              <li>Want to <b>feel better in your body</b> — without restriction or overwhelm</li>
              <li>Care about animals <i>and</i> your own wellbeing</li>
              <li>Struggle with <b>energy, motivation, or inconsistent habits</b></li>
              <li>Want support from people who <b>get your values</b></li>
              <li>Need help making meals that are <b>nourishing and practical</b></li>
            </ul>

            <p data-aos="fade-up" data-aos-delay="100">What&rsquo;s included:</p>
            <ul data-aos="fade-up" data-aos-delay="100" className="list-disc pl-10 space-y-1 m-3">
              <li><b>1:1 calls with a certified nutrition coach</b> to assess your unique needs and goals for the program</li>
              <li>Weekly <b>individual check-ins</b></li>
              <li>Weekly <b>live group sessions</b> on key nutrition and wellness topics</li>
              <li>Access to a private online group for <b>community support, tips, + motivation</b></li>
              <li><b>Meal prep guides, recipes, + other resources</b> for use during and after the program</li>
            </ul>

            <p data-aos="fade-up" data-aos-delay="100">What you&rsquo;ll learn:</p>
            <ul data-aos="fade-up" data-aos-delay="100" className="list-disc pl-10 space-y-1 m-3">
              <li>How to <b>fuel your body + mind</b> without compromising your values or burning out</li>
              <li>Simple habits you can incorporate into your everyday life to increase your <b>mood + energy levels</b></li>
              <li>How nutrition + gut health relate to <b>nervous system regulation</b></li>
              <li>How to optimize your habits for <b>long-term success and thriving</b></li>
            </ul>
            <div className="flex items-center w-full justify-center my-5">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-nv6yCFG0wFkOG7H-aTOyBsOG8z0XnAxCBGoqqoSwh6wS8A/viewform" className="cursor-pointer px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Sign Up Now!</a>
            </div>
        </div>
        <div className="w-64 min-h-screen flex flex-col flex-shrink-0">
          <Image
            src="/images/minglewood.jpg"
            alt="Image 1"
            width={300}
            height={200}
            className="rounded shadow-md w-full h-auto object-cover"
          />
          <Image
            src="/images/kayak.jpg"
            alt="Image 2"
            width={300}
            height={200}
            className="rounded shadow-md w-full h-auto object-cover"
          />
          <Image
            src="/images/smoothie-bowl.jpeg"
            alt="Image 3"
            width={300}
            height={200}
            className="rounded shadow-md w-full h-auto object-cover"
          />
          <Image
            src="/images/tacos.jpg"
            alt="Image 4"
            width={300}
            height={200}
            className="rounded shadow-md w-full h-auto object-cover"
          />
      </div>
      </div>
      </div>
      </section>
    </div>
  );
}
