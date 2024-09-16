import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(" "),
    };
  });

  // const [scope, animate] = useAnimate();
  // const isInView = useInView(scope);

  // useEffect(() => {
  //   if (isInView) {
  //     animate(
  //       "span",
  //       {
  //         display: "inline-block",
  //         opacity: 1,
  //         width: "fit-content",
  //       },
  //       {
  //         duration: 0.3,
  //         delay: stagger(0.1),
  //         ease: "easeInOut",
  //       }
  //     );
  //   }
  // }, [isInView]);

  return (
    <div className={cn("", className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-[#8750f7]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(" "),
    };
  });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={cn(`text-white pr-2`, word.className)}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="pb-2 overflow-hidden"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <div
          className="font-bold text-[#4d09d4] md:text-6xl "
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[6px] h-10 md:h-16 bg-[#7733ff]",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
