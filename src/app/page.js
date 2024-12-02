
import React, { useEffect, useState } from "react";
import Image from 'next/image'; 
import { Cormorant } from 'next/font/google';

const chronicleDisplay = Cormorant({
  subsets: ['latin'],
  weight: ['600'],
});

function Page() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setScrollHeight(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black h-[4600px] w-[1920px] mx-auto">
      <div 
        className="fixed top-0 right-0 w-[10px] bg-blue-500 z-50 transition-all duration-300"
        style={{ height: `${scrollHeight}%` }}
      />

      <div className="w-[1920px] h-[1200px] border-black mx-auto relative">
        <div className="w-[1760px] h-[25px] top-[64px] flex justify-between z-50 left-20 absolute">
          <span className="text-3xl text-white">MNTN</span>
          <div className="w-72 flex justify-between">
            <a className="font-bold text-white text-lg cursor-pointer hover:text-yellow-500">Equipment</a>
            <a className="font-bold text-white text-lg cursor-pointer hover:text-yellow-500">About us</a>
            <a className="font-bold text-white text-lg cursor-pointer hover:text-yellow-500">Blog</a>
          </div>
          <span className="font-bold text-white text-lg flex gap-2">
            <Image className="animate-bounce" src="/cart.svg" alt="Cart Icon" width={40} height={40} /> Account
          </span>
        </div>

        <Image src="/HG.png" alt="Hero" width={1920} height={1200} />
        <Image className="absolute top-0" src="/BG Hero.png" alt="Background Hero" width={1920} height={1200} />
        
        <div className="absolute top-[464px]">
          <Image src="/MG.png" alt="Main Graphic" width={1920} height={600} />
          <span className="flex transform rotate-90 font-bold text-white text-lg absolute top-0 left-8">
            Follow us{" "}
            <Image className="transform rotate-[-90deg] animate-bounce" src="/instagram.svg" alt="Instagram" width={20} height={20} />
            <Image className="transform rotate-[-90deg] animate-bounce" src="/twitter.svg" alt="Twitter" width={20} height={20} />
          </span>
          <div className="w-[950px] absolute top-[-230px] ml-[500px]">
            <a className="text-[#FBD784] font-extrabold text-lg">------- A Hiking guide</a>
            <h1 className={`font-semibold my-8 text-white text-[80px] ${chronicleDisplay.className}`}>
              Be prepared for the Mountains and beyond!
            </h1>
           <div className="flex gap-2">
           <a className=" font-extrabold text-lg text-white">scroll down</a>
           <p className="animate-bounce font-extrabold text-lg text-white">↓</p>
           </div>
          </div>
        </div>
        
        <div className="absolute top-[768px]">
          <div className="relative">
            <Image src="/VG.png" alt="Content Graphic" width={1920} height={600}/>
            <Image className="absolute bottom-0" src="/BG Content.png" alt="Background Content" width={1920} height={600} />
          </div>
        </div>
      </div>

      <div className="text-white w-[1920px] absolute top-[1440px] py-16 px-[239px] z-50 bg-[#0E1A2B]">
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="text-6xl font-bold text-white opacity-20">01</div>
            <div className="uppercase text-yellow-400 font-semibold text-sm mt-2">
              Get Started
            </div>
            <h2 className="text-4xl font-bold mt-4">What level of hiker are you?</h2>
            <p className="text-lg mt-4 leading-relaxed">
              Determining what level of hiker you are can be an important tool
              when planning future hikes. This hiking level guide will help you
              plan hikes according to different hike ratings.
            </p>
            <a
              href="#"
              className="text-yellow-400 text-lg font-semibold mt-4 inline-block"
            >
              read more →
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/01.png"
              alt="Hiker Level"
              className="rounded-lg shadow-lg object-cover w-full"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
          <div className="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
            <Image
              src="/01 (1).png"
              alt="Hiking Gear"
              className="rounded-lg shadow-lg object-cover w-full"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:pl-12 order-1 md:order-2">
            <div className="text-6xl font-bold text-white opacity-20">02</div>
            <div className="uppercase text-yellow-400 font-semibold text-sm mt-2">
              Hiking Essentials
            </div>
            <h2 className="text-4xl font-bold mt-4">
              Picking the right Hiking Gear!
            </h2>
            <p className="text-lg mt-4 leading-relaxed">
              The nice thing about beginning hiking is that you don&apos;t really need
              any special gear. You can probably get away with things you already
              have.
            </p>
            <a
              href="#"
              className="text-yellow-400 text-lg font-semibold mt-4 inline-block"
            >
              read more →
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start mb-16 px-8">
          <div className="md:w-1/2 text-center md:text-left">
          <a
              href="#"
              className="text-yellow-400 text-lg font-semibold mt-4 inline-block"
            >
              ------- where you go is the key
            </a>
            <h2 className="text-4xl font-bold mt-4">Understand Your Map & Timing</h2>
            <p className="text-lg mt-4 leading-relaxed">
            To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
            </p>
            <a
              href="#"
              className="text-yellow-400 text-lg font-semibold mt-4 inline-block"
            >
              read more →
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/time.png"
              alt="Hiker Level"
              className="rounded-lg shadow-lg object-cover w-full"
              width={500}
              height={500}
            />
          </div>
        </div>
        <footer className="bg-[#0E1A2B] text-white py-16">
          <div className="container px-8 flex flex-col md:flex-row justify-between">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">MNTN</h2>
              <p className="text-sm text-gray-400">
                Get out there & discover your next <br />
                slope, mountain & destination!
              </p>
              <p className="mt-8 text-xs text-gray-500">
                Copyright © 2023 MNTN, Inc. Terms & Privacy
              </p>
            </div>

            <div className="md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-lg text-[#FBD784] font-semibold mb-4">
                More on The Blog
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    About MNTN
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Contributors & Writers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Write For Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:w-1/3 ml-56">
              <h3 className="text-lg text-[#FBD784] font-semibold mb-4">
                More on MNTN
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    The Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Page;
