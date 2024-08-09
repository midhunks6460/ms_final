import type { NextPage } from "next";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export type BlogType = {
  className?: string;
};

const Blog: NextPage<BlogType> = ({ className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi. Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar. Vulputate eu sceler felis imperdiet proin fermentum. Arcu vitae elementum curabitur vitae nunc sed velit.`;

  const halfText = fullText.slice(0, Math.floor(fullText.length / 2));

  return (
    <section
      className={`flex flex-col md:flex-row p-4 md:p-6 bg-white shadow-lg rounded-lg ${className}`}
    >
      <img
        className="h-96 w-full md:w-1/2 object-cover rounded-lg md:mr-4 mb-4 md:mb-0"
        loading="lazy"
        alt="Blog Image"
        src="/c3.jpg"
      />
      <div className="flex-1 flex flex-col">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          More About Travelsy
        </h1>
        <p className="text-gray-600 mb-4 text-base md:text-lg">
          Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo.
          Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In
          arcu cursus euismod quis viverra nibh cras pulvinar.
        </p>
        <div className="flex flex-col mb-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center mb-2 text-gray-800">
              <FaArrowRight className="text-blue-600 mr-2" />
              <span className="text-sm md:text-base">
                Donec adipiscing tristique risus nec feugiat in
              </span>
            </div>
          ))}
        </div>
        <div
          className={`text-gray-600 transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[400px] opacity-100" : "max-h-[100px] opacity-75"}`}
        >
          {isExpanded ? fullText : halfText}
          <span
            className="text-blue-600 cursor-pointer font-bold hover:underline"
            onClick={toggleReadMore}
          >
            {isExpanded ? " Read Less" : " Read More"}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mt-6">References</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <a
              href="https://example.com/reference1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Reference Link 1
            </a>
          </li>
          <li>
            <a
              href="https://example.com/reference2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Reference Link 2
            </a>
          </li>
          <li>
            <a
              href="https://example.com/reference3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Reference Link 3
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
