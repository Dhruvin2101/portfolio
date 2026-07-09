import "../components/animated-text.css";
import { useEffect, useState } from "react";
import {
  Linkedin02Icon,
  GithubIcon,
  NewTwitterIcon,
  Home07Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Page = () => {
  const words = ["Full Stack Developer", "Freelancer", "Activer Learner"];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[i];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        setJ(j + 1);

        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [j, i, isDeleting, words]);

  const links = [
    {
      title: <HugeiconsIcon icon={Home07Icon} className="h-[20px] w-[20px] " />,
      href: "#",
      target: "_self",
      rel: "noopener noreferrer",
      id: 1,
    },
    {
      title: (
        <HugeiconsIcon icon={NewTwitterIcon} className="h-[20px] w-[20px] " />
      ),
      href: "https://x.com/Dhruvin_patel_7",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 2,
    },
    {
      title: <HugeiconsIcon icon={GithubIcon} className="h-[20px] w-[20px]" />,
      href: "https://github.com/Dhruvin2101",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 3,
    },
    {
      title: (
        <HugeiconsIcon icon={Linkedin02Icon} className="h-[20px] w-[20px] " />
      ),
      href: "https://www.linkedin.com/in/dhruvin-patel-08a1a3244/",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 4,
    },
    {
      title: <HugeiconsIcon icon={Mail01Icon} className="h-[20px] w-[20px] " />,
      href: "mailto:dhruvinpatel746@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 5,
    },
  ];

  return (
    <div className="max-w-xs h-full md:max-w-md lg:max-w-3xl mx-auto bg-neutral-100 rounded-xl border border-neutral-200 shadow-xl font-geist">
      <div className="my-4 mx-4 md:mx-6 md:my-6 p-2 md:p-3 border border-neutral-200 rounded-xl">
        <p
          className="
    shiny
    inline-block
    bg-[length:200%_100%]
    bg-clip-text
    text-transparent
    bg-[linear-gradient(120deg,theme(colors.neutral.400)_40%,theme(colors.neutral.900)_50%,theme(colors.neutral.400)_60%)]
    md:text-lg
    font-medium
    selection:text-white
    selection:bg-accent
  "
        >
          Hi there, I am
        </p>
        <div className="w-full mt-4 flex items-center gap-4 md:gap-5">
          <img
            src="/profile.png"
            className="rounded-full border-2 border-neutral-300 shadow-md h-[125px] w-[125px] selection:bg-accent"
          />
          <h1 className="text-name font-medium tracking-tight text-3xl max-w-xl md:max-w-4xl md:text-5xl selection:bg-accent selection:text-white">
            Dhruvin Patel
          </h1>
        </div>
        {/* -------------------------------------------------------- */}
        <h1 className="text-phone text-neutral-600 h-10 md:h-auto mt-4 selection:bg-accent selection:text-white">
          21, he/him || {text} from India
        </h1>
        {/* -------------------------------------------------------- */}
        <div className="mt-3 flex items-center gap-2 md:gap-4 mb-2">
          <button className="text-phone-small md:text-normal cursor-pointer py-1 px-2 md:py-1 md:px-3  selection:bg-accent selection:text-white bg-neutral-800 text-white rounded-lg">
            Resume
          </button>
          <div className="flex items-center gap-2 md:gap-4">
            {links.map((items) => (
              <a
                href={items.href}
                key={items.id}
                target={items.target}
                rel={items.rel}
                className="border border-neutral-300 rounded-lg p-[5px] shadow-xs text-neutral-500 hover:text-neutral-700 transition-all ease-in-out delay-70"
              >
                {items.title}
              </a>
            ))}
          </div>
        </div>
        {/* -------------------------------------------------------- */}
      </div>
      <h1 className="tracking-tight text-phone md:text-[1rem] text-body mx-6 md:mx-8 selection:bg-accent selection:text-white">
        A 20-year-old{" "}
        <span className="bg-accent text-white border border-transparent rounded-sm px-0.5  mx-0.5">
          full-stack developer
        </span>{" "}
        from India who enjoys building fast, scalable, and thoughtfully designed
        web applications. I enjoy building real-world projects with modern
        technologies and a growing interest in{" "}
        <span className="bg-accent text-white border-2 border-accent rounded-sm  px-0.5 mx-0.5">
          AI, developer tools, and product
        </span>{" "}
        engineering. I'm constantly learning, experimenting, and building
        projects that combine great user experience with solid engineering.
      </h1>
      {/* -------------------------------------------------------- */}
      <div className="my-4 mx-4 md:mx-6 md:my-6 p-2 md:p-3 border border-neutral-200 rounded-xl">
        <h1 className="text-heading font-semibold px-3 mx-4">Projects</h1>
      </div>
    </div>
  );
};

export default Page;
