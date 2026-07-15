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
import Card from "./Card";
import ExperienceCard from "./ExperienceCard";
import Tooltip from "@mui/material/Tooltip";
import TechStack from "./TechStack";
import Footer from "./Footer";

const words = ["Full Stack Developer", "Illustrator", "Open to Work"];
const Page = () => {
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
      name: "Home",
    },
    {
      title: (
        <HugeiconsIcon icon={NewTwitterIcon} className="h-[20px] w-[20px] " />
      ),
      href: "https://x.com/Dhruvin_patel_7",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 2,
      name: "X",
    },
    {
      title: <HugeiconsIcon icon={GithubIcon} className="h-[20px] w-[20px]" />,
      href: "https://github.com/Dhruvin2101",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 3,
      name: "Github",
    },
    {
      title: (
        <HugeiconsIcon icon={Linkedin02Icon} className="h-[20px] w-[20px] " />
      ),
      href: "https://www.linkedin.com/in/dhruvin-patel-08a1a3244/",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 4,
      name: "LinkedIn",
    },
    {
      title: <HugeiconsIcon icon={Mail01Icon} className="h-[20px] w-[20px] " />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=dhruvinpatel746@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 5,
      name: "Mail me",
    },
  ];

  return (
    <div className="max-w-xs h-full md:max-w-md lg:max-w-3xl mx-auto bg-[var(--card-bg)] rounded-xl border border-[var(--border)] shadow-xl font-geist selection:bg-[var(--accent)] selection:text-[var(--accent-bg)]">
      <div className="my-4 mx-4 md:mx-6 md:my-6 p-2 md:p-3 border border-[var(--border)] rounded-xl">
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
  "
        >
          Hi there, I am
        </p>
        <div className="w-full mt-4 flex items-center gap-4 md:gap-5">
          <img
            src="/profile.svg"
            className="rounded-full border-2 border-[var(--border)] shadow-md h-[125px] w-[125px] selection:bg-accent"
          />
          <h1 className="text-[var(--text-subheading)] font-medium tracking-tight text-3xl max-w-xl md:max-w-4xl md:text-5xl">
            Dhruvin Patel
          </h1>
        </div>
        {/* -------------------------------------------------------- */}
        <h5 className="text-phone text-[var(--text-body)] h-10 md:h-auto mt-4 selection:bg-accent selection:text-white">
          21, he/him || {text} from India
        </h5>
        {/* -------------------------------------------------------- */}
        <div className="mt-3 flex items-center gap-2 md:gap-4 mb-2">
          <a
            className="text-phone-small md:text-normal cursor-pointer py-1 px-2 md:py-1 md:px-3 bg-neutral-800 dark:bg-neutral-300 dark:text-neutral-900 text-white rounded-lg"
            href="https://drive.google.com/file/d/1qszk97M-95b0C6a5gsNKr8fcIBbDriXh/view?usp=drive_link"
            target="_blank"
          >
            Resume
          </a>
          <div className="flex items-center gap-2 md:gap-4 ">
            {links.map((items) => (
              <Tooltip describeChild title={items.name} placement="top">
                <a
                  href={items.href}
                  key={items.id}
                  target={items.target}
                  rel={items.rel}
                  className="border border-[var(--border-dark)] rounded-lg p-[5px] shadow-xs text-[var(--link)] hover:text-[var(--link-hover)] transition-[color,background-color] ease-in-out delay-70"
                >
                  {items.title}
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------- */}

      <p className="tracking-tight mt-4 md:mt-2 text-phone md:text-[1rem] text-[var(--text-body)] mx-6 md:mx-8">
        A 21-year-old{" "}
        <span className="bg-[var(--accent)] text-[var(--accent-bg)] rounded-sm px-0.5  mx-0.5">
          full-stack developer
        </span>{" "}
        from India who enjoys building fast, scalable, and thoughtfully designed
        web applications. I enjoy building real-world projects with modern
        technologies and a growing interest in{" "}
        <span className="bg-[var(--accent)] text-[var(--accent-bg)] rounded-sm  px-0.5 mx-0.5">
          AI, developer tools and product
        </span>{" "}
        engineering. I'm constantly learning, experimenting, and building
        projects that combine great user experience with solid engineering.
      </p>
      {/* -------------------------------------------------------- */}

      {/* ---------------------Projects--------------------------- */}
      <div className="my-4 mx-4 md:mx-6 md:mt-6 md:mb-6 p-2 md:p-3 border border-[var(--border)] rounded-xl bg-[repeating-linear-gradient(315deg,theme(colors.neutral.200)_0,theme(colors.neutral.100)_1px,transparent_1px,transparent_50%)] dark:bg-[repeating-linear-gradient(315deg,theme(colors.neutral.800)_0,theme(colors.neutral.900)_1px,transparent_1px,transparent_50%)] bg-[length:12px_12px]">
        <h4 className="text-[1.1rem] text-[var(--text-subheading)] md:text-xl font-semibold pt-2 md:px-3 mx-4">
          Projects.
        </h4>
        <div className="border border-[var(--border-dark)] mt-3 mb-5 mx-4 md:mx-7 rounded-xl p-2.5 md:p-4 bg-[var(--card-bg)]">
          <Card
            projectTitle="MyTube"
            projectDesc="MyTube is a backend-only REST API modelled on YouTube's core features. It handles user registration and login with bcrypt + JWT, video and thumbnail uploads to Cloudinary through Multer"
            livePreview="#"
            githubRep="https://github.com/Dhruvin2101/MyTube"
            techStack={["JavaScript", "Node.js", "MongoDB", "Express", "JWT"]}
            banner="/Card-1.svg"
            isLive={false}
          />
        </div>
        <div className="border mt-3 mb-4 mx-4 md:mx-7 rounded-lg p-2.5 md:p-4 border-[var(--border-dark)] bg-[var(--card-bg)]">
          <Card
            projectTitle="Portfolio"
            projectDesc="A handcrafted developer portfolio built to showcase my projects, experience, skills, and design philosophy through smooth interactions, responsive layouts, and minimal user experience."
            livePreview="#"
            githubRep="https://github.com/Dhruvin2101/portfolio"
            techStack={["React JS", "Tailwind CSS", "Motion"]}
            isLive={true}
            banner="/Card-1.svg"
          />
        </div>
        <div className="border mt-3 mb-4 mx-4 md:mx-7 rounded-lg p-2.5 md:p-4 border-[var(--border-dark)] bg-[var(--card-bg)]">
          <Card
            projectTitle="DeckrAI"
            projectDesc="Deckr AI is a modern full-stack AI presentation generation platform that transforms prompts into visually stunning presentations using AI."
            livePreview="#"
            githubRep="https://github.com/Dhruvin2101/deckr-AI-presentaion-generator"
            techStack={[
              "React JS",
              "TypeScript",
              "TanStack Start",
              "TanStack Router",
              "PostgreSQL",
              "Prisma ORM",
            ]}
            isLive={true}
            banner="/Card-1.svg"
          />
        </div>
      </div>

      {/* ---------------------Experience--------------------------- */}
      <div className="my-4 mx-4 md:mx-6 md:mt-6 md:mb-6 p-2 md:p-3 border border-[var(--border)] rounded-xl bg-[repeating-linear-gradient(315deg,theme(colors.neutral.200)_0,theme(colors.neutral.100)_1px,transparent_1px,transparent_50%)] dark:bg-[repeating-linear-gradient(315deg,theme(colors.neutral.800)_0,theme(colors.neutral.900)_1px,transparent_1px,transparent_50%)] bg-[length:12px_12px]">
        <h4 className="text-[1.1rem] text-[var(--text-subheading)] md:text-xl font-semibold pt-2 md:px-3 mx-4">
          Work experience.
        </h4>
        <div className="border mt-3 mb-5 mx-4 md:mx-7 rounded-xl p-2.5 md:p-4 border-[var(--border-dark)] bg-[var(--card-bg)]">
          <ExperienceCard
            c_logo="/ToshalLogo.png"
            company="Toshal Infotech  "
            duration="June'26 - Current"
            field="Flutter Intern"
            desc="Assisted in building and enhancing production-ready applications through feature development, API integration, debugging, and code optimization while following industry best practices."
            c_link="https://www.toshalinfotech.com/"
          />
        </div>
        <div className="border mt-3 mb-5 mx-4 md:mx-7 rounded-xl p-2.5 md:p-4 border-[var(--border-dark)] bg-[var(--card-bg)]">
          <ExperienceCard
            c_logo="/tatvasoft.png"
            company="Tatvasoft"
            duration="May'25 - June'25"
            field=".NET & Angular Intern"
            desc="Developed a CI platform application using Angular(TypeScript) and C# .NET, handling feature development, component building, and API integration across a full-stack codebase."
            c_link="https://www.tatvasoft.com/"
          />
        </div>
      </div>

      {/* ---------------------Tech Stack---------------------------*/}
      <div className="my-4 mx-4 md:mx-6 md:mt-6 md:mb-6 p-2 md:p-3 border border-[var(--border)] rounded-xl bg-[repeating-linear-gradient(315deg,theme(colors.neutral.100)_0,theme(colors.neutral.200)_1px,transparent_1px,transparent_50%)] dark:bg-[repeating-linear-gradient(315deg,theme(colors.neutral.800)_0,theme(colors.neutral.900)_1px,transparent_1px,transparent_50%)] bg-[length:12px_12px] ">
        <h4 className="text-[1.1rem] text-[var(--text-subheading)] md:text-xl font-semibold pt-2 md:px-3 mx-4">
          Tech Stack.
        </h4>
        <div className="border mt-3 mb-5 mx-4 md:mx-7 rounded-xl p-2.5 md:p-4 border-[var(--border-dark)] bg-[var(--card-bg)]">
          <TechStack />
        </div>
      </div>

      {/* ---------------------FOOTER--------------------------*/}
      <div className="my-4 mx-4 md:mx-6 md:mt-6 md:mb-6 p-2 md:p-3 border border-[var(--border)] rounded-xl bg-[repeating-linear-gradient(315deg,theme(colors.neutral.100)_0,theme(colors.neutral.200)_1px,transparent_1px,transparent_50%)] dark:bg-[repeating-linear-gradient(315deg,theme(colors.neutral.800)_0,theme(colors.neutral.900)_1px,transparent_1px,transparent_50%)] bg-[length:12px_12px] ">
        <div className="border mt-3 mb-5 mx-4 md:mx-7 rounded-xl px-2.5 md:px-4 border-[var(--border-dark)] bg-[var(--card-bg)]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
