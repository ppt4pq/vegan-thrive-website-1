import EmailPopup from "@/components/EmailPopup";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-300">
      <EmailPopup />
      <div className="relative flex flex-col header shadow-2xl z-10 bg-white">
        <Image src="images/logo2.jpg" alt="vegan thrive logo" className="object-contain max-h-[45vh] bottom-0"></Image>
      </div>
      <main className="p-20 pt-0 justify-center items-center z-10 shadow-xl mt-15 flex space-x-2 w-full">
        <div className="flex flex-col md:flex-row gap-6 items-center p-10 pt-0">
          <Image src="images/kayla-headshot-unedited-shorter.jpg" alt="picture of Kayla" className="w-64 md:w-80 object-cover rounded h-auto"></Image>
          <div className="p-10 text-black">
            <h1 className="text-3xl">Meet Kayla</h1>
            <p className="mt-5 max-w-md">
              Kayla (they/them) is a certified nutrition and wellness coach based in Richmond, Virginia. Vegan since 2020, they’re driven by a deep commitment to animal rights and social justice — and believe that nourishing yourself shouldn't come at the expense of your values or your well-being.
            </p>
            <p className="mt-5 max-w-md">
              With a research-driven approach and a love for systems thinking, Kayla helps values-aligned vegans cut through the noise and find simple, sustainable ways to feel better — physically, mentally, and emotionally. Their work is rooted in curiosity, compassion, and a belief that health looks different for everyone.
            </p>
            <p className="mt-5 max-w-md">
              When they’re not coaching, you’ll find them exploring human and animal behavior, lifting weights, or spending time outside.
            </p>
          </div>
        </div>
        <div className="p-10 justify-end items-end rounded text-black absolute right-0 flex-col justify-end"> 
          <h2 className="text-black text-2xl">Check out her blog!</h2>
          <ul className="space-y-2 justify-end p-2">
            <li className="w-full bg-gray-100 px-2 py-1 rounded transition hover:underline"><Link href="/blog" className="">How to Vegan Meal Prep</Link></li>
            <li className="w-full bg-gray-100 px-2 py-1 rounded transition hover:underline"><Link href="/blog" className="hover:underline px-2 py-1 rounded transition bg-gray-100">Top 5 Plant Proteins</Link></li>
            <li className="w-full bg-gray-100 px-2 py-1 rounded transition hover:underline"><Link href="/blog" className="hover:underline px-2 py-1 rounded transition bg-gray-100">Mindful Eating Tips</Link></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
