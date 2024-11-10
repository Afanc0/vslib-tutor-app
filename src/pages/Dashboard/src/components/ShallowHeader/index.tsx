import TitleIcon from "../../../../../features/dashboard-home/src/components/TitleIcon";
import styles from "../../css/dashboard.module.scss"


const ShallowHeader = () => {

    return (
        <div id={styles["header-section"]} className={`${styles["display-sticky"]} ${styles["shallow-nav"]} ${styles["z-50"]} ${styles["x-space-padding-96"]} ${styles["y-space-padding-32"]} ${styles["min-w-full"]}`}>
            <div className={`${styles["flex"]} ${styles["justify-align-center"]}`}>
                <div className={`${styles["flex"]} ${styles["justify-align-center"]} ${styles["gap-8"]}`}>
                    <TitleIcon />
                    <span className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>LEFT4SCRIPT</span>
                </div>
            </div>
        </div>
    )
}

export default ShallowHeader;