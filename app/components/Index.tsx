"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import ServiceSection from "../components/ServiceSection";
import CategorySection1 from "../components/CategorySection1";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "./Footer";
import Gallery from "../components/Gallery";
import CategorySection from "../components/CategorySection";
import Blog from "../components/Blog";

const Index: NextPage = () => {
  const onCategorySectionClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='categorySection1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onMARBLECORENERContainerClick = useCallback(() => {
    // Please sync "MARBLE_CORENER" to the project
  }, []);

  const onFeaturesCarouselContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='serviceSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div
      className="w-full relative bg-[#E2E4EA] overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]"
      onClick={onMARBLECORENERContainerClick}
    >
      <section className="self-stretch shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-[8px] bg-[#E2E4EA] overflow-hidden flex flex-col md:flex-row items-start justify-start p-[20px] box-border gap-[24px] max-w-full text-left text-[40px] text-[#334158] font-[JejuGothic]">
        <img
          className="h-[812px] flex-1 relative rounded-[8px] max-w-full overflow-hidden object-cover min-w-[300px] md:min-w-[603px] md:min-h-[812px]"
          loading="lazy"
          alt=""
          src="/c3.jpg"
        />
        <div
          className="flex-1 overflow-hidden flex flex-col items-center justify-center py-[80px] px-[20px] md:py-[367px] md:px-[40px] box-border bg-gray-200 border border-black"
          onClick={onFeaturesCarouselContainerClick}
        >
          <div className="self-stretch flex flex-col items-start justify-start cursor-pointer">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <h1 className="m-0 self-stretch relative text-black leading-[120%] font-normal text-[24px] md:text-[40px] md:leading-[48px]">
                Simple and Clean UIs.
              </h1>
              <div className="self-stretch relative text-black text-[16px] leading-[24px] md:text-[25px] md:leading-[30px]">
                Powerful yet clean UI at your disposal. Build beautiful apps at
                breakneck speeds.
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSection />
      <CategorySection1
        propPadding="247px 40px"
        propFontWeight="400"
        propFontFamily="JejuGothic"
        propFontFamily1="JejuGothic"
        rectangle1="pending_I3011:1492;2985:1898"
        propHeight="852px"
        accordionTitle1="Accordion title 1"
        accordionTitle11="Accordion title 1"
        accordionTitle12="Accordion title 3"
        accordionTitle13="Accordion title 1"
        accordionTitle14="Accordion title 1"
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
        icon4="/icon-1.svg"
      />
      <CategorySection1
        propPadding="247px 40px"
        propFontWeight="400"
        propFontFamily="JejuGothic"
        propFontFamily1="JejuGothic"
        rectangle1="pending_I3011:1493;2985:1898"
        propHeight="852px"
        accordionTitle1="Accordion title 1"
        accordionTitle11="Accordion title 1"
        accordionTitle12="Accordion title 3"
        accordionTitle13="Accordion title 1"
        accordionTitle14="Accordion title 1"
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
        icon4="/icon-1.svg"
      />
      <CategorySection1
        onCategorySectionClick={onCategorySectionClick}
        propPadding="247px 40px"
        propFontWeight="400"
        propFontFamily="JejuGothic"
        propFontFamily1="JejuGothic"
        rectangle1="pending_I3011:1494;2985:1898"
        propHeight="852px"
        accordionTitle1="Accordion title 1"
        accordionTitle11="Accordion title 1"
        accordionTitle12="Accordion title 3"
        accordionTitle13="Accordion title 1"
        accordionTitle14="Accordion title 1"
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
        icon4="/icon-1.svg"
      />
      <CategorySection1
        propPadding="247px 40px"
        propFontWeight="400"
        propFontFamily="JejuGothic"
        propFontFamily1="JejuGothic"
        rectangle1="pending_I3011:1495;2985:1898"
        propHeight="852px"
        accordionTitle1="Accordion title 1"
        accordionTitle11="Accordion title 1"
        accordionTitle12="Accordion title 3"
        accordionTitle13="Accordion title 1"
        accordionTitle14="Accordion title 1"
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
        icon4="/icon-1.svg"
      />
      <TestimonialSection />
      <Footer />
      <Gallery />
      <CategorySection />
      <Blog />
    </div>
  );
};

export default Index;
