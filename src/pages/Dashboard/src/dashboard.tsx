import React, { MutableRefObject, useRef } from "react"

import data from "../../../content-text.json"
import FeatureBlock from "./components/FeatureBlock"

import ShadedGithubLogo from "../../../features/dashboard-link/src/components/github-logo"
import SquirrelLogo from "../../../features/dashboard-link/src/components/SquirrelLogo"

import HeroBanner from "./components/HeroBanner"
import Footer from "./components/Footer"

import LessonBoard from "./components/LessonBoard"

import styles from "./css/dashboard.module.scss"

const scrollToSection = (refElement: MutableRefObject<HTMLElement | null> | undefined) => {
    if (refElement?.current) {
        refElement.current.scrollIntoView({ behavior: 'smooth' })
    }
};

const Dashboard = () => {   

    /* 
        Fix ref to both repo
    */
    const repo = useRef(null)
    const squir = useRef(null)
    const comp = useRef(null)
    
    return (
        <React.Fragment>
            <HeroBanner 
                bannerTitle={data["Title"]["title"]}
                bannerDescription={data["Title"]["description"]}
                refNavigation={[repo, squir, comp]}
                toSlide={comp}
                onClick={scrollToSection}
            />
            <main>
            <div ref={repo}>
                <div className={styles["resize-display-none"]}>
                    <FeatureBlock 
                        contentType='REPOSITORY'
                        contentTitle={data["LINK_CONTENT_1"]["title"]}
                        contentDescription={data["LINK_CONTENT_1"]["description"]}
                        buttonTitle='View Repo'
                        contentSvg={ShadedGithubLogo}
                        contentLink={data["LINK_CONTENT_1"]["link"]}
                        panelColor="content-color-apply"
                        variant={true}
                    />
                </div>
                <div className={styles["resize-display"]}>
                    <FeatureBlock 
                        contentType='REPOSITORY'
                        contentTitle={data["LINK_CONTENT_1"]["title"]}
                        contentDescription={data["LINK_CONTENT_1"]["description"]}
                        buttonTitle='View Repo'
                        contentSvg={ShadedGithubLogo}
                        contentLink={data["LINK_CONTENT_1"]["link"]}
                        panelColor="content-color-apply"
                        variant={false}
                    />
                </div>
            </div>
            <FeatureBlock 
                contentType='SQUIRREL DOCUMENTATION'
                contentTitle={data["LINK_CONTENT_2"]["title"]}
                contentDescription={data["LINK_CONTENT_2"]["description"]}
                buttonTitle='View Docs'
                featureBlockRef={squir}
                contentSvg={SquirrelLogo}
                contentLink={data["LINK_CONTENT_2"]["link"]}
                panelColor="content-color-apply-2"
                variant={false}
            />
            <LessonBoard lessonSectionRef={comp} />
            </main>
            <Footer 
                refNavigation={[repo, squir, comp]}
                onOptionClick={scrollToSection}
                about={data["SITE_ABOUT"]}
            />
        </React.Fragment>
    )
}

export default Dashboard