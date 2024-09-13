import styles from "../../../css/lessonpost.module.scss"

import code from "../../../../../../assets/Screenshot from 2024-09-12 02-39-29.png"
import pic1 from "../../../../../../assets//Screenshot from 2024-09-12 20-45-13.png"
import pic2 from "../../../../../../assets/Screenshot from 2024-09-12 20-45-37.png"

import lessonData from "../../../../../../lesson-post-content.json"

function ContentLayout() {

    const lessonId = "1" as keyof typeof lessonData

    const renderTextSection = () => {
        const sections = lessonData[lessonId]?.["sections"];
        const sectionElements = Object.keys(sections).map((key) => {
            const section = sections[key as keyof typeof sections];
            return (
                <div
                    key={key}
                    className={`${styles["flex"]} ${styles["flex-col"]} ${styles["gap-24"]} ${styles["margin-bottom-16"]}`}
                >
                    <div className={`${styles["flex"]} ${styles["flex-col"]} ${styles["gap-8"]} ${styles["justify-align-center"]}`}>
                        <img className={styles["image-full-cover"]} src={section["url"]} alt={`Image ${key}`} />
                        <span id={styles["figure-text"]} className={`${styles["text-size-14"]}`}>{section["image-text"]}</span>
                    </div>
                    <div className={`${styles["flex"]} ${styles["flex-col"]} ${styles["gap-12"]}`}>
                        <span className={`${styles["text-black"]}`}>{section["text"]}</span>
                    </div>
                </div>
            );
        });
        return <>{sectionElements}</>;
    }

    return (
        <section id={styles["content-section-color"]}>
            <div className={`${styles["x-space-padding-144"]} ${styles["y-space-padding-32"]}`}>
                <div className={`${styles["flex"]} ${styles["align-center"]} ${styles["margin-bottom-16"]}`}>
                    <span className={`${styles["text-black"]} ${styles["text-size-14"]} ${styles["semibold"]}`}>Home</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 6l6 6-6 6" />
                    </svg>
                    <span className={`${styles["text-black"]} ${styles["text-size-14"]} ${styles["semibold"]}`}>Hello, World!</span>
                </div>
                <div className={`${styles["flex"]} ${styles["flex-col"]} ${styles["gap-20"]} ${styles["justify-align-center"]}`}>
                    <div className={styles["w-50"]}>

                        <div className={`${styles["flex"]} ${styles["flex-col"]} ${styles["gap-12"]} ${styles["margin-bottom-16"]}`}>
                            <span className={`${styles["text-black"]} ${styles["bold"]} ${styles["text-size-24"]}`}>In this introductory lesson, we'll explore how to use action functions to display a classic message: Hello, World!. This foundational step will help you understand how action functions work and how they can be used to interact with code dynamically.</span>
                            <span className={`${styles["text-black"]}`}>{lessonData[lessonId]["section-caution"]}</span>
                        </div>
                        {renderTextSection()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentLayout;