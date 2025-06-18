
export default function Home() {
  return (
    <div className="bg-gray-300">
      <div className="relative flex flex-col header shadow-2xl z-10 bg-white">
        <img src="images/logo2.jpg" alt="vegan thrive logo" className="object-contain max-h-[45vh] bottom-0"></img>
      </div>
      <main className="p-20 pt-0 justify-center items-center z-10 shadow-xl mt-15 flex space-x-2 w-full">
        <div className="flex flex-col md:flex-row gap-6 items-center p-10 pt-0">
          <img src="images/kayla-headshot-unedited-shorter.jpg" alt="picture of Kayla" className="w-64 md:w-80 object-cover rounded h-auto"></img>
          <div className="p-10 text-black">
            <h1 className="text-3xl">Meet Kayla</h1>
            <p className="mt-5 max-w-md">Kayla is a vegan nutrition and life coach located in Richmond, VA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
        <div className="p-10 justify-end items-end rounded text-black absolute right-0 flex-col justify-end"> 
          <h2 className="text-black text-2xl">Check out her blog!</h2>
          <ul className="space-y-2 justify-end p-2">
            <li className="w-full bg-gray-100 px-2 py-1 rounded transition hover:underline"><a href="/blog" className="">How to Vegan Meal Prep</a></li>
            <li className="w-full bg-gray-100 px-2 py-1 rounded transition hover:underline"><a href="/blog" className="hover:underline px-2 py-1 rounded transition bg-gray-100">Top 5 Plant Proteins</a></li>
            <li className="w-full bg-gray-100 px-2 py-1 rounded transition hover:underline"><a href="/blog" className="hover:underline px-2 py-1 rounded transition bg-gray-100">Mindful Eating Tips</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
