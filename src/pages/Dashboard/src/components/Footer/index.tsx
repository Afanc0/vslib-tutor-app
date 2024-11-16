import { FC, MutableRefObject } from "react"
import style from "../../css/dashboard.module.scss"
import GithubMinIcon from "../../../../../features/dashboard-footer/src/components/GithubMinIcon";
import React from "react";

interface DashboardFooter {
    refNavigation?: MutableRefObject<HTMLElement | null>[];
    onOptionClick?: (arg: MutableRefObject<HTMLElement | null> | undefined) => void;
    about: string;
    visibleTabs?: boolean
}

const Footer: FC<DashboardFooter> = ({
    refNavigation,
    onOptionClick=()=>{},
    about,
    visibleTabs=true
}) => {

    const [repo, squir, comp] = refNavigation ?? []

    return (
        <footer id={style["footer-section"]}>
            <div className={`${style["x-space-padding-96"]} ${style["flex"]} ${style["gap-48"]} ${style["flex-wrap"]} ${style["y-space-padding-72"]}`}>
                <div className={`${style["flex"]} ${style["flex-1"]} ${style["flex-col"]} ${style["gap-20"]} ${style["max-w-75"]}`}>
                    <span className={`${style["text-size-18"]} ${style["bold"]} ${style["letter-spacing-375"]}`}>ABOUT</span>
                    <span>{about}</span>
                </div> 
                {visibleTabs && (
                <React.Fragment>
                    <div className={`${style["flex"]} ${style["flex-1"]} ${style["flex-col"]} ${style["gap-20"]}`}>
                        <span className={`${style["text-size-18"]} ${style["bold"]} ${style["letter-spacing-375"]}`}>CATEGORIES</span>
                        <ul className={`${style["flex"]} ${style["flex-col"]} ${style["gap-6"]}`}>
                            <li>
                                <span onClick={() => onOptionClick(repo)} className={style["footer-span"]}>Respository</span>
                            </li>
                            <li>
                                <span onClick={() => onOptionClick(squir)} className={style["footer-span"]}>Squirrel Documentation</span>
                            </li>
                            <li>
                                <span onClick={() => onOptionClick(comp)} className={style["footer-span"]}>Compendium</span>
                            </li>
                        </ul>
                    </div>
                    <div className={`${style["flex"]} ${style["flex-1"]} ${style["flex-col"]} ${style["gap-20"]}`}>
                        <span className={`${style["text-size-18"]} ${style["bold"]} ${style["letter-spacing-375"]}`}>QUICK LINKS</span>
                        <ul className={`${style["flex"]} ${style["flex-col"]} ${style["gap-6"]}`}>
                            <li>
                                <span onClick={() => onOptionClick(comp)} className={style["footer-span"]}>Configuration</span>
                            </li>
                            <li>
                                <span onClick={() => onOptionClick(comp)} className={style["footer-span"]}>VSLib Basics</span>
                            </li>
                            <li>
                                <span onClick={() => onOptionClick(comp)} className={style["footer-span"]}>Squirrel Syntax</span>
                            </li>
                            <li>
                                <span onClick={() => onOptionClick(comp)} className={style["footer-span"]}>Script Resources</span>
                            </li>
                        </ul>
                    </div>
                </React.Fragment>
                )}
            </div>
            <div className={`${style["x-space-padding-96"]} ${style["flex"]} ${style["flex"]} ${style["flex-col"]}`}>
                <div className={`${style["bottom-border-1"]} ${style["w-100"]}`} />
                <div className={`${style["y-space-padding-48"]} ${style["flex"]} ${style["justify-between"]}`}>
                    <div>
                        <span>Copyright &copy; All Lesson and Design Rights Reserverd by Afanco.</span>
                    </div>
                    <div>
                        <a href="https://github.com/Afanc0" target="_blank" rel="noopener noreferrer">
                            <div className={`${style["round-full"]} ${style["round-object"]} ${style["round-color"]} ${style["flex"]} ${style["justify-align-center"]}`}>
                                <GithubMinIcon />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer