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
    <div
      className={`border border-gray-300 rounded-lg shadow-md mb-4 ${className} w-full`} // Set width to full
    >
      <div
        className={`flex items-center justify-between p-6 cursor-pointer transition-colors duration-200 ${isOpen ? "bg-gray-100" : "bg-white"}`}
        onClick={onToggle} // Use the toggle function
      >
        <div
          className="flex-1 text-left text-[18px] text-[#334158] font-[Inter] overflow-hidden text-ellipsis whitespace-nowrap max-w-[calc(100%_-_30px)]"
          style={accordionTitle1Style}
        >
          {accordionTitle1}
        </div>
        <img
          className={`h-[20px] w-[20px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} // Rotate icon when open
          alt="Toggle icon"
          src={isOpen ? "/icon-open.svg" : "/icon.svg"} // Make sure to set the correct icon paths
        />
      </div>
      {isOpen && ( // Render children if the accordion is open
        <div
          className={`p-6 border-t border-gray-300 transition-transform duration-200 transform ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          style={{ overflow: "hidden" }}
        >
          <div className="text-[16px] text-[#334158]">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
