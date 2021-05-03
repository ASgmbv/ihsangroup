import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Heading, Text } from "@chakra-ui/react";

const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const sentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const AnimatingHeading = ({ title, subtitle, sx, subsx }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <>
      <MotionText
        ref={ref}
        variants={sentence}
        animate={animation}
        initial="hidden"
        color="saryy"
        letterSpacing="widest"
        fontSize="sm"
        mb="10"
        sx={subsx}
      >
        {subtitle.split("").map((char, index) => {
          return (
            <MotionText key={char + "-" + index} variants={letter} as="span">
              {char}
            </MotionText>
          );
        })}
      </MotionText>

      <MotionHeading
        variants={titleVariants}
        animate={animation}
        initial="hidden"
        color="jashyl"
        fontWeight="500"
        size="xl"
        textAlign="center"
        mb="14"
        sx={sx}
      >
        {title}
      </MotionHeading>
    </>
  );
};

export default AnimatingHeading;
