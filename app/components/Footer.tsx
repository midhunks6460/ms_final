"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import LocoUILogo from "./LocoUILogo";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const onNewsTextClick = useCallback(() => {
    window.location.href = "https://www.mathrubhumi.com/";
  }, []);

  const onCareersTextClick = useCallback(() => {
    window.location.href = "https://www.google.com/about/careers/applications/";
  }, []);

  const onAccountTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='accountText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onSupportCenterTextClick = useCallback(() => {
    window.location.href = "https://support.google.com/";
  }, []);

  const onFAQTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='categorySection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onCovidAdvisoryTextClick = useCallback(() => {
    window.location.href = "https://www.google.com/search?q=covid+advisory";
  }, []);

  const onAirlineFeesTextClick = useCallback(() => {
    window.location.href = "https://www.google.com/search?q=airline+fees";
  }, []);

  const onTipsTextClick = useCallback(() => {
    window.location.href = "https://www.google.com/search?q=google+tips";
  }, []);

  const onEntypoSocialfacebookWithCiContainerClick = useCallback(() => {
    window.location.href = "https://www.facebook.com/";
  }, []);

  const onEntypoSocialinstagramWithCContainerClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/";
  }, []);

  const onEntypoSocialtwitterWithCirContainerClick = useCallback(() => {
    window.location.href = "https://x.com/";
  }, []);

  return (
    <section
      className={`self-stretch bg-[rgba(240,240,240,1)] flex flex-row flex-wrap items-start justify-center pt-8 px-4 md:px-16 pb-10 box-border gap-4 md:gap-6 text-left text-[20px] md:text-[18px] text-[#000] font-[Roboto] ${className}`}
    >
      <div className="h-[1px] w-full border-[rgba(255,255,255,0.2)] border-b-[1px] border-solid box-border" />
      <div className="flex-1 flex flex-col md:flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[203px]">
          <div className="self-stretch relative text-[22px] leading-[27px] font-extrabold md:text-[20px]">
            Company
          </div>
          <div className="self-stretch relative hover:cursor-pointer text-[#000] text-[20px] md:text-[18px]">
            About Us
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[#000] text-[20px] md:text-[18px]"
            onClick={onNewsTextClick}
          >
            News
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[#000] text-[20px] md:text-[18px]"
            onClick={onCareersTextClick}
          >
            Careers
          </div>
          <div className="w-full relative hidden">How we work</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[203px]">
          <div className="self-stretch relative text-[22px] leading-[27px] font-extrabold md:text-[20px]">
            Support
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[20px] md:text-[18px]"
            data-scroll-to="accountText"
            onClick={onAccountTextClick}
          >
            Account
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[20px] md:text-[18px]"
            onClick={onSupportCenterTextClick}
          >
            Support Center
          </div>
          <div
            className="self-stretch relative cursor-pointer text-[20px] md:text-[18px]"
            onClick={onFAQTextClick}
          >
            FAQ
          </div>
          <div className="w-full relative hidden">Accessibility</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[203px]">
          <div className="self-stretch relative text-[22px] leading-[27px] font-extrabold md:text-[20px]">
            More
          </div>
          <div
            className="self-stretch relative cursor-pointer text-[20px] md:text-[18px]"
            onClick={onCovidAdvisoryTextClick}
          >
            Covid Advisory
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[20px] md:text-[18px]"
            onClick={onAirlineFeesTextClick}
          >
            Airline Fees
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[20px] md:text-[18px]"
            onClick={onTipsTextClick}
          >
            Tips
          </div>
          <div className="w-full relative hidden">Quarantine Rules</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-full shrink-0 text-[18px] text-[#e8effd] font-[Inter]">
        <LocoUILogo />
        <div className="self-stretch relative text-[20px] leading-[27px] font-[Roboto] text-[#000]">
          Clean, responsive UI library that works out of the box with Locofy.ai
        </div>
        <div className="flex flex-row items-start justify-start gap-4">
          <div
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 cursor-pointer"
            onClick={onEntypoSocialfacebookWithCiContainerClick}
          >
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/vector-30.svg"
            />
          </div>
          <div
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 cursor-pointer"
            onClick={onEntypoSocialinstagramWithCContainerClick}
          >
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/vector-31.svg"
            />
          </div>
          <div
            className="h-[30px] w-[30px] relative overflow-hidden shrink-0 cursor-pointer"
            onClick={onEntypoSocialtwitterWithCirContainerClick}
          >
            <img
              className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
              src="/vector-32.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
