import { useEffect, useState } from "react";
import { IconCommand } from "@tabler/icons-react";
import "./App.css";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Linkedin02Icon,
  GithubIcon,
  NewTwitterIcon,
  Home07Icon,
  Mail01Icon,
  CommandIcon,
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
      <div className="w-full font-giest py-7 h-screen bg-neutral-50 absolute inset-0  bg-[radial-gradient(circle,#ccc8be_1px,transparent_1px)] bg-[length:22px_22px]">
        <Navbar />
        {children}
        <BottomDeck />
      </div>
    </>
  );
}

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      const timer = setTime(new Date());

      return () => clearInterval(timer);
    }, 1000);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="max-w-xs w-full md:max-w-md lg:max-w-3xl mx-auto font-giest flex justify-between items-center mb-4 selection:bg-accent">
      <h1 className="font-bold text-neutral-800 text-base  md:text-lg">
        Dhruvin.
      </h1>
      <div className="flex justify-between align-center gap-2 md:gap-4 font-normal text-neutral-500">
        {links.map((items, index) => (
          <a
            href={items.href}
            key={items.title}
            className="hover:text-neutral-700 relative text-shadow-2xl transition ease-in-out delay-150 hidden md:block text-xs lg:text-base"
          >
            {items.title}
          </a>
        ))}
      </div>
      <div className="flex gap-3 items-center min-w-[100px] text-accent font-timer timer-variation font-[font-weight:600] md:text-md">
        <p className="selection:bg-neutral-300">{formattedTime}</p>
        <p>
          <HugeiconsIcon
            icon={CommandIcon}
            className="text-neutral-500 hover:text-neutral-600 transition ease-in-out delay-175"
            height={22}
            width={22}
          />
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
    },
    {
      title: <HugeiconsIcon icon={NewTwitterIcon} />,
      href: "https://x.com/Dhruvin_patel_7",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: <HugeiconsIcon icon={GithubIcon} />,
      href: "https://github.com/Dhruvin2101",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: <HugeiconsIcon icon={Linkedin02Icon} />,
      href: "https://www.linkedin.com/in/dhruvin-patel-08a1a3244/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: <HugeiconsIcon icon={Mail01Icon} />,
      href: "https://mailto:dhruvinpatel746@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  return (
    <div className="bg-white border border-neutral-200 shadow-md rounded-xl flex justify-around items-center mx-auto fixed inset-x-0  bottom-10  max-w-2xs md:max-w-xs  text-neutral-700 h-12">
      {links.map((items) => (
        <a
          href={items.href}
          key={items.title}
          target={items.target}
          rel={items.rel}
          className="text-neutral-500 hover:text-neutral-700 transition-all ease-in-out delay-100 hover:-translate-y-0.5"
        >
          {items.title}
        </a>
      ))}
    </div>
  );
};

export default App;
