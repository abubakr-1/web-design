import { BeakerIcon } from "@heroicons/react/solid";
import styles from "../../../styles/Home.module.css";
import { motion } from "framer-motion";
import { showOnScroll } from "../../../animations/staticAnimations";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const PlayGround = ({}) => {
  const [element, view] = useInView({ threshold: 0.6 });
  const control = useAnimation();

  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }

  return (
    <main className={styles.play}>
      <div>
        <h1 className="text-2xl font-bold">
          Experiment with animations on SuperAnimate playground
        </h1>
      </div>

      <motion.div
        className="h-1/2 bg-gradient-to-br from-blue-500 to-amber-400 w-1/3 mb-10"
        initial="hidden"
        animate={control}
        variants={showOnScroll}
        ref={element}
      >
        <BeakerIcon className="drop-shadow-sm" />
      </motion.div>
    </main>
  );
};
export default PlayGround;
