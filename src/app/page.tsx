import EmailPopup from "@/components/EmailPopup";
import Link from "next/link";
import Image from "next/image";
import BlogSideBar from "@/components/BlogSideCard";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <EmailPopup />
      <div className="relative flex flex-col header shadow-2xl z-10 bg-white justify-center items-center">
        <Image width={500} height={500} src="/images/logo-green-uncompressed.png" alt="vegan thrive logo" className="object-contain max-h-[45vh] bottom-0 justify-center"></Image>
      </div>
      <div className="flex relative width-full">
          <h1 className="text-5xl text-green-700 absolute bottom-5 left-5">Eat Better.</h1>
          <Image src="/images/pasta.jpg" alt="vegan tacos" width={500} height={1000}></Image>
          <h1 className="text-5xl text-green-700 absolute bottom-5 left-130">Feel Better.</h1>
          <Image src="/images/feel-better.jpg" alt="Kayla smiling with her cat" width="500" height="500"></Image>
          <h1 className="text-5xl text-green-700 absolute bottom-5 left-260">Thrive.</h1>
          <Image src="/images/pasta.jpg" alt="vegan tacos" width={500} height={1000}></Image>
        </div>
      <main className="p-20 pt-0 justify-center items-center z-10 shadow-xl mt-10 flex flex-col space-x-2 w-full">
        
        <div className="flex flex-col md:flex-row gap-6 items-center p-10 pt-0">
          <Image height="400" width="300" src="/images/kayla-headshot-unedited-shorter.jpg" alt="picture of Kayla" className="w-64 md:w-80 object-cover rounded h-auto"></Image>
          <div className="p-10 text-black">
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
        </div>
        <BlogSideBar />
      </main>
    </div>
  );
}
