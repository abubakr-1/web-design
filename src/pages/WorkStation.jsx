import { useState } from "react";
import AboutWorkstation from "../components/sections/WorkStationSections/AboutWorkstation";
import Feature from "../components/sections/WorkStationSections/Feature";
import MainWork from "../components/sections/WorkStationSections/MainWork";
import Pricing from "../components/sections/WorkStationSections/Pricing";
import YouAsked from "../components/sections/WorkStationSections/YouAsked";
import styles from "../styles/WorkStation.module.css";

const WorkStation = ({}) => {
  return (
    <main className={styles.workstation}>
      <MainWork />
      <AboutWorkstation />
      <YouAsked />
      <Feature />
    </main>
  );
};
export default WorkStation;
