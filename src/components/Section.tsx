import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./Section.module.css";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <section className={[styles.section, className].join(" ")}>
      <div className={styles.sectionTitle}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Features that work for your future.</h1>
        </div>
        <div className={styles.checkOutOur}>
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.columns}>
          <Column
            iconImage="/icon-image@2x.png"
            analyticsDashboard="Analytics Dashboard"
            text="Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
            viewDashboard="View dashboard"
          />
          <Column
            iconImage="/icon-image-1@2x.png"
            analyticsDashboard="Digital Credit Tokens"
            text="Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
            viewDashboard="View tokens"
          />
        </div>
        <div className={styles.columns1}>
          <div className={styles.column}>
            <div className={styles.iconWrapper}>
              <img
                className={styles.iconImage}
                alt=""
                src="/icon-image-2@2x.png"
              />
            </div>
            <div className={styles.cardContent}>
              <h1 className={styles.codeCollaboration}>Code collaboration</h1>
              <div className={styles.text}>
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where it's
                coming from. Whether you're integrating data from multiple
                sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and
                ensure that your data is consistent and reliable.
              </div>
              <div className={styles.actions}>
                <div className={styles.viewCodeCollaboration}>
                  View code collaboration
                </div>
              </div>
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
