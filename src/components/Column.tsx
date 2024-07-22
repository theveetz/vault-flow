import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  className?: string;
  iconImage?: string;
  analyticsDashboard?: string;
  text?: string;
  viewDashboard?: string;
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  iconImage,
  analyticsDashboard,
  text,
  viewDashboard,
}) => {
  return (
    <div className={[styles.column, className].join(" ")}>
      <div className={styles.cardWrapper}>
        <div className={styles.iconWrapper}>
          <img
            className={styles.iconImage}
            loading="lazy"
            alt=""
            src={iconImage}
          />
        </div>
        <div className={styles.cardContent}>
          <h1 className={styles.analyticsDashboard}>{analyticsDashboard}</h1>
          <div className={styles.text}>{text}</div>
          <div className={styles.actions}>
            <div className={styles.button}>
              <div className={styles.viewDashboard}>{viewDashboard}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
