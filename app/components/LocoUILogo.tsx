import type { NextPage } from "next";

export type LocoUILogoType = {
  className?: string;
};

const LocoUILogo: NextPage<LocoUILogoType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-[15.3px] text-left text-[16.8px] text-[#e8effd] font-[Inter] ${className}`}
    >
      <img
        className="h-[52px] w-[52px] relative rounded-[12.23px] overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/locouilogo.svg"
      />
      <div className="hidden flex-col items-start justify-center gap-[6.1px]">
        <img
          className="w-[87.6px] h-[20.7px] relative"
          alt=""
          src="/locoui.svg"
        />
        <div className="relative tracking-[-0.04em] whitespace-nowrap">
          by Team Locofy
        </div>
      </div>
    </div>
  );
};

export default LocoUILogo;
