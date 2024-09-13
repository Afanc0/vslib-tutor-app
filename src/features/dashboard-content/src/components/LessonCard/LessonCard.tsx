import style from "../../css/dashboardcontent.module.scss"
import dataLesson from "../../../../../data-lesson.json"
import { useEffect, useState } from "react";

interface LessonCardProps {
    lessonId: keyof typeof dataLesson;
}

function LessonCard(props: LessonCardProps) {

    const { lessonId } = props
    const data = dataLesson[lessonId]

    const [difficultyText, setDifficultyText] = useState("easy-text")

    useEffect(() => {
        if (data["difficulty"] === "Beginner") {
            setDifficultyText("easy-text");
        } else if (data["difficulty"] === "Intermediate") {
            setDifficultyText("med-text");
        } else if (data["difficulty"] === "Advance") {
            setDifficultyText("hard-text");
        }
    }, [data]);

    return (
        <div className={`${style["w-40"]} ${style["shadow-box"]} ${style["flex-1"]} ${style["lesson-card"]}`}>
            <div>
                <img className={style["image-full-cover"]} src={data["url"]}></img>
            </div>
            <div className={`${style["y-space-padding-20"]} ${style["x-space-padding-36"]}`}>
                <div className={`${style["flex"]} ${style["flex-col"]}`}>
                    <span className={`${style["text-black"]} ${style["text-size-20"]} ${style["bold"]}`}>{data["title"]}</span>
                    <span className={`${style[difficultyText]}`}>{data["difficulty"]}</span>
                </div>
                <div className={`${style["y-space-padding-"]} ${style["margin-top-16"]} ${style["h-stable"]}`}>
                    <span className={`${style["text-black"]} ${style["text-custom-setup"]} ${style["text-fourline"]}`}>{data["description"]}</span>
                </div>
                <div className={`${style["margin-top-8"]}`}>
                    <button>Begin Lesson</button>
                </div>
            </div>
        </div>
    )
}

export default LessonCard