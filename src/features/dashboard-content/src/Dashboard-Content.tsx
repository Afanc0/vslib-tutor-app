import LessonCard from "./components/LessonCard";
import style from "./css/dashboardcontent.module.scss"

interface DashboardContentProps {
    refVal?: React.RefObject<HTMLDivElement>;
}

function DashboardContent(props: DashboardContentProps) {

    const value = props.refVal

    return (
        <section ref={value} id={style["dasboard-content-white"]} className={`${style["x-space-padding-96"]}`}>
            <div className={`${style["flex-wrap"]} ${style["y-space-padding-72"]} ${style["flex"]} ${style["justify-center"]} ${style["gap-50"]}`}>
                <LessonCard lessonId="1"/> 
                <LessonCard lessonId="2"/>
                <LessonCard lessonId="5"/>
                <LessonCard lessonId="3"/> 
                <LessonCard lessonId="4"/> 
                <LessonCard lessonId="6"/> 
            </div>
        </section>
    )
}

export default DashboardContent;