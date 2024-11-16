
import { Breadcrumb } from "../Breadcrumb";

// import lesson from "../../../../../../lesson-post-content.json"
import data from "../../../../../../data-lesson.json"
import style from "../../css/lesson.module.scss"

interface LessonPost {
    userId: keyof typeof data | undefined
}

const LessonPost: React.FC<LessonPost> = ({
    userId
}) => {

    const isValidUserId = userId !== undefined && userId in data;
    if (!isValidUserId) {
        return (
            <div className={`${style["flex"]} ${style["justify-align-center"]} ${style["min-h-70"]} ${style["text-black"]} ${style["bg-white"]}`}>
                Not Found!
            </div>
        )
    }

    return (
        <section className={style["bg-white"]}>
            <div className={`${style["x-space-padding-32"]} ${style["y-space-padding-16"]}`}>
                <Breadcrumb location={data[userId]["title"]} />
                <div className={`${style["min-h-70"]}`}>

                </div>
            </div>
        </section>
    )
}

export { LessonPost }