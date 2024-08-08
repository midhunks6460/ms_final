"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AccordionType = {
  className?: string;
  accordionTitle1?: string;
  icon?: string;
  isOpen: boolean; // New prop to manage open state
  onToggle: () => void; // New prop for toggle function

  /** Style props */
  propColor?: CSSProperties["color"];
  propFontWeight?: CSSProperties["fontWeight"];
  children?: React.ReactNode; // Add children prop for accordion content
};

const Accordion: NextPage<AccordionType> = ({
  className = "",
  accordionTitle1,
  propColor,
  propFontWeight,
  icon,
  isOpen,
  onToggle, // Get the toggle function
  children,
}) => {
  const accordionTitle1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  return (
    <div>
      <div
        className={`self-stretch  border-[#e2e4ea] border-b-[0.7px] border-black border-solid box-border flex flex-row items-center justify-start pt-[14px] px-[0px] pb-[13px] gap-[14px] max-w-full text-left text-[16px] text-[#334158] font-[Inter] ${className}`}
        onClick={onToggle} // Use the toggle function
        style={{ cursor: "pointer" }} // Change cursor to pointer
      >
        <div
          className="flex-1 relative leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%_-_30px)]"
          style={accordionTitle1Style}
        >
          {accordionTitle1}
        </div>
        <img
          className={`h-[16px] w-[16px] relative overflow-hidden shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} // Rotate icon when open
          alt=""
          src={icon}
        />
      </div>
      {isOpen && ( // Render children if the accordion is open
        <div className="p-4 border border-t-0 border-[#e2e4ea]">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
