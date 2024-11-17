
import { Breadcrumb } from "../Breadcrumb";
import { TextSection } from "../TextSection";

import content from "../../../../../../lesson-post-content.json"
import data from "../../../../../../data-lesson.json"
import style from "../../css/lesson.module.scss"


interface LessonPost {
    userId: keyof typeof content | undefined
}

type ContentKey = typeof content;

const LessonPost: React.FC<LessonPost> = ({
    userId
}) => {

    const isValidUserId = userId !== undefined && userId in content;
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
                <div className={`${style["flex"]} ${style["flex-col"]} ${style["y-space-padding-32"]} ${style["gap-14"]}`}>
                    <TextSection lessonId={userId} />
                    {Object.keys(content[userId]["sections"]).map((key) => (
                        <TextSection 
                            key={key} 
                            lessonId={userId} 
                            variant="with-image" 
                            block={key as keyof ContentKey[keyof typeof content]["sections"]} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export { LessonPost }