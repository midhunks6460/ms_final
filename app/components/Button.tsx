import type { NextPage } from "next";

export type ButtonType = {
  className?: string;
};

const Button: NextPage<ButtonType> = ({ className = "" }) => {
  const handleClick = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer [border:none] py-[8px] px-[20px] bg-[#334158] rounded-[20px] overflow-hidden flex flex-row items-center justify-center hover:bg-[#596980] transition-transform transform hover:scale-105 duration-200 ease-in-out ${className}`}
    >
      <div className="w-[66px] relative text-[14px] leading-[22px] text-lg font-[Inter] text-[#fff] text-center inline-block min-w-[46px]">
        Details
      </div>
    </button>
  );
};

export default Button;
