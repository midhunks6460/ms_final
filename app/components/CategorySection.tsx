import type { NextPage } from "next";
import { useState } from "react";
import Accordion from "./Accordion";

export type CategorySectionType = {
  className?: string;
};

const CategorySection: NextPage<CategorySectionType> = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`w-full h-screen flex flex-col items-center justify-center bg-[#fff] shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-[8px] overflow-hidden text-center text-[40px] text-[#334158] font-[Inter] ${className}`}
    >
      <div className="flex-1 w-full bg-[rgba(226,228,234,0.5)] flex flex-col items-center justify-center py-[40px] px-[20px] gap-[20px]">
        <div className="w-full max-w-[1680px] flex flex-col items-center justify-start py-[20px] px-[20px] gap-[8px]">
          <h1 className="m-[0px] w-full text-center text-inherit leading-[120%] font-bold mq850:text-[32px] mq850:leading-[38px] mq450:text-[24px] mq450:leading-[29px]">
            FAQ
          </h1>
        </div>
        <div className="w-full max-w-[400px] bg-[#fff] flex flex-col items-center justify-start py-[20px] px-[14px] text-left text-[16px] gap-[10px] rounded-[8px] shadow-md">
          {[
            "Accordion title 1",
            "Accordion title 2",
            "Accordion title 3",
            "Accordion title 4",
            "Accordion title 5",
            "Accordion title 6",
            "Accordion title 7",
          ].map((title, index) => (
            <Accordion
              key={index}
              accordionTitle1={title}
              propColor="#334158"
              propFontWeight="unset"
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              icon={openIndex === index ? "/icon-open.svg" : "/icon.svg"} // Use different icons for open/close state
            />
          ))}
        </div>
      </div>
      <img
        className="h-[566px] w-[721px] relative max-w-full overflow-hidden object-cover hidden"
        alt=""
      />
    </section>
  );
};

export default CategorySection;
