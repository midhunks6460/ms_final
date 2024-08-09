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
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <h3 className="font-semibold">Jay Smith</h3>
          <p className="text-[12px] leading-[20px] text-[#676f82]">
            Web Designer
          </p>
          <p className="text-left">
            I had a fantastic experience working with this team. They were
            professional, dedicated, and delivered high-quality results on time.
          </p>
          <p className="text-left">
            Their attention to detail and creativity made a significant impact
            on the success of our project
          </p>
          <div className="flex flex-row items-start justify-center gap-[6px]">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`h-[19px] w-[20px] relative min-h-[19px]`}
              >
                {index < 4 ? "★" : "☆"} {/* Example rating: 4 out of 5 */}
              </span>
            ))}
          </div>
        </div>
        <Card
          ellipse2="/ellipse-2-1@2x.png"
          ellipseIcon={false}
          showFrameDiv={false}
        />
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <h3 className="font-semibold">Jay Smith</h3>
          <p className="text-[12px] leading-[20px] text-[#676f82]">
            Web Designer
          </p>
          <p className="text-left">
            I had a fantastic experience working with this team. They were
            professional, dedicated, and delivered high-quality results on time.
          </p>
          <p className="text-left">
            Their attention to detail and creativity made a significant impact
            on the success of our project
          </p>
          <div className="flex flex-row items-start justify-center gap-[6px]">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`h-[19px] w-[20px] relative min-h-[19px]`}
              >
                {index < 4 ? "★" : "☆"} {/* Example rating: 4 out of 5 */}
              </span>
            ))}
          </div>
        </div>
        <Card
          ellipse2="/ellipse-2-2@2x.png"
          ellipseIcon={false}
          showFrameDiv={false}
        />
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <h3 className="font-semibold">Jay Smith</h3>
          <p className="text-[12px] leading-[20px] text-[#676f82]">
            Web Designer
          </p>
          <p className="text-left">
            I had a fantastic experience working with this team. They were
            professional, dedicated, and delivered high-quality results on time.
          </p>
          <p className="text-left">
            Their attention to detail and creativity made a significant impact
            on the success of our project
          </p>
          <div className="flex flex-row items-start justify-center gap-[6px]">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`h-[19px] w-[20px] relative min-h-[19px]`}
              >
                {index < 4 ? "★" : "☆"} {/* Example rating: 4 out of 5 */}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
