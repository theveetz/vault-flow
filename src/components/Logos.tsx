import { FunctionComponent } from "react";
import styles from "./Logos.module.css";

export type LogosType = {
  className?: string;
};

const Logos: FunctionComponent<LogosType> = ({ className = "" }) => {
  return (
    <section className={[styles.logos, className].join(" ")}>
      <div className={styles.logoGrid}>
        <div className={styles.logoRowOne}>
          <img
            className={styles.logoDellIcon}
            loading="lazy"
            alt=""
            src="/logodell.svg"
          />
        </div>
        <div className={styles.zendeskLogo}>
          <img
            className={styles.logoZendeskIcon}
            loading="lazy"
            alt=""
            src="/logozendesk.svg"
          />
        </div>
        <div className={styles.rakutenLogo}>
          <img
            className={styles.logoRakutenIcon}
            loading="lazy"
            alt=""
            src="/logorakuten.svg"
          />
        </div>
        <div className={styles.fundsLogo}>
          <img
            className={styles.logoPacificFundsIcon}
            loading="lazy"
            alt=""
            src="/logopacificfunds.svg"
          />
        </div>
        <img
          className={styles.logoNcrIcon}
          loading="lazy"
          alt=""
          src="/logoncr.svg"
        />
        <div className={styles.lastLogos}>
          <img
            className={styles.nestIcon}
            loading="lazy"
            alt=""
            src="/nest.svg"
          />
          <div className={styles.latticeLogo}>
            <img
              className={styles.latticeIcon}
              loading="lazy"
              alt=""
              src="/lattice.svg"
            />
          </div>
        </div>
        <div className={styles.logoRowOne1}>
          <img
            className={styles.logoTedIcon}
            loading="lazy"
            alt=""
            src="/logoted.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Logos;
