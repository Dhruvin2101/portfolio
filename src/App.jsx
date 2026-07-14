import { useEffect, useState } from "react";
import "./App.css";
import Tooltip from "@mui/material/Tooltip";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Linkedin02Icon,
  GithubIcon,
  NewTwitterIcon,
  Home07Icon,
  Mail01Icon,
  CommandIcon,
  Sun03Icon,
  Moon02Icon,
} from "@hugeicons/core-free-icons";
const links = [
  {
    title: "experience",
    href: "#",
  },
  {
    title: "projects",
    href: "#",
  },
  {
    title: "drawings",
    href: "#",
  },
];

function App({ children }) {
  return (
    <>
      <div className="w-full font-giest py-7 min-h-80 bg-[var(--bg-main)] min-h-screen bg-[radial-gradient(circle,#ccc8be_1px,transparent_1px)] dark:bg-[radial-gradient(circle,#404040_1px,transparent_1px)] bg-[length:22px_22px]">
        <BgBlur />
        <Navbar />
        {children}
        <BottomDeck />
      </div>
    </>
  );
}

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      root.classList.contains("dark") ? "dark" : "light",
    );
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="max-w-xs w-full  md:max-w-md lg:max-w-3xl mx-auto font-giest flex justify-between items-center mb-4 selection:bg-(--accent) selection:text-(--accent-bg)">
      <p className="font-bold text-[var(--text-darkest)] text-base  md:text-lg">
        Dhruvin.
      </p>
      <div className="flex justify-between align-center gap-2 md:gap-4 font-normal text-[var(--link)]">
        {links.map((items, index) => (
          <a
            href={items.href}
            key={items.title}
            className="hover:text-[var(--link-hover)] relative text-shadow-2xl transition ease-in-out delay-150 hidden md:block text-xs lg:text-base"
          >
            {items.title}
          </a>
        ))}
      </div>
      <div className="flex gap-3 items-center min-w-27 text-accent font-timer timer-variation font-[font-weight:600] md:text-md">
        <p className="selection:bg-[--accent-bg] selection:text-white text-[var(--accent)]">
          {formattedTime}
        </p>
        <p>
          <button onClick={toggleTheme} className="pb-[15px]">
            <div className="flex relative items-center justify-center">
              <HugeiconsIcon
                icon={Sun03Icon}
                className=" absolute inset-x-0 shrink-0 h-6 w-6 text-[var(--link-hover)] transition-all duration-200 ease-in-out dark:scale-0 scale-100 dark:rotate-45 rotate-0"
              />
              <HugeiconsIcon
                icon={Moon02Icon}
                className="absolute inset-x-0 shrink-0 h-6 w-6 text-[var(--link-hover)] transition-all duration-200 ease-in-out dark:scale-100 scale-0 dark:rotate-0 rotate-45"
              />
            </div>
          </button>
        </p>
      </div>
    </div>
  );
};

const BottomDeck = () => {
  const links = [
    {
      title: <HugeiconsIcon icon={Home07Icon} />,
      href: "#",
      target: "_self",
      rel: "noopener noreferrer",
      id: 1,
      name: "Home",
    },
    {
      title: <HugeiconsIcon icon={NewTwitterIcon} />,
      href: "https://x.com/Dhruvin_patel_7",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 2,
      name: "X",
    },
    {
      title: <HugeiconsIcon icon={GithubIcon} />,
      href: "https://github.com/Dhruvin2101",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 3,
      name: "Github",
    },
    {
      title: <HugeiconsIcon icon={Linkedin02Icon} />,
      href: "https://www.linkedin.com/in/dhruvin-patel-08a1a3244/",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 4,
      name: "LinkedIn",
    },
    {
      title: <HugeiconsIcon icon={Mail01Icon} />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=dhruvinpatel746@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      id: 5,
      name: "Mail me",
    },
  ];
  return (
    <div className="bg-[var(--deck-bg)] z-505 border border-[var(--border)] shadow-md rounded-xl flex justify-around items-center mx-auto fixed inset-x-0  bottom-10  max-w-2xs md:max-w-xs h-12">
      {links.map((items) => (
        <Tooltip describeChild title={items.name} placement="top">
          <a
            href={items.href}
            key={items.id}
            target={items.target}
            rel={items.rel}
            className="text-[var(--link)] hover:text-[var(--link-hover)] transition-all ease-in-out delay-100 hover:-translate-y-0.5"
          >
            {items.title}
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

const BgBlur = () => {
  return (
    <div className="flex justify-center">
      <p className="z-500 bg-linear-to-t from-[var(--bg-main)]/90 to-transparent backdrop-blur-[1.5px] pointer-events-none h-12 w-xs md:w-md lg:w-3xl mx-auto fixed bottom-0"></p>
    </div>
  );
};
export default App;
