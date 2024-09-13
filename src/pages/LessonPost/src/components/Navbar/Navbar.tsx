
import styles from "../../../../../features/dashboard-home/src/css/home.module.scss"
import TitleIcon from "../../../../../features/dashboard-home/src/components/TitleIcon";

function Navbar() {

    return (
        <header id={styles["header-section"]} >
            <div className={`${styles["x-space-padding-96"]} ${styles["y-space-padding-32"]}`}>
                <div className={`${styles["flex"]} ${styles["align-center"]} ${styles["w-75"]} ${styles["justify-space-between"]}`}>
                    <a href={"/"}>
                        <div className={`${styles["flex"]} ${styles["align-center"]} ${styles["gap-8"]}`}>
                                <TitleIcon />
                            <span className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>LEFT4SCRIPT</span>
                        </div>
                    </a>
                    <div className={`${styles["flex"]}`}>
                        <div className={`${styles["w-50"]}`}>
                            <ul className={`${styles["flex"]} ${styles["justify-space-between"]} ${styles["flex-row"]}`}>
                                <li className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>
                                    REPOSITORY
                                </li>
                                <li className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>
                                    SQUIRREL DOCUMENTATION
                                </li>
                                <li className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>
                                    COMPENDIUM
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;