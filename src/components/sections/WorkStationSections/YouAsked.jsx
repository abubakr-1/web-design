import { CheckCircleIcon } from "@heroicons/react/solid";
import styles from "../../../styles/WorkStation.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { showOnScroll } from "../../../animations/staticAnimations";
import play from "../../../assets/play.svg";

const YouAsked = ({}) => {
  const [element, view] = useInView({ threshold: 0.6 });
  const control = useAnimation();

  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }

  return (
    <main className={styles.youAsked} ref={element}>
      <motion.div
        className="h-1/2 w-1/3 bg-gradient-to-r from-red-500 to-orange-500 shadow-xl"
        variants={showOnScroll}
        initial="hidden"
        animate={control}
      >
        <CheckCircleIcon className="drop-shadow-sm" />
      </motion.div>
      <div>
        <h1 className="text-3xl font-bold mb-4">You Asked. We Listened.</h1>
        <p>Now Every popular anime character is available in SuperStation</p>
      </div>

      <img src={play} alt="" className="absolute bottom-0 right-0 h-1/2" />
    </main>
  );
};
export default YouAsked;
