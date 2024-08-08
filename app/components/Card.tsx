import type { NextPage } from "next";

export type CardType = {
  className?: string;
  ellipse2?: string;
  ellipseIcon?: boolean;
  showFrameDiv?: boolean;
};

const Card: NextPage<CardType> = ({
  className = "",
  ellipse2,
  ellipseIcon,
  showFrameDiv,
}) => {
  return (
    <div
      className={`self-stretch shadow-[0px_3px_16px_rgba(0,_0,_0,_0.08)] rounded-[8px] bg-[#fff] flex flex-col items-center justify-start py-[24px] px-[16px] gap-[24px] text-center text-[16px] text-[#000] font-[Inter] ${className}`}
    >
      {!ellipseIcon && (
        <img
          className="w-[120px] h-[120px] relative rounded-full object-cover"
          alt=""
          src={ellipse2}
        />
      )}
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch relative leading-[24px] font-semibold">
          Jay Smith
        </div>
        <div className="relative text-[12px] leading-[20px] text-[#676f82] text-left inline-block min-w-[80px]">
          Web Designer
        </div>
      </div>
      {showFrameDiv && (
        <div className="flex flex-row items-start justify-center gap-[6px]">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              className="h-[19px] w-[20px] relative min-h-[19px]"
              alt=""
              src="/vector.svg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
