import { ExternalLinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Tooltip from "@mui/material/Tooltip";
import { Squeeze } from "react-subtle-nudge";

const ExperienceCard = ({ c_logo, company, field, duration, desc, c_link }) => {
  return (
    <div className="flex gap-3 md:gap-6 items-start w-full mb-2">
      <img
        src={c_logo}
        className="rounded-full h-8 w-8 md:h-12 md:w-12 border border-[var(--border-dark)] object-fill"
      />
      <div className="flex flex-col gap-1 md:gap-0.5 items-start w-full ">
        <div className="flex flex-row justify-between items-center w-full mb-0.5">
          <h3 className="text-[var(--text-subheading)] text-[1.13rem] font-semibold">
            {company}
          </h3>
          <Squeeze iterationDelay="2.2s">
            <Tooltip describeChild title="Visit Company's site" placement="top">
              <a href={c_link} className="hidden lg:block">
                <HugeiconsIcon
                  icon={ExternalLinkIcon}
                  className="text-[var(--link)] hover:text-[var(--link-hover)] transition-all ease-in-out delay-50 h-5 w-5"
                />
              </a>
            </Tooltip>
          </Squeeze>
        </div>
        <h6 className="text-[15px] text-[var(--text-subheading)] mb-0.5">
          {field} | {duration}
        </h6>
        <a
          href={c_link}
          target="_blank"
          className="text-[var(--accent)] text-[14px] lg:hidden"
        >
          [Visit Company's Website]
        </a>
        <p className="text-[var(--text-body)] text-phone md:text-[1rem] tracking-tighter md:tracking-tight lg:mb-3">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
