"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import Accordion from "./Accordion";

export type CategorySection1Type = {
  className?: string;
  rectangle1?: string;
  accordionTitle1?: string;
  accordionTitle11?: string;
  accordionTitle12?: string;
  accordionTitle13?: string;

  icon?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
  propFontFamily1?: CSSProperties["fontFamily"];
  propHeight?: CSSProperties["height"];
  /** Action props */
  onCategorySectionClick?: () => void;
};

const CategorySection1: NextPage<CategorySection1Type> = ({
  className = "",
  onCategorySectionClick,
  propPadding,
  propFontWeight,
  propFontFamily,
  propFontFamily1,
  rectangle1,
  propHeight,
  accordionTitle1,
  accordionTitle11,
  accordionTitle12,
  accordionTitle13,
  icon,
  icon1,
  icon2,
  icon3,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const everythingUXNewsletterStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      fontFamily: "'YourChosenFont', sans-serif", // Replace with your desired font
      color: "#000", // Set text color to black
      fontSize: "40px", // Increase font size for normal screens
    };
  }, [propFontWeight]);

  const everythingUXIsStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: "'YourChosenFont', sans-serif", // Replace with your desired font
      color: "#000", // Set text color to black
      fontSize: "20px", // Increase font size
    };
  }, []);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`self-stretch shadow-lg rounded-lg bg-[rgba(226,228,234,0.5)] overflow-hidden flex flex-col md:flex-row items-center justify-center max-w-full gap-4 text-left text-[#334158] font-[Inter] md:justify-between ${className}`}
      onClick={onCategorySectionClick}
    >
      <div
        className="flex-[0.9167] bg-[rgba(226,228,234,0.5)] flex flex-col items-start justify-start border-black px-[20px] box-border gap-[20px] min-w-[320px] max-w-full h-auto md:py-[40px] md:px-[40px] overflow-auto"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-col items-center gap-[8px]">
          <h1
            className="m-[0px] self-stretch text-black relative text-inherit leading-[120%] font-bold text-[28px] md:text-[40px] border border-gray-300 rounded-lg p-4"
            style={everythingUXNewsletterStyle}
          >
            Everything UX Newsletter
          </h1>
          <div
            className="self-stretch relative text-[16px] italic leading-[22px] text-center md:text-left border border-gray-300 rounded-lg p-4"
            style={everythingUXIsStyle}
          >
            {`Everything UX is a top-class newsletter containing everything you need to know about the world of UX and more!`}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-center py-[0px] px-[14px] box-border max-w-full mx-auto">
          <Accordion
            accordionTitle1={accordionTitle1}
            propColor="#5c5c5c"
            propFontWeight="unset"
            isOpen={openIndex === 0}
            onToggle={() => handleToggle(0)}
            icon={icon}
          />
          <Accordion
            accordionTitle1={accordionTitle11}
            propColor="#334158"
            propFontWeight="unset"
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
            icon={icon1}
          />
          <Accordion
            accordionTitle1={accordionTitle12}
            propColor="#334158"
            propFontWeight="unset"
            isOpen={openIndex === 2}
            onToggle={() => handleToggle(2)}
            icon={icon2}
          />
          <Accordion
            accordionTitle1={accordionTitle13}
            propColor="#334158"
            propFontWeight="unset"
            isOpen={openIndex === 3}
            onToggle={() => handleToggle(3)}
            icon={icon3}
          />
        </div>
      </div>
      <img
        className="h-[300px] md:h-[600px] flex-1 relative max-w-full overflow-hidden object-cover rounded-lg border border-gray-300"
        loading="lazy"
        alt="Description of image"
        src="/image.svg.jpg"
      />
    </section>
  );
};

export default CategorySection1;
