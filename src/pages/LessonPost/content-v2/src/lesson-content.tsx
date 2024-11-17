import React from "react"

import ShallowHeader from "../../../Dashboard/src/components/ShallowHeader"
import Footer from "../../../Dashboard/src/components/Footer"
import { LessonPost } from "./components/LessonPost"

import { useParams } from 'react-router-dom';

import data from "../../../../content-text.json"
import content from "../../../../lesson-post-content.json"

import style from "./css/lesson.module.scss"

const LessonContent = () => {

    const { id } = useParams<{ id: keyof typeof content }>()

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <React.Fragment>
            <div className={style["resize-display-none"]}>
                <ShallowHeader position="left"/>
            </div>
            <div className={style["resize-display"]}>
                <ShallowHeader position="center"/>
            </div>
            <main>
                <LessonPost userId={id}/>
            </main>
            <Footer about={data["SITE_ABOUT"]} visibleTabs={false} />
        </React.Fragment>
    )
}

export default LessonContent