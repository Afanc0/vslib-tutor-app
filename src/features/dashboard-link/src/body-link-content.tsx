import style from "./css/body-link.module.scss"

import GithubLogo from "./components/github-logo/githublogo";
import SquirrelLogo from "./components/SquirrelLogo";
import RedirectIcon from "./components/RedirectIcon";

import content from "../../../content-text.json";

import React from "react";


function BodyLinkContent() {

    return (
        <React.Fragment>
            <section className={`${style["content-color-apply"]} ${style["y-space-padding-124"]}`}>
                <div className={`${style["flex"]} ${style["flex-row"]} ${style["x-space-padding-96"]}`}>
                    <div className={`${style["flex"]} ${style["flex-1"]} ${style["justify-align-end"]}`}>
                        <div className={`${style["flex"]} ${style["flex-col"]} ${style["w-16"]} ${style["x-space-padding-64"]}`}>
                            <span id={style["text-color"]} className={`${style["text-size-14"]}`}>REPOSITORY</span>
                            <span className={`${style["text-size-40"]} ${style["margin-y-16"]} ${style["bold"]} ${style["line-height-1"]}`}>{content["LINK_CONTENT_1"]["title"]}</span>
                            <div className={style["margin-y-16"]}>
                                <span className={`${style["text-size-16"]} ${style["bold"]}`}>{content["LINK_CONTENT_1"]["description"]}</span>
                            </div>
                            <div>
                                <a href="https://github.com/L4D2Scripters/vslib" target="_blank" rel="noopener noreferrer">
                                    <button className={`${style["flex"]} ${style["justify-align-center"]} ${style["gap-8"]}`}>
                                        <RedirectIcon />
                                        View Repo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={`${style["flex-1"]} ${style["flex"]} ${style["justify-align-start"]}`}>
                        <GithubLogo className={`${style["x-space-padding-96"]}`}/>
                    </div>
                </div>
            </section>
            <section className={`${style["content-color-apply-2"]} ${style["y-space-padding-124"]}`}>
            <div className={`${style["flex"]} ${style["flex-row"]} ${style["x-space-padding-96"]}`}>
                <div className={`${style["flex-1"]} ${style["flex"]} ${style["justify-align-end"]}`}>
                    <SquirrelLogo className={`${style["x-space-padding-96"]}`} />
                </div>
                <div className={`${style["flex"]} ${style["flex-1"]} ${style["justify-align-start"]}`}>
                    <div className={`${style["flex"]} ${style["flex-col"]} ${style["w-16"]} ${style["x-space-padding-64"]}`}>
                        <span id={style["text-color"]} className={`${style["text-size-14"]}`}>SQUIRREL DOCUMENTATION</span>
                        <span className={`${style["text-size-40"]} ${style["margin-y-16"]} ${style["bold"]} ${style["line-height-1"]}`}>{content["LINK_CONTENT_2"]["title"]}</span>
                        <div className={style["margin-y-16"]}>
                            <span className={`${style["text-size-16"]} ${style["bold"]}`}>{content["LINK_CONTENT_2"]["description"]}</span>
                        </div>
                        <div>
                            <a href="http://squirrel-lang.org/squirreldoc/index.html" target="_blank" rel="noopener noreferrer">
                                <button  className={`${style["flex"]} ${style["justify-align-center"]}  ${style["gap-8"]}`}>
                                    <RedirectIcon />
                                    View Docs
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}

export default BodyLinkContent;