import { MutableRefObject } from "react";

interface RefProps {
    refArray?: MutableRefObject<HTMLElement | null>[];
}

export default RefProps;