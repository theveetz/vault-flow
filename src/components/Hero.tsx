import { FunctionComponent } from "react";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  return (
    <section className={[styles.hero, className].join(" ")}>
      <div className={styles.heroStack}>
        <div className={styles.smallContainer}>
          <div className={styles.titleSection}>
            <div className={styles.pill}>
              <div className={styles.weJustRaised}>
                We just raised $20M in Series B. Learn more
              </div>
            </div>
            <div className={styles.content}>
              <h1 className={styles.modernAnalyticsForContainer}>
                <p className={styles.modernAnalytics}>Modern analytics</p>
                <p className={styles.forTheModern}>for the modern world</p>
              </h1>
              <div className={styles.paragraphWrapper}>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
              </div>
            </div>
            <div className={styles.actions}>
              <button className={styles.button}>
                <div className={styles.downloadTheApp}>Download the app</div>
              </button>
              <button className={styles.button1}>
                <div className={styles.talkToAn}>Talk to an expert</div>
              </button>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.dummyTextTo}>
              Dummy text to delete in Webflow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
