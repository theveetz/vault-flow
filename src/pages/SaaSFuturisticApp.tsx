import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Section from "../components/Section";
import Analytics from "../components/Analytics";
import Footer from "../components/Footer";
import styles from "./SaaSFuturisticApp.module.css";

const SaaSFuturisticApp: FunctionComponent = () => {
  return (
    <div className={styles.saasFuturisticApp}>
      <Navbar />
      <Hero />
      <div className={styles.trust}>
        <div className={styles.trustedByTeamsContainer}>
          <span>{`Trusted by teams at over `}</span>
          <span className={styles.span}>1,000</span>
          <span> of the world’s leading organizations</span>
        </div>
      </div>
      <Logos />
      <Section />
      <Analytics />
      <Footer />
    </div>
  );
};

export default SaaSFuturisticApp;
