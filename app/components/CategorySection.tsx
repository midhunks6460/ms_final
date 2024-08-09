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
      className={`w-full h-screen flex flex-col items-center justify-center bg-[url('/faq.jpg')] bg-repeat bg-cover text-center text-[32px] sm:text-[40px] text-white font-[Inter] ${className}`}
    >
      <div className="flex-1 w-full bg-[rgba(255, 255, 255, 0.9)] flex flex-col items-center justify-center py-10 px-4 gap-6 rounded-[8px] shadow-md">
        <div className="w-full max-w-[1680px] flex flex-col items-center justify-start py-5 px-4 gap-4">
          <h1 className="m-0 w-full text-center text-inherit leading-[120%] font-bold text-[24px] sm:text-[32px] md:text-[40px]">
            FAQ
          </h1>
        </div>
        <div className="w-full max-w-[400px] flex flex-col items-center justify-start py-5 px-2 text-left text-[14px] sm:text-[16px] gap-3 rounded-[8px] shadow-md bg-white">
          {[
            "Accordion title 1",
            "Accordion title 2",
            "Accordion title 3",
            "Accordion title 4",
            "Accordion title 5",
          ].map((title, index) => (
            <Accordion
              key={index}
              accordionTitle1={title}
              propColor="#334158"
              propFontWeight="unset"
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              icon={openIndex === index ? "/icon-open.svg" : "/icon.svg"}
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
