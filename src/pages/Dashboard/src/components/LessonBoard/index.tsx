import LessonCard from "../LessonCard"
import style from "../../css/dashboard.module.scss"
import lessonData from "../../../../../data-lesson.json"

interface LessonBoard {
    lessonSectionRef?: React.RefObject<HTMLDivElement>
}

const LessonBoard: React.FC<LessonBoard> = ({lessonSectionRef}) => {

    const renderLessonCard = () => {
        return Object.keys(lessonData).map((key) => (
            <LessonCard lessonId={key as keyof typeof lessonData} />
        ))
    }

    return (
        <section ref={lessonSectionRef} id={style["dasboard-content-white"]} className={`${style["x-space-padding-96"]}`}>
            <div className={`${style["flex-wrap"]} ${style["y-space-padding-72"]} ${style["flex"]} ${style["justify-center"]} ${style["gap-50"]}`}>
                {renderLessonCard()}
            </div>
        </section>
    )
}

export default LessonBoard;