
import React from "react";
import content from "../../../../../../lesson-post-content.json"

import style from "../../css/lesson.module.scss"

type ContentKey = typeof content;

interface TextSection {
    lessonId: keyof typeof content | undefined;
    variant?:  "regular" | "with-image";
    block?: keyof ContentKey[keyof typeof content]["sections"];
}

const TextSection: React.FC<TextSection> = ({
    lessonId,
    variant="regular",
    block
}) => {

    if (variant !== "regular" && block === undefined) {
        return <p className={`${style["text-black"]} ${style["text-size-16"]}`}>ERROR</p>
    }

    const isValidUserId = lessonId !== undefined && lessonId in content;
    if (!isValidUserId) {
        return (
            <div className={`${style["flex"]} ${style["justify-align-center"]} ${style["min-h-70"]} ${style["text-black"]} ${style["bg-white"]}`}>
                Not Found!
            </div>
        )
    }

    if (variant === "regular") {
        return (
            <div className={style["x-space-padding-16"]}>
                <div className={`${style["flex"]} ${style["justify-align-center"]}`}>
                    <div className={style["max-w-70"]}>
                        <h3 className={`${style["text-black"]} ${style["text-size-16"]}`}>{content[lessonId]["section-caution"]}</h3>
                    </div>
                </div>
            </div>
        )
    }
    
    const isValidBlockId = block !== undefined && block in content[lessonId]["sections"]
    if (!isValidBlockId) {
        return (
            <div className={`${style["flex"]} ${style["justify-align-center"]} ${style["min-h-70"]} ${style["text-black"]} ${style["bg-white"]}`}>
                Block Not Found!
            </div>
        )
    }

    const section = content[lessonId]["sections"][block]

    if (variant === "with-image") {
        return (
            <React.Fragment>
                <div className={style["x-space-padding-16"]}>
                    <div className={`${style["flex"]} ${style["flex-col"]} ${style["justify-align-center"]} ${style["gap-10"]}`}>
                        <div className={`${style["flex"]} ${style["flex-col"]} ${style["justify-align-center"]} ${style["max-w-50"]}`}>
                            <img 
                                className={`${style["w-full"]}`} 
                                src={section["url"]}
                            />
                            <p className={`${style["text-gray"]} ${style["text-size-14"]}`}>{section["image-text"]}</p>
                        </div>
                        <div className={style["max-w-70"]}>
                            <p className={`${style["text-black"]} ${style["text-size-16"]}`}>{section["text"]}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
 
}

export { TextSection }