import styles from "../../../styles/Home.module.css";
import { motion } from "framer-motion";
import { waveAnimation } from "../../../animations/staticAnimations";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import wave from "../../../assets/wave.svg";

const AboutPage = ({}) => {
  const [element, view] = useInView({ threshold: 0.7 });
  const control = useAnimation();

  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }

  return (
    <div className={styles.about} ref={element}>
      <div>
        <h1 className="text-4xl -skew-x-1">
          SuperAnimate is The Best Software for animations
        </h1>
      </div>

      <motion.div className="flex justify-around w-full">
        <div className="bg-gradient-to-tr from-lime-400 to-emerald-400 p-6 text-white shadow-xl">
          <h3>1000+ animations library</h3>
        </div>
        <div className="bg-gradient-to-tr from-cyan-400 to-orange-400 p-6 text-white shadow-xl">
          <h3>unique Effects for your unique animations</h3>
        </div>

        <div className="bg-gradient-to-tr from-rose-400 to-purple-400 p-6 text-white shadow-xl">
          <h3>Support Physics for animation</h3>
        </div>
      </motion.div>

      <motion.img
        src={wave}
        alt=""
        className="absolute"
        initial="hidden"
        animate={control}
        variants={waveAnimation}
        exit="exit"
      />
    </div>
  );
};
export default AboutPage;
