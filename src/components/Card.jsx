import { GithubIcon, ExternalLinkIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Card = ({
  projectTitle,
  projectDesc,
  livePreview,
  githubRep,
  techStack,
  banner,
}) => {
  return (
    <div className="w-full mb-5">
      <img src={banner} className="rounded-2xl mb-2 max-h-52" />
      <div className="flex items-center justify-between mb-2.5 md:mb-2">
        <h5 className="text-phone md:text-base text-subheading font-semibold">
          {projectTitle}
        </h5>
        <div className="flex items-center gap-5 ">
          <a href={livePreview}>
            <HugeiconsIcon
              icon={ExternalLinkIcon}
              target="_blank"
              className="text-neutral-400 hover:text-neutral-600 transition-all ease-in-out delay-50 h-6 w-6"
            />
          </a>
          <a href={githubRep}>
            <HugeiconsIcon
              icon={GithubIcon}
              target="_blank"
              className="text-neutral-400 hover:text-neutral-600 transition-all ease-in-out delay-50 "
            />
          </a>
        </div>
      </div>
      <p className="text-body text-phone md:text-[1rem] tracking-tight   mb-3">
        {projectDesc}
      </p>
      <div className="flex gap-2 flex-wrap">
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
