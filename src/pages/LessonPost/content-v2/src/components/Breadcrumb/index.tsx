import styles from "../../../../src/css/lessonpost.module.scss"
import { RightChevron } from "../../../../src/icons/RightChevron"

interface Breadcrumb {
    location: string
}

const Breadcrumb: React.FC<Breadcrumb> = ({
    location
}) => {
    return (
        <div className={`${styles["flex"]} ${styles["align-center"]}`}>
            <span className={`${styles["text-black"]} ${styles["text-size-16"]} ${styles["semibold"]}`}>Home</span>
            <RightChevron />
            <span className={`${styles["text-black"]} ${styles["text-size-16"]} ${styles["semibold"]}`}>{location}</span>
        </div>
    )
}

export { Breadcrumb }