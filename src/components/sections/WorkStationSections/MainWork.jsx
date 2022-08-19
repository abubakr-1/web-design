import { Parallax } from "react-scroll-parallax";
import styles from "../../../styles/WorkStation.module.css";

const MainWork = ({}) => {
  return (
    <main className={styles.mainWork}>
      <Parallax
        speed={-5}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl mb-5">SuperAnimate Workstation</h1>
        <p className="bg-gradient-to-r from-orange-500 to-indigo-500 p-1 px-4">
          A powerful station for your animation
        </p>
      </Parallax>
    </main>
  );
};
export default MainWork;
