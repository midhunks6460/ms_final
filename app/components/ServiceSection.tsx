"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import Button from "./Button";

export type ServiceSectionType = {
  className?: string;
};

const ServiceSection: NextPage<ServiceSectionType> = ({ className = "" }) => {
  const onCarouselNavigationContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='CategorySection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onFourthSlideContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='categorySection3']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onFifthSlideContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='categorySection2']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <section
      className={`self-stretch bg-[rgba(226,228,234,0.5)] flex flex-row flex-wrap items-center justify-center py-[151.5px] px-[40px] box-border gap-x-[30px] gap-y-[28px] max-w-full text-black text-left text-[50px]  text-[#334158] font-[JejuGothic] mq450:pt-[64px] mq450:pb-[64px] mq450:box-border mq1225:pt-[98px] mq1225:pb-[98px] mq1225:box-border ${className}`}
      data-scroll-to="serviceSection"
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[362px] max-w-full mq450:gap-[20px]">
        <h1 className="m-[0px] self-stretch relative text-inherit leading-[120%] font-normal font-[inherit] mq850:text-[32px] mq850:leading-[38px] mq450:text-[24px] mq450:leading-[29px]">
          Simple and Clean UIs.
        </h1>
        <div className="self-stretch relative text-[26px] leading-[24px]">
          Powerful yet clean UI at your disposal. Build beautiful apps at
          breakneck speeds.
        </div>
        <Button />
      </div>
      <div className="flex-[0.7459] flex flex-row flex-wrap items-center justify-center py-[40px] px-[115px] box-border gap-[40px] min-w-[362px] min-h-[549px] max-w-full text-[16px] text-[#000] mq850:gap-[20px] mq850:pl-[28px] mq850:pr-[28px] mq850:box-border mq1225:pl-[57px] mq1225:pr-[57px] mq1225:box-border">
        <div
          className="w-[317px] flex flex-col items-start justify-center gap-[15px] min-w-[200px] cursor-pointer hover:cursor-pointer"
          onClick={onCarouselNavigationContainerClick}
        >
          <img
            className="w-[60px] h-[60px] relative rounded-[30px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icbaselinerocket.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
            <div className="self-stretch relative leading-[24px] text-[24px]">
              Feature 1
            </div>
            <div className="self-stretch h-[44px] relative text-[14px] leading-[22px] inline-block text-[18px]">
              Optimized for performance, ensuring fast loading times
            </div>
          </div>
        </div>
        <div className="w-[317px] flex flex-col items-start justify-center gap-[15px] min-w-[200px] hover:cursor-pointer">
          <img
            className="w-[60px] h-[60px] relative rounded-[30px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icbaselinerocket-1.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
            <div className="self-stretch relative leading-[24px] text-[24px]">
              Feature 2
            </div>
            <div className="self-stretch h-[44px] relative text-[14px] leading-[22px] inline-block  text-[18px]">
              Optimized for performance, ensuring fast loading times
            </div>
          </div>
        </div>
        <div className="w-[317px] flex flex-col items-start justify-center gap-[15px] min-w-[200px] font-[Inter] hover:cursor-pointer">
          <img
            className="w-[60px] h-[60px] relative rounded-[30px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icbaselinerocket-2.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
            <div className="self-stretch relative leading-[24px]  text-[24px] ">
              Feature 3
            </div>
            <div className="self-stretch relative text-[14px] leading-[22px] text-[18px]">
              Optimized for performance, ensuring fast loading times
            </div>
          </div>
        </div>
        <div
          className="w-[317px] flex flex-col items-start justify-center gap-[15px] min-w-[200px] cursor-pointer hover:cursor-pointer"
          onClick={onFourthSlideContainerClick}
        >
          <img
            className="w-[60px] h-[60px] relative rounded-[30px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icbaselinerocket-3.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-center gap-[4px]">
            <div className="self-stretch relative leading-[24px] text-[24px] ">
              Feature 4
            </div>
            <div className="self-stretch h-[44px] relative text-[14px] leading-[22px] inline-block  text-[18px]">
              Optimized for performance, ensuring fast loading times
            </div>
          </div>
        </div>
        {/* <div
          className="w-[674px] flex flex-col items-center justify-center py-[0px] px-[20px] box-border gap-[15px] min-w-[200px] max-w-full cursor-pointer hover:cursor-pointer"
          onClick={onFifthSlideContainerClick}
        >
          <img
            className="w-[60px] h-[60px] relative rounded-[30px] overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/icbaselinerocket-3.svg"
          />
          <div className="w-[433px] flex flex-row items-center justify-center gap-[2px] max-w-full mq850:flex-wrap">
            <div className="relative leading-[24px] inline-block min-w-[70px]">
              Feature 5
            </div>
            <div className="flex-1 relative text-[14px] leading-[22px] inline-block min-w-[235px] max-w-full">
              Optimized for performance, ensuring fast loading times
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServiceSection;
