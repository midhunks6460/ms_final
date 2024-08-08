import type { NextPage } from "next";
import Card from "./Card";

export type TestimonialSectionType = {
  className?: string;
};

const TestimonialSection: NextPage<TestimonialSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-[rgba(226,228,234,0.5)] flex flex-row flex-wrap items-center justify-center py-[72px] px-[40px] box-border gap-[80px] max-w-full text-center text-[16px] text-[#000] font-[Inter] mq850:gap-[20px] mq850:pt-[31px] mq850:pb-[31px] mq850:box-border mq1225:gap-[40px] mq1225:pt-[47px] mq1225:pb-[47px] mq1225:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-[72px] min-w-[280px] max-w-full mq850:min-w-full mq450:gap-[18px] mq1225:gap-[36px]">
        <Card
          ellipse2="/ellipse-2@2x.png"
          ellipseIcon={false}
          showFrameDiv={false}
        />
        <Card
          ellipse2="/ellipse-2-1@2x.png"
          ellipseIcon={false}
          showFrameDiv={false}
        />
        <Card
          ellipse2="/ellipse-2-2@2x.png"
          ellipseIcon={false}
          showFrameDiv={false}
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-[72px] min-w-[280px] max-w-full mq850:min-w-full mq450:gap-[18px] mq1225:gap-[36px]">
        <Card ellipse2="/ellipse-21@2x.png" ellipseIcon={false} showFrameDiv />
        <Card ellipse2="/ellipse-21@2x.png" ellipseIcon={false} showFrameDiv />
        <Card ellipse2="/ellipse-22@2x.png" ellipseIcon={false} showFrameDiv />
      </div>
    </section>
  );
};

export default TestimonialSection;
