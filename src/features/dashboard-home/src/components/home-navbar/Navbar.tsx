import { RefObject } from "react";
import styles from "../../css/home.module.scss"

import TitleIcon from "../TitleIcon";
import RefProps from "../../../../refProp.type";

function HomeNavbar(props: RefProps) {

    const [repo, squir, comp] = props.refArray

    const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <div className={`${styles["display-absolute"]} ${styles["x-space-padding-96"]} ${styles["y-space-padding-32"]}`}>
            <div className={`${styles["flex"]} ${styles["align-center"]} ${styles["w-75"]} ${styles["justify-space-between"]}`}>
                <div className={`${styles["flex"]} ${styles["align-center"]} ${styles["gap-8"]}`}>
                    <TitleIcon />
                    <span className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>LEFT4SCRIPT</span>
                </div>
                <div className={`${styles["flex"]}`}>
                    <div className={`${styles["w-50"]}`}>
                        <ul className={`${styles["flex"]} ${styles["justify-space-between"]} ${styles["flex-row"]}`}>
                            <li onClick={() => scrollToSection(repo)} className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>
                                REPOSITORY
                            </li>
                            <li onClick={() => scrollToSection(squir)} className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>
                                SQUIRREL DOCUMENTATION
                            </li>
                            <li onClick={() => scrollToSection(comp)}  className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>
                                COMPENDIUM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeNavbar;