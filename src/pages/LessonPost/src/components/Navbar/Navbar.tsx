
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
                </div>
            </div>
        </header>
    )
}

export default Navbar;