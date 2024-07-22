import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.column}>
            <div className={styles.footerLinksWrapper}>
              <h3 className={styles.contact}>Contact</h3>
              <div className={styles.footerLinks}>
                <div className={styles.workInquiresWorkvaultflow}>
                  Work inquires: work@vaultflow.com
                </div>
                <div className={styles.prAndSpeaking}>
                  PR and speaking: press@vaultflow.com
                </div>
                <div className={styles.newBusinessNewbusinessvaul}>
                  New business: newbusiness@vaultflow.com
                </div>
              </div>
            </div>
            <div className={styles.footerLinksWrapper1}>
              <h3 className={styles.careers}>Careers</h3>
              <div className={styles.careersvaultflowcom}>
                Careers@vaultflow.com
              </div>
            </div>
            <div className={styles.vaultflowAllRights}>
              © 2023 Vaultflow. All Rights Reserved.
            </div>
          </div>
          <div className={styles.column1}>
            <div className={styles.footerLinksWrapper2}>
              <h3 className={styles.address}>Address</h3>
              <div className={styles.addressWrapper}>
                <div className={styles.thStreetFloorContainer}>
                  <p className={styles.thStreetFloor}>
                    398 11th Street, Floor 2
                  </p>
                  <p className={styles.sanFranciscoCa}>
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.footerLinksWrapper3}>
              <h3 className={styles.social}>Social</h3>
              <div className={styles.socials}>
                <div className={styles.twitter}>Twitter</div>
                <div className={styles.instagram}>Instagram</div>
                <div className={styles.tikTok}>Tik Tok</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerLogo}>
          <img
            className={styles.valtflowIcon}
            alt=""
            src="/valtflow-icon-1@2x.png"
          />
          <h3 className={styles.vaultflow}>Vaultflow</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
