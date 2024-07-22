import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarContent}>
        <div className={styles.logoWrapper}>
          <div className={styles.logoIcon}>
            <img
              className={styles.valtflowIcon}
              loading="lazy"
              alt=""
              src="/valtflow-icon@2x.png"
            />
            <h3 className={styles.vaultflow}>Vaultflow</h3>
          </div>
        </div>
        <div className={styles.navigation}>
          <nav className={styles.menu}>
            <nav className={styles.menuLinks}>
              <div className={styles.features}>Features</div>
              <div className={styles.pricing}>Pricing</div>
              <div className={styles.aboutUs}>About us</div>
            </nav>
          </nav>
          <button className={styles.button}>
            <div className={styles.downloadTheApp}>Download the app</div>
          </button>
          <button className={styles.button1}>
            <div className={styles.talkToAn}>Talk to an expert</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
