import LessonCard from "./components/LessonCard"
import style from "./css/dashboardcontent.module.scss"
import lessonData from "../../../data-lesson.json"

interface DashboardContentProps {
    refVal?: React.RefObject<HTMLDivElement>
}

function DashboardContent(props: DashboardContentProps) {

    const value = props.refVal

    const renderLessonCard = () => {
        return Object.keys(lessonData).map((key) => (
            <LessonCard lessonId={key as keyof typeof lessonData} />
        ))
    }

    return (
        <section ref={value} id={style["dasboard-content-white"]} className={`${style["x-space-padding-96"]}`}>
            <div className={`${style["flex-wrap"]} ${style["y-space-padding-72"]} ${style["flex"]} ${style["justify-center"]} ${style["gap-50"]}`}>
                {renderLessonCard()}
            </div>
        </section>
    )
}

export default DashboardContent;