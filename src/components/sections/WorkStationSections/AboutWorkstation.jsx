import styles from "../../../styles/WorkStation.module.css";
import { LightningBoltIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { transitionOnScroll } from "../../../animations/staticAnimations";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const AboutWorkstation = ({}) => {
  const [element, view] = useInView({ threshold: 0.5 });
  const control = useAnimation();

  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }

  return (
    <main className={styles.aboutStation} ref={element}>
      <motion.div
        variants={transitionOnScroll}
        animate={control}
        initial="hidden"
      >
        <h1 className="text-3xl font-bold mb-4" variants={transitionOnScroll}>
          Do You want a Powerful AnimeStation ?
        </h1>
        <p variants={transitionOnScroll}>
          You are at the right place SuperAnimate provides their own anime
          station which is extremely powerful.
        </p>
      </motion.div>

      <motion.div className="bg-gradient-to-tr from-emerald-400 to-rose-400 h-1/2 w-1/3 shadow-2xl">
        <LightningBoltIcon className="drop-shadow-sm" />
      </motion.div>
    </main>
  );
};
export default AboutWorkstation;
