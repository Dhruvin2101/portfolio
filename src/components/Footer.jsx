import { BackgroundLines } from "./ui/background-lines";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <BackgroundLines
        className="rounded-xl flex items-center sm:max-h-20 md:max-h-62.5 lg:max-h-100 justify-center w-full flex-col px-4"
        svgOptions={{
          duration: 10,
          strokeWidth: 2,
          opacity: 0.5,
        }}
      >
        <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-300 dark:from-neutral-600 to-neutral-900 dark:to-neutral-100  text-3xl md:text-4xl lg:text-7xl font-sans sm:mt-3 lg:mt-0 py-2 md:py-3 relative z-20 font-bold tracking-tight">
          Dhruvin Patel
        </h2>
        <p className="max-w-xl mx-auto text-[15px] tracking-tighter lg:tracking-tight md:text-sm lg:text-base text-[var(--text-body)] text-center z-20 leading-4.5 md:leading-5 lg:leading-normal  ">
          Passionate about building clean, scalable digital experiences.
          <span className="hidden lg:block">
            {" "}
            Always open to exciting opportunities, collaborations and meaningful
            conversations.
          </span>
        </p>
        <a
          className="bg-[var(--link)] dark:bg-neutral-600 text-white text-[14px] font-semibold rounded-lg px-2 py-0.5 lg:px-3 lg:py-1 mt-4 hover:bg-[var(--link-hover)] dark:hover:bg-neutral-700 border-[var(--border-dark)] transition-all ease-in-out delay-75 z-20"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvinpatel746@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in Touch
        </a>
      </BackgroundLines>
    </div>
  );
};

export default Footer;
