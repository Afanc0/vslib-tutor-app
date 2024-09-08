import styles from "./css/home.module.scss";

import HomeNavbar from "./components/home-navbar/Navbar";
import content from "../../../content-text.json";
import DownChevron from "./components/Down-Chevron";
import { RefObject } from "react";
import RefProps from "../../refProp.type";

function DashboardHome(props: RefProps) {

    const [repo, squir, comp] = props.refArray

    const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <header id={styles["background-content"]}>

            <HomeNavbar refArray={[repo, squir, comp]} />

            <div className={`${styles["x-space-padding-96"]}  ${styles["y-space-padding-100"]} ${styles["flex"]} ${styles["align-center"]} ${styles["justify-space-between"]}`}>
                <div className={`${styles["flex"]} ${styles["flex-1"]}`}>
                    <div className={`${styles["flex"]} ${styles["justify-center"]} ${styles["flex-col"]} ${styles["gap-16"]} ${styles["min-h-250"]} ${styles["w-16"]}`}>
                        <span className={`${styles["text-size-48"]} ${styles["bold-text"]}`}>{content["Title"]["title"]}</span>
                        <span className={styles["text-size-16"]}>{content["Title"]["description"]}</span>
                    </div>
                </div>
            </div>
            <div className={`${styles["flex"]} ${styles["justify-align-center"]} ${styles["y-space-padding-32"]}`}>
                <div onClick={() => scrollToSection(repo)} className={`${styles["round-button"]} ${styles["flex"]} ${styles["justify-align-center"]}`}>
                    <DownChevron />
                </div>
            </div>
        </header>
    );
}

export default DashboardHome;
