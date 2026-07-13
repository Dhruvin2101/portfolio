import { ExternalLinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Tooltip from "@mui/material/Tooltip";

const ExperienceCard = ({ c_logo, company, field, duration, desc, c_link }) => {
  return (
    <div className="flex gap-3 md:gap-6 items-start w-full mb-2">
      <img
        src={c_logo}
        className="rounded-full h-8 w-8 md:h-12 md:w-12 border border-neutral-300 object-fill"
      />
      <div className="flex flex-col gap-1 md:gap-0.5 items-start w-full ">
        <div className="flex flex-row justify-between items-center w-full mb-0.5">
          <h3 className="text-heading text-[1.13rem] font-semibold">
            {company}
          </h3>
          <Tooltip describeChild title="Visit Company's site" placement="top">
            <a href={c_link} className="hidden lg:block">
              <HugeiconsIcon
                icon={ExternalLinkIcon}
                className="text-neutral-400 hover:text-neutral-600 transition-all ease-in-out delay-50 h-5 w-5"
              />
            </a>
          </Tooltip>
        </div>
        <h6 className="text-[15px] text-neutral-700 mb-0.5">
          {field} | {duration}
        </h6>
        <a
          href={c_link}
          target="_blank"
          className="text-accent text-[14px] lg:hidden"
        >
          [Visit Company's Website]
        </a>
        <p className="text-body text-phone md:text-[1rem] tracking-tighter md:tracking-tight lg:mb-3">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;

{
  /* <div className="flex gap-3 md:gap-6 items-start w-full mb-2">
      <img
        src={c_logo}
        className="rounded-full h-8 w-8 md:h-12 md:w-12 border border-neutral-300 object-fill"
      />
      <div className="flex flex-col gap-1 md:gap-0.5 items-start w-full ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mb-0.5">
          <h3 className="text-heading text-[1.13rem] font-semibold">
            {company}
          </h3>
          <div className="flex md:gap-2 items-center text-[13px] md:text-[14px] mb-1 md:mb-0">
            <p className="bg-neutral-200  px-2 py-0.5 rounded-md text-subheading">
              {startDate}
            </p>
            <p className="text-[14px] px-2 py-0.5 text-subheading">-</p>
            <p className="bg-neutral-200 px-2 py-0.5 rounded-md text-subheading">
              {endDate}
            </p>
          </div>
        </div>
        <h6 className="text-base text-neutral-700 mb-0.5">{field}</h6>
        <p className="text-body text-phone md:text-[1rem] tracking-tighter md:tracking-tight lg:mb-3">
          {desc}
        </p>
      </div>
    </div> */
}
