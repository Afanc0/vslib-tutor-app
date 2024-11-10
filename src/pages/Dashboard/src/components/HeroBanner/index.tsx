import { FC, MutableRefObject } from "react";
import DownChevron from "../../../../../features/dashboard-home/src/components/Down-Chevron";
import HomeNavbar from "../../../../../features/dashboard-home/src/components/home-navbar"

import styles from "../../css/dashboard.module.scss"

import ShallowHeader from "../ShallowHeader";
import React from "react";

interface HeroBanner {
    bannerTitle: string;
    bannerDescription: string;
    refNavigation: MutableRefObject<HTMLElement | null>[]
    toSlide: MutableRefObject<HTMLElement | null> | undefined;
    onClick: (arg: MutableRefObject<HTMLElement | null> | undefined) => void;
}

const HeroBanner: FC<HeroBanner> = ({
    bannerTitle,
    bannerDescription,
    refNavigation,
    toSlide,
    onClick
}) => {

    return (
        <React.Fragment>
            <ShallowHeader />
            <header id={styles["background-content"]} className={styles["shrink-screen"]}>
                <HomeNavbar refArray={refNavigation} />
                <div className={`${styles["x-space-padding-96"]}  ${styles["y-space-padding-100"]} ${styles["flex"]} ${styles["align-center"]} ${styles["justify-space-between"]}`}>
                    <div className={`${styles["flex"]} ${styles["flex-1"]}`}>
                        <div className={`${styles["flex"]} ${styles["justify-center"]} ${styles["flex-col"]} ${styles["gap-16"]} ${styles["min-h-250"]} ${styles["w-16"]}`}>
                            <span className={`${styles["text-size-48"]} ${styles["bold-text"]}`}>{bannerTitle}</span>
                            <span className={styles["text-size-16"]}>{bannerDescription}</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles["flex"]} ${styles["justify-align-center"]} ${styles["y-space-padding-32"]}`}>
                    <div onClick={() => onClick(toSlide)} className={`${styles["round-button"]} ${styles["flex"]} ${styles["justify-align-center"]}`}>
                        <DownChevron />
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default HeroBanner