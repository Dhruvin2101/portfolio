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
        <h2 className="bg-clip-text text-transparent text-center bg-linear-to-b from-neutral-300 to-neutral-900  text-3xl md:text-4xl lg:text-7xl font-sans sm:mt-3 lg:mt-0 py-2 md:py-3 relative z-20 font-bold tracking-tight">
          Dhruvin Patel
        </h2>
        <p className="max-w-xl mx-auto text-[15px] lg:px-10 tracking-tighter lg:tracking-tight md:text-sm text-neutral-500 text-center z-20 leading-4.5 md:leading-5 lg:leading-normal  ">
          Passionate about building clean, scalable digital experiences.
          <span className="hidden lg:block">
            {" "}
            Always open to exciting opportunities, collaborations and meaningful
            conversations.
          </span>
        </p>
        <a
          className="bg-neutral-500 text-white text-[14px] font-semibold rounded-lg px-2 py-0.5 mt-2.5 hover:bg-neutral-700 transition-all ease-in-out delay-75 z-20"
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
