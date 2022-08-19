import {
  gridAnimation,
  gridItemsAnimation,
  squareAnimation,
} from "../../../animations/staticAnimations";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import styles from "../../../styles/Home.module.css";
import { CloudIcon } from "@heroicons/react/solid";

const MainPage = ({}) => {
  const constraintsRef = useRef(null);

  return (
    <div className={styles.main}>
      <div className="text-slate-50">
        <h1 className="text-6xl font-bold text-center mb-8">
          Animations <span className="text-purple-400">GO!</span>
        </h1>
        <p className="text-xl mt-12 mb-28 p-1 px-2 font-semibold font-mono bg-gradient-to-r from-teal-500 to-indigo-500">
          Play as mush as you want or make your own animations
        </p>
      </div>

      <div className="h-10 absolute bottom-20 text-slate-50 font-semibold">
        <p className="text-lg mb-3">Scroll</p>
        <button className="animate-bounce  h-8 w-8 rounded-full flex items-center justify-center mx-auto mt-2 cursor-default">
          <ArrowCircleDownIcon />
        </button>
      </div>

      <div>
        <div>
          <div>
            <motion.div
              variants={gridAnimation}
              initial="hidden"
              animate="show"
              className={`absolute grid grid-cols-2 gap-4 -rotate-6 top-24 right-44 p-4 bg-purple-600 shadow-2xl ${styles.grid}`}
            >
              <motion.div
                variants={gridItemsAnimation}
                className="h-16 w-16 bg-white rounded-full shadow-xl"
              ></motion.div>
              <motion.div
                variants={gridItemsAnimation}
                className="h-16 w-16 bg-white rounded-full shadow-xl"
              ></motion.div>
              <motion.div
                variants={gridItemsAnimation}
                className="h-16 w-16 bg-white rounded-full shadow-xl"
              ></motion.div>
              <motion.div
                variants={gridItemsAnimation}
                className="h-16 w-16 bg-white rounded-full shadow-xl"
              ></motion.div>
            </motion.div>
          </div>
          <motion.div
            className="absolute h-32 w-32 bg-white rounded-lg bottom-20 right-20 rotate-12 shadow-2xl"
            variants={squareAnimation}
            initial="hidden"
            animate="show"
          ></motion.div>
        </div>
      </div>

      <div className={styles.constraints} ref={constraintsRef}>
        <motion.div
          initial="hidden"
          animate="show"
          drag
          dragConstraints={constraintsRef}
          className={`font-bold flex justify-center items-center absolute h-36 w-36 bg-gradient-to-br hover:from-orange-500 hover:to-red-500 rounded-full top-16 left-20 shadow-2xl cursor-grab text-white p-4 from-cyan-400 to-emerald-400`}
        >
          <CloudIcon className="drop-shadow-2xl" />
        </motion.div>
      </div>
    </div>
  );
};
export default MainPage;
