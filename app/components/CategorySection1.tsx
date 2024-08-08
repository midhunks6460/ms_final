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
      className={`self-stretch shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-[8px] bg-[#fff] overflow-hidden flex flex-col md:flex-row items-start justify-center max-w-full [row-gap:20px] text-left text-[#334158] font-[Inter] md:justify-between ${className}`}
      onClick={onCategorySectionClick}
    >
      <div
        className="flex-[0.9167] bg-[rgba(226,228,234,0.5)] flex flex-col items-start justify-start border-black px-[40px] box-border gap-[20px] min-w-[624px] max-w-full h-auto md:py-[350px] md:px-[40px] mq850:py-[20px] mq850:px-[20px] overflow-auto"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-col items-center gap-[8px]">
          <h1
            className="m-[0px] self-stretch text-black relative text-inherit leading-[120%] font-bold font-[inherit] text-[32px] md:text-[40px] mq850:text-[24px] mq450:text-[20px] mq450:leading-[26px]" // Adjusted font size and line height for smaller screens
            style={everythingUXNewsletterStyle}
          >
            Everything UX Newsletter
          </h1>
          <div
            className="self-stretch relative text-[18px] leading-[22px] text-center md:text-left"
            style={everythingUXIsStyle}
          >
            {`Everything UX is a top-class newsletter containing everything you need to know about the world of UX and more!`}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start py-[0px] px-[14px] box-border max-w-full mx-auto">
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
        className="h-[400px] md:h-[700px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[400px] mq850:min-w-full"
        loading="lazy"
        alt=""
        src="/image.svg.jpg"
      />
    </section>
  );
};

export default CategorySection1;
