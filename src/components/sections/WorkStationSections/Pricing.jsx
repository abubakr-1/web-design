import styles from "../../../styles/WorkStation.module.css";
import { Parallax } from "react-scroll-parallax";

const Pricing = () => {
  return (
    <main className={styles.priceSection}>
      <h1 className="mt-20 text-3xl">Pricing</h1>
      <Parallax
        speed={0}
        className="flex w-full h-full items-center justify-center space-x-5"
      >
        <div className="h-3/4 w-1/5  bg-slate-50 rounded-3xl flex flex-col items-center justify-around text-black"></div>
        <div className="h-3/4 w-1/4  bg-slate-50 rounded-3xl"></div>
        <div className="h-3/4 w-1/5 bg-slate-50 rounded-3xl"></div>
      </Parallax>
    </main>
  );
};

export default Pricing;
