import styles from "../../css/lessonpost.module.scss"
import { RightChevron } from "../../icons/RightChevron"

interface Breadcrumb {
    location: string
}

const Breadcrumb: React.FC<Breadcrumb> = ({
    location
}) => {
    return (
        <div className={`${styles["flex"]} ${styles["align-center"]} ${styles["margin-bottom-16"]}`}>
            <span className={`${styles["text-black"]} ${styles["text-size-14"]} ${styles["semibold"]}`}>Home</span>
            <RightChevron />
            <span className={`${styles["text-black"]} ${styles["text-size-14"]} ${styles["semibold"]}`}>{location}</span>
        </div>
    )
}


export { Breadcrumb }