import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import MainPage from "../components/sections/HomeSections/MainPage";
import AboutPage from "../components/sections/HomeSections/AboutPage";
import PlayGround from "../components/sections/HomeSections/PlayGround";
import LearnMore from "../components/sections/HomeSections/LearnMore";
import TryIt from "../components/sections/HomeSections/TryItPage";

const Home = ({}) => {
  return (
    <motion.div className={styles.home}>
      <MainPage />
      <AboutPage />
      <PlayGround />
      <TryIt />
      <LearnMore />
    </motion.div>
  );
};
export default Home;
