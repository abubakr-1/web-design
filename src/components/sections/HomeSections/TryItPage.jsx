import styles from "../../../styles/Home.module.css";
import { motion } from "framer-motion";
import { showOnScroll } from "../../../animations/staticAnimations";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

const TryIt = ({}) => {
  return (
    <motion.div className={styles.try}>
      <Parallax speed={10} className="flex flex-col items-center">
        <h1 className="text-4xl text-center mb-10" variants={showOnScroll}>
          Make juicy and fresh animations with SuperAnimate
        </h1>
        <Link
          to="/workstation"
          className="lg:w-1/4 w-10/12 mt-5 bg-rose-500 h-16 flex justify-center items-center"
          variants={showOnScroll}
        >
          Try It Out
        </Link>
      </Parallax>
    </motion.div>
  );
};
export default TryIt;
