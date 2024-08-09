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
      className="w-full relative bg-[#E2E4EA] overflow-hidden flex flex-col items-start justify-start leading-normal tracking-normal"
      onClick={onMARBLECORENERContainerClick}
    >
      <section className="self-stretch shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-[8px] bg-[#E2E4EA] overflow-hidden flex flex-col md:flex-row items-start justify-start p-[20px] box-border gap-[24px] max-w-full text-left text-[40px] text-[#334158] font-[JejuGothic]">
        <div className="flex-1 relative">
          <video
            className="h-[650px] w-full rounded-[8px] max-w-full object-cover hidden md:block"
            autoPlay
            loop
            muted
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <img
            src="/c3.jpg" // Replace with your image file
            alt="Static Image"
            className="h-[650px] w-full rounded-[8px] object-cover md:hidden"
          />
        </div>
        <div
          className="flex-1 flex flex-col items-center justify-center py-[40px] px-[20px] md:py-[200px] md:px-[40px] box-border gap-4 bg-gray-200 border border-black"
          onClick={onFeaturesCarouselContainerClick}
        >
          <div className="self-stretch flex flex-col items-start justify-start cursor-pointer gap-[12px]">
            <h1 className="m-0 self-stretch relative italic text-[#1F2937] leading-[120%] font-bold text-[28px] md:text-[48px] md:leading-[56px]">
              Experience the Movement.
            </h1>
            <div className="self-stretch relative text-[#1F2937] text-[18px] leading-[28px] md:text-[26px] md:leading-[34px]">
              Immerse yourself in dynamic visuals that enhance your creativity.
            </div>
            <div className="self-stretch relative text-[#1F2937] text-[18px] leading-[28px] md:text-[26px] md:leading-[34px]">
              Discover how our solutions can elevate your projects to the next
              level.
            </div>
            <div className="self-stretch relative text-[#1F2937] text-[18px] leading-[28px] md:text-[26px] md:leading-[34px]">
              Our platform is designed with users in mind, ensuring a seamless
              experience.
            </div>
            <div className="self-stretch relative text-[#1F2937] text-[18px] leading-[28px] md:text-[26px] md:leading-[34px]">
              Join a community of innovators who are transforming the digital
              landscape.
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center items-center h-12 bg-[#E2E4EA] overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 1 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 2 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 3 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 4 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 5&nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 6 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 7&nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 8&nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 9 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 10&nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 11 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 12&nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 13 &nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 14&nbsp; &nbsp;
          </span>
          <span className="text-[#1F2937] font-bold text-[24px]">
            Product 15 &nbsp; &nbsp;
          </span>
        </div>
      </div>
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
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
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
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
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
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
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
        icon="/icon.svg"
        icon1="/icon-1.svg"
        icon2="/icon-1.svg"
        icon3="/icon-1.svg"
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
