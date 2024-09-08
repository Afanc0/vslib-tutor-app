import style from "./css/footer.module.scss";
import content from "../../../content-text.json";

import GithubMinIcon from "./components/GithubMinIcon";

function DashboardFooter() {
    return (
        <footer id={style["footer-section"]}>
            <div className={`${style["x-space-padding-96"]} ${style["flex"]} ${style["y-space-padding-72"]}`}>
                <div className={`${style["flex"]} ${style["flex-2"]} ${style["flex-col"]} ${style["gap-20"]} ${style["max-w-50"]} ${style["padding-right-64"]}`}>
                    <span className={`${style["text-size-18"]} ${style["bold"]} ${style["letter-spacing-375"]}`}>ABOUT</span>
                    <span>{content["SITE_ABOUT"]}</span>
                </div> 
                <div className={`${style["flex"]} ${style["flex-1"]} ${style["flex-col"]} ${style["gap-20"]}`}>
                    <span className={`${style["text-size-18"]} ${style["bold"]} ${style["letter-spacing-375"]}`}>CATEGORIES</span>
                    <ul className={`${style["flex"]} ${style["flex-col"]} ${style["gap-6"]}`}>
                        <li>Respository</li>
                        <li>Squirrel Documentation</li>
                        <li>Compendium</li>
                    </ul>
                </div>
                <div className={`${style["flex"]} ${style["flex-1"]} ${style["flex-col"]} ${style["gap-20"]}`}>
                    <span className={`${style["text-size-18"]} ${style["bold"]} ${style["letter-spacing-375"]}`}>QUICK LINKS</span>
                    <ul className={`${style["flex"]} ${style["flex-col"]} ${style["gap-6"]}`}>
                        <li>Configuration</li>
                        <li>VSLib Basics</li>
                        <li>Squirrel Syntax</li>
                        <li>Script Resources</li>
                    </ul>
                </div>
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

export default DashboardFooter;