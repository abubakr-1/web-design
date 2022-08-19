import { useEffect, useState } from "react";
import { allFeatures } from "../../../data/FeaturesData";
import styles from "../../../styles/WorkStation.module.css";

const Feature = ({}) => {
  const [featureList, setFeatureList] = useState(null);

  useEffect(() => {
    setFeatureList(allFeatures);
  }, []);

  return (
    <main className={styles.feature}>
      <h1 className="text-3xl mb-10">Features</h1>
      <div className={styles.featureList}>
        {featureList &&
          featureList.map((feature) => (
            <div
              className={`bg-gradient-to-bl ${feature.gradient} w-1/3 mx-3 h-full flex flex-col justify-around items-center px-5 hover:scale-110 transition-all ease-out`}
            >
              <h1 className="text-xl font-medium">{feature.title}</h1>
              <p className="text-center font-light">{feature.description}</p>
              <button className="h-10 w-10/12 text-sm font-light border border-white hover:bg-white hover:text-black transition-all ease-out">
                {feature.button}
              </button>
            </div>
          ))}
      </div>
    </main>
  );
};
export default Feature;
