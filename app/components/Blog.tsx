import type { NextPage } from "next";
import { useState } from "react";

export type BlogType = {
  className?: string;
};

const Blog: NextPage<BlogType> = ({ className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = `Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar. Vulputate eu sceler felis imperdiet proin fermentum. Arcu vitae elementum curabitur vitae nunc sed velit.Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar.Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar.Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar.Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar.Rutrum quisque non tellus orci ac. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Interdum posuere lorem ipsum dolor sit. Egestas maecenas pharetra convallis posuere morbi.Amet cursus sit amet dictum. At erat pellentesque adipiscing commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar.`;

  const halfText = fullText.slice(0, Math.floor(fullText.length / 2));

  return (
    <section
      className={`self-stretch bg-[rgba(226,228,234,0.5)] flex flex-col md:flex-row items-center md:items-start justify-center gap-[15px] max-w-full z-[1] text-left font-[JejuGothic] ${className}`}
    >
      <img
        className="h-[300px] md:h-[852px] w-full md:w-[898.5px] object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/c3.jpg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-4 px-4 pb-4 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 w-full text-inherit text-[28px] md:text-[48px] leading-[32px] md:leading-[60px] text-[#000] font-normal">
            More About Travelsy
          </h1>
          <div className="self-stretch h-auto text-[16px] md:text-[18px] leading-[22px] md:leading-[28px] text-[#000] mt-2 mb-4">
            Amet cursus sit amet dictum. At erat pellentesque adipiscing
            commodo. Sit amet volutpat consequat mauris nunc congue nisi vitae
            suscipit. In arcu cursus euismod quis viverra nibh cras pulvinar.
            Vulputate eu sceler felis imperdiet proin fermentum. Arcu vitae
            elementum curabitur vitae nunc sed velit.
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start pb-[16px] px-0 box-border max-w-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-start gap-2 max-w-full mb-2"
            >
              <img
                className="w-[31.2px] h-[29.8px] relative overflow-hidden transform -scale-x-100"
                loading="lazy"
                alt=""
                src="/bxssend.svg"
              />
              <div className="relative leading-[24px] text-[16px] md:text-[18px] text-[#000] inline-block max-w-full">
                Donec adipiscing tristique risus nec feugiat in
              </div>
            </div>
          ))}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-2 px-0 box-border max-w-full">
          <div className="h-auto relative leading-[24px] text-[16px] md:text-[18px] text-[#000] inline-block max-w-full">
            {isExpanded ? fullText : halfText}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={toggleReadMore}
            >
              {isExpanded ? " Read Less" : " Read More"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
