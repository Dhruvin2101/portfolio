import "../components/animated-text.css";
import { useEffect, useState } from "react";

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

  return (
    <div className="max-w-xs h-full md:max-w-md lg:max-w-3xl mx-auto bg-neutral-100 rounded-xl border border-neutral-200 shadow-xl font-geist">
      <div className="my-4 mx-4 md:mx-6 md:my-6 p-3 w-fit border border-neutral-200 rounded-xl">
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
            src="/profile.png"
            // height={95}
            // width={95}
            className="rounded-full border border-neutral-200 shadow-md h-[125px] w-[125px]"
          />
          <h1 className="text-name font-medium tracking-tight text-3xl max-w-xl md:max-w-4xl md:text-5xl ">
            Dhruvin Patel
          </h1>
        </div>
        <h1 className="text-phone text-neutral-600  mt-4">
          21, he/him || {text} from India
        </h1>
      </div>
    </div>
  );
};

export default Page;
