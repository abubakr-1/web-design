import styles from "../../../styles/Home.module.css";
import play from "../../../assets/play.svg";
import { motion } from "framer-motion";

const LearnMore = ({}) => {
  return (
    <main className={styles.learn}>
      <div
        className={`bg-purple-600 ${styles.learnSection} flex flex-col items-center justify-around py-20 text-white shadow-2xl`}
      >
        <h1 className="text-3xl font-bold">
          Want more information about SuperAnimate
        </h1>
        <button className="bg-white rounded-3xl text-black p-4 shadow-lg">
          Learn More
        </button>
      </div>
      <motion.img className="absolute left-0 bottom-0 h-64" src={play} />
    </main>
  );
};
export default LearnMore;
