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
    window.location.href =
      "https://www.google.com/search?q=covid+advisory&sca_esv=1926c2955f272b3e&sxsrf=ADLYWIJ95_LZJ6K-up78PWMlXGp7nk7vhw%3A1723060197955&ei=5c-zZsWAOsSY4-EPke_9-Aw&ved=0ahUKEwiFh5q40-OHAxVEzDgGHZF3H88Q4dUDCBA&uact=5&oq=covid+advisory&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmNvdmlkIGFkdmlzb3J5MgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjaIlD6BFigIHACeAGQAQCYAZ4BoAGkDKoBAzYuObgBA8gBAPgBAZgCEaAC0AyoAhTCAgcQIxgnGOoCwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICChAjGIAEGCcYigXCAgoQABiABBhDGIoFwgINEAAYgAQYsQMYQxiKBcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigXCAg4QLhiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIFEC4YgATCAgQQIxgnwgIQEAAYgAQYsQMYQxiDARiKBcICCBAAGIAEGLEDwgIHEAAYgAQYCpgDCLoGBggBEAEYAZIHAzguOaAH4mE&sclient=gws-wiz-serp";
  }, []);

  const onAirlineFeesTextClick = useCallback(() => {
    window.location.href =
      "https://www.google.com/search?q=airline+feezs&sca_esv=1926c2955f272b3e&sxsrf=ADLYWIJx8moWB4TIyyITZL6IPPymdwer1A%3A1723060294642&ei=RtCzZujyJvrv4-EP_OKQ-Qs&ved=0ahUKEwjorafm0-OHAxX69zgGHXwxJL8Q4dUDCBA&uact=5&oq=airline+feezs&gs_lp=Egxnd3Mtd2l6LXNlcnAiDWFpcmxpbmUgZmVlenMyBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA1IiChQzgdYkiZwA3gBkAEDmAGJAaABihCqAQQ1LjE0uAEDyAEA-AEBmAIToAKGDqgCFMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIKECMYgAQYJxiKBcICCBAAGIAEGLEDwgIKEAAYgAQYQxiKBcICDRAAGIAEGLEDGEMYigXCAg0QABiABBixAxgUGIcCwgIQEAAYgAQYsQMYQxiDARiKBcICBRAAGIAEwgIHECMYJxjqAsICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQHCAhYQLhgDGLQCGOUCGOoCGIwDGI8B2AEBwgILEAAYgAQYkQIYigXCAhEQLhiABBixAxjRAxiDARjHAcICBRAuGIAEwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxiDARiKBcICChAuGIAEGCcYigXCAgQQIxgnwgIQEC4YgAQY0QMYQxjHARiKBcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigXCAhcQLhiABBiKBRiXBRjcBBjeBBjgBNgBAsICERAAGIAEGJECGLEDGMkDGIoFwgILEAAYgAQYkgMYigXCAhAQABiABBixAxhDGMkDGIoFwgIREC4YgAQYxwEYmAUYmQUYrwHCAgsQLhiABBjHARivAcICBxAAGIAEGArCAgoQABiABBixAxgKmAMFiAYBkAYKugYGCAEQARgLugYGCAIQARgUkgcENi4xM6AH1rwB&sclient=gws-wiz-serp";
  }, []);

  const onTipsTextClick = useCallback(() => {
    window.location.href =
      "https://www.google.com/search?q=google+tips&sca_esv=1926c2955f272b3e&sxsrf=ADLYWILH311zWU-UEuqaR4Sx5gPMMRvxYw%3A1723060331740&source=hp&ei=a9CzZqakK5KY4-EPjr7p2Qk&iflsig=AL9hbdgAAAAAZrPee-_oN8tWgwl-7wmZaDyrpnuduTqV&ved=0ahUKEwjmhf730-OHAxUSzDgGHQ5fOpsQ4dUDCBk&uact=5&oq=google+tips&gs_lp=Egdnd3Mtd2l6Igtnb29nbGUgdGlwczIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIKEAAYgAQYFBiHAkjrE1AAWJcScAB4AJABAJgBgQGgAekIqgEDNi41uAEDyAEA-AEBmAILoAKECcICChAjGIAEGCcYigXCAgsQABiABBiRAhiKBcICChAAGIAEGEMYigXCAhYQLhiABBixAxjRAxhDGIMBGMcBGIoFwgILEAAYgAQYsQMYgwHCAhAQABiABBixAxhDGIMBGIoFwgIEECMYJ8ICDhAAGIAEGJECGLEDGIoFwgITEAAYgAQYsQMYQxiDARjJAxiKBcICCxAAGIAEGJIDGIoFwgIIEAAYgAQYsQPCAg0QABiABBixAxiDARgKmAMA4gMFEgExIECSBwM1LjagB6Fj&sclient=gws-wiz";
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
      className={`self-stretch bg-[rgba(240,240,240,1)] flex flex-row flex-wrap items-start justify-center pt-[33px] px-[84px] pb-[40px] box-border gap-[22px] text-left text-[18px] text-[#000] font-[Roboto] ${className}`}
    >
      <div className="h-[1px] w-full border-[rgba(255,255,255,0.2)] border-b-[1px] border-solid box-border" />
      <div className="flex-1 flex flex-col md:flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[203px]">
          <div className="self-stretch relative text-[20px] leading-[27px]  font-extrabold md:text-[18px] text-[#000]">
            Company
          </div>
          <div className="self-stretch relative hover:cursor-pointer text-[#000] text-[18px]">
            About Us
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[#000] text-[18px]"
            onClick={onNewsTextClick}
          >
            News
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer text-[#000] text-[18px]"
            onClick={onCareersTextClick}
          >
            Careers
          </div>
          <div className="w-full relative hidden">How we work</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[203px]">
          <div className="self-stretch relative text-[20px] leading-[27px] font-extrabold md:text-[18px]">
            Support
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer"
            data-scroll-to="accountText"
            onClick={onAccountTextClick}
          >
            Account
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer"
            onClick={onSupportCenterTextClick}
          >
            Support Center
          </div>
          <div
            className="self-stretch relative cursor-pointer"
            onClick={onFAQTextClick}
          >
            FAQ
          </div>
          <div className="w-full relative hidden">Accessibility</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[203px]">
          <div className="self-stretch relative text-[20px] leading-[27px] font-extrabold md:text-[18px]">
            More
          </div>
          <div
            className="self-stretch relative cursor-pointer"
            onClick={onCovidAdvisoryTextClick}
          >
            Covid Advisory
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer"
            onClick={onAirlineFeesTextClick}
          >
            Airline Fees
          </div>
          <div
            className="self-stretch relative cursor-pointer hover:cursor-pointer"
            onClick={onTipsTextClick}
          >
            Tips
          </div>
          <div className="w-full relative hidden">Quarantine Rules</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-full shrink-0 text-[16.8px] text-[#e8effd] font-[Inter]">
        <LocoUILogo />
        <div className="self-stretch relative text-[18px] leading-[27px] font-[Roboto] text-[#000]">
          Clean, responsive UI library that works out of the box with Locofy.ai
        </div>
        <div className="flex flex-row items-start justify-start gap-[20px]">
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
