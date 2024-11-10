import React, { FC, LegacyRef } from "react"
import RedirectIcon from "../../../../../features/dashboard-link/src/components/RedirectIcon";

import style from "../../css/dashboard.module.scss"

interface FeatureBlock {
    contentType: string;
    contentTitle: string;
    contentDescription: string;
    buttonTitle: string;
    featureBlockRef?: LegacyRef<HTMLElement> | undefined;
    contentSvg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    contentLink: string;
    panelColor: string;
    variant?: boolean;
}

const FeatureBlock: FC<FeatureBlock> = ({
    contentType,
    contentTitle,
    contentDescription,
    buttonTitle,
    featureBlockRef,
    contentSvg: ContentSvg,
    contentLink,
    panelColor,
    variant=false
}) => {
    return (
        <section ref={featureBlockRef} className={`${style[panelColor]} ${style["y-space-padding-124"]}`}>
            <div className={`${style["flex"]} ${style["justify-align-center"]}`}>
                <div className={`${style["flex"]} ${style["flex-wrap"]} ${style["justify-align-center"]} ${style["gap-16"]}  ${style["flex-row"]}`}>
                    {variant ? ( 
                        <React.Fragment>
                            <div className={`${style["flex"]}`}>
                                <div className={`${style["flex"]} ${style["flex-col"]} ${style["max-w-16"]} ${style["x-space-padding-64"]}`}>
                                    <span id={style["text-color"]} className={`${style["text-size-14"]}`}>{contentType}</span>
                                    <span className={`${style["text-size-40"]} ${style["text"]} ${style["margin-y-16"]} ${style["bold"]} ${style["line-height-1"]}`}>{contentTitle}</span>
                                    <div className={style["margin-y-16"]}>
                                        <span className={`${style["text-size-16"]} ${style["text"]} ${style["bold"]}`}>{contentDescription}</span>
                                    </div>
                                    <div>
                                        <a href={contentLink} target="_blank" rel="noopener noreferrer">
                                            <button className={`${style["flex"]} ${style["justify-align-center"]} ${style["gap-8"]}`}>
                                                <RedirectIcon />
                                                {buttonTitle}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${style["flex"]} ${style["justify-align-center"]}`}>
                                <ContentSvg className={style["svg-component-size"]}/>
                            </div>
                        </React.Fragment>
                    ): (
                        <React.Fragment>
                            <div className={` ${style["flex"]} ${style["justify-align-center"]}`}>
                                <ContentSvg className={style["svg-component-size"]}/>
                            </div>
                            <div className={`${style["flex"]}`}>
                                <div className={`${style["flex"]} ${style["flex-col"]} ${style["max-w-16"]} ${style["x-space-padding-64"]}`}>
                                    <span id={style["text-color"]} className={`${style["text-size-14"]}`}>{contentType}</span>
                                    <span className={`${style["text-size-40"]} ${style["text"]} ${style["margin-y-16"]} ${style["bold"]} ${style["line-height-1"]}`}>{contentTitle}</span>
                                    <div className={style["margin-y-16"]}>
                                        <span className={`${style["text-size-16"]} ${style["text"]} ${style["bold"]}`}>{contentDescription}</span>
                                    </div>
                                    <div>
                                        <a href={contentLink} target="_blank" rel="noopener noreferrer">
                                            <button className={`${style["flex"]} ${style["justify-align-center"]} ${style["gap-8"]}`}>
                                                <RedirectIcon />
                                                {buttonTitle}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FeatureBlock