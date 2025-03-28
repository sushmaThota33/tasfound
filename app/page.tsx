'use client';
import Image from "next/image";
import { useState } from "react";
import { HomePage } from "./homePage";
import Contact from "./contactUS";

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const basePath = process.env.NODE_ENV === "production" ? "" : "";

  return (
    <div className="my-5 md:my-10">
      {/* Header */}
      <div className="mx-4 md:mx-10 py-3 border-b-3 border-black flex flex-col md:flex-row md:justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div>
            <Image
              className="dark:invert"
              src={`${basePath}/TASF_logo.webp`}
              alt="TASF logo"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <span className="flex flex-col my-3">
              <h1 className="text-4xl md:text-6xl italic text-yellow-800 font-bold">TASF</h1>
              <span className="italic text-sm md:text-base">
                <span className="text-red-600 font-bold">Tanveer Ahmad </span>
                <span className="text-green-700 font-bold">Siddiqui </span>
                <span className="text-blue-700 font-bold">Foundation</span>
              </span>
            </span>
          </div>
        </div>
        <div className="py-5 md:py-10 px-5 text-center">
          <button className="border-2 border-black px-3 rounded-lg text-sm md:text-base">
            Registration
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mx-4 md:mx-10 flex border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <div className="text-sm font-medium text-center text-gray-500 w-full">
          <ul className="flex flex-col md:flex-row w-full justify-between -mb-px">
            <li className="flex-1 text-center" onClick={() => setActiveSection(1)}>
              <span
                className={`inline-block w-full p-4 rounded-t-lg 
                ${activeSection === 1 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              >
                Home
              </span>
            </li>
            <li className="flex-1 text-center" onClick={() => setActiveSection(2)}>
              <span
                className={`inline-block w-full p-4 ${activeSection === 2 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              >
                Projects
              </span>
            </li>
            <li className="flex-1 text-center" onClick={() => setActiveSection(3)}>
              <span
                className={`inline-block w-full p-4 rounded-t-lg 
                ${activeSection === 3 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              >
                Join US
              </span>
            </li>
            <li className="flex-1 text-center">
              <span className="inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                Blogs
              </span>
            </li>
            <li className="flex-1 text-center" onClick={() => setActiveSection(5)}>
              <span
                className={`inline-block w-full p-4 rounded-t-lg 
                ${activeSection === 5 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
              >
                Contact US
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content */}
      {activeSection === 1 ? <HomePage /> : activeSection === 5 ? <Contact /> : ""}
    </div>
  );
}