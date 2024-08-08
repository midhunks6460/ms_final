"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Carousel from "./Carousel";

export type GalleryType = {
  className?: string;
};

const images = ["/marble.jpg", "/c1.jpg", "/c2.jpg", "/c3.jpg"];

const Gallery: NextPage<GalleryType> = ({ className = "" }) => {
  const onDescriptionTextClick = useCallback(() => {
    window.open("https://clean.design");
  }, []);

  return (
    <section
      className={`self-stretch bg-[rgba(226,228,234,0.5)] flex flex-col items-center justify-start pt-[0px] px-[0px] pb-[50px] box-border gap-[64px] max-w-full text-left text-[80px] text-[#000] font-[Inter] 
        sm:text-[48px] sm:gap-[32px] sm:pb-[32px] sm:px-4`} // Responsive styles
    >
      <div className="w-[597px] flex flex-col items-start justify-start py-[0px] px-[20px] box-border max-w-full sm:w-full">
        <h1 className="m-[0px] self-stretch relative text-inherit font-bold font-[inherit] mq850:text-[40px] mq450:text-[24px]">
          Image Gallery
        </h1>
      </div>
      <Carousel images={images} /> {/* Pass images to the Carousel */}
      <div
        className="self-stretch relative text-[12px] leading-[17px] text-[rgba(0,0,0,0.5)] text-center cursor-pointer"
        onClick={onDescriptionTextClick}
      >
        <a
          className="text-[inherit]"
          href="https://clean.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          clean.design
        </a>
      </div>
    </section>
  );
};

export default Gallery;
