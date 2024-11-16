import TitleIcon from "../../../../../features/dashboard-home/src/components/TitleIcon";
import styles from "../../css/dashboard.module.scss"

const positionOptions = {
    "left": "justify-align-start",
    "center": "justify-align-center",
    "right": "justify-align-end",
} as const

interface ShallowHeader {
    position: keyof typeof positionOptions;
}

const ShallowHeader: React.FC<ShallowHeader> = ({
    position,
}) => {

    return (
        <header>
            <div id={styles["header-section"]} className={`${styles["display-sticky"]} ${styles["z-50"]} ${styles["x-space-padding-96"]} ${styles["y-space-padding-32"]} ${styles["min-w-full"]}`}>
                <div className={`${styles["flex"]} ${styles[positionOptions[position]]}`}>
                    <a href="/">
                        <div className={`${styles["flex"]} ${styles["justify-align-center"]} ${styles["gap-8"]}`}>
                            <TitleIcon />
                            <span className={`${styles["text-size-16"]} ${styles["semibold-text"]}`}>LEFT4SCRIPT</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default ShallowHeader;