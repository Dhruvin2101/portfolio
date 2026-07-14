import { GithubIcon, ExternalLinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Tooltip from "@mui/material/Tooltip";
import { Squeeze } from "react-subtle-nudge";

const Card = ({
  projectTitle,
  projectDesc,
  livePreview,
  githubRep,
  techStack,
  banner,
  isLive,
}) => {
  return (
    <div className="w-full mb-2 z-50">
      <div className="flex flex-col lg:flex-row  lg:justify-between lg:items-center justify-center items-center ">
        <img src={banner} className="rounded-xl mb-2 w-full lg:max-w-70" />
        <div className="flex flex-col m-1 lg:m-4">
          <div className="flex items-center justify-between mb-2.5 md:mb-2">
            <h5 className="text-phone md:text-xl text-subheading font-semibold">
              {projectTitle}
            </h5>
            <div className="flex items-start  gap-5 ">
              {isLive && (
                <Tooltip describeChild title="Visit" placement="top">
                  <Squeeze iterationDelay="2.2s">
                    <a href={livePreview}>
                      <HugeiconsIcon
                        icon={ExternalLinkIcon}
                        target="_blank"
                        className="text-neutral-400 hover:text-neutral-600 transition-all ease-in-out delay-50 h-5 w-5"
                      />
                    </a>
                  </Squeeze>
                </Tooltip>
              )}
              <Tooltip describeChild title="Github Repository" placement="top">
                <Squeeze iterationDelay="2.2s">
                  <a href={githubRep}>
                    <HugeiconsIcon
                      icon={GithubIcon}
                      target="_blank"
                      className="text-neutral-400 hover:text-neutral-600 transition-all ease-in-out delay-50 h-5 w-5"
                    />
                  </a>
                </Squeeze>
              </Tooltip>
            </div>
          </div>
          <p className="text-body text-phone md:text-[1rem] tracking-tight lg:mb-3">
            {projectDesc}
          </p>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap w-full mt-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="text-[14px] md:text-phone-small px-3 py-0.5 rounded-lg bg-neutral-200 text-subheading"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;

