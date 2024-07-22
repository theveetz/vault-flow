import { FunctionComponent } from "react";
import styles from "./Analytics.module.css";

export type AnalyticsType = {
  className?: string;
};

const Analytics: FunctionComponent<AnalyticsType> = ({ className = "" }) => {
  return (
    <section className={[styles.analytics, className].join(" ")}>
      <div className={styles.heroNoImage}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.ourPowerfulAnalytics}>
              {" "}
              Our powerful analytics provides invaluable insights.
            </h1>
            <div
              className={styles.unlockThePower}
            >{`Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. `}</div>
            <button className={styles.button}>
              <div className={styles.downloadTheApp}>Download the app</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
