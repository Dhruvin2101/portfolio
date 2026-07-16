import React from "react";

const techStack = [
  {
    name: "JavaScript",
    logo: "/logos/javascript.svg",
    site: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Express.js",
    logo: "/logos/express.svg",
    site: "https://expressjs.com/",
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    site: "https://react.dev/",
  },
  {
    name: "Node.js",
    logo: "/logos/node.svg",
    site: "https://nodejs.org/en",
  },
  {
    name: "Better-Auth",
    logo: "/logos/better-auth.jpeg",
    site: "https://better-auth.com/",
  },
  {
    name: "TailwindCSS",
    logo: "/logos/tailwind.svg",
    site: "https://tailwindcss.com/",
  },
  {
    name: "Motion",
    logo: "/logos/motion.png",
    site: "https://motion.dev/",
  },
  {
    name: "MongoDB",
    logo: "/logos/mongo.svg",
    site: "https://www.mongodb.com/",
  },
  {
    name: "Figma",
    logo: "/logos/figma.svg",
    site: "https://www.figma.com/",
  },
  {
    name: "Postman",
    logo: "/logos/postman.ico",
    site: "https://www.postman.com/",
  },
  {
    name: "Git",
    logo: "/logos/git.svg",
    site: "https://git-scm.com",
  },
];

const TechStack = () => {
  return (
    <ul className="w-full flex flex-wrap gap-1.5 lg:gap-2.5">
      {techStack.map((items) => (
        <li className="text-[0.95rem] lg:text-base px-2 py-0.5 rounded-lg bg-[var(--pill-bg)] shadow-sm border border-[var(--border)]">
          <a
            href={items.site}
            className="flex gap-1.5 items-center text-[var(--link)] hover:text-[var(--link-hover)] transition-all ease-in-out delay-50"
            target="_blank"
          >
            <img
              src={items.logo}
              alt={items.name}
              loading="lazy"
              className="h-4 w-4 lg:h-5 lg:w-5 rounded-sm"
            />
            <p>{items.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TechStack;
