
import { ReactSVGComponent } from "./left4scriptlogo";

export const MenuGrid: React.FC<ReactSVGComponent> = ({
    width, height, className="", fill="none"
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 35 35" fill={fill} xmlns="http://www.w3.org/2000/svg" className={`object-contain ${className}`}>
            <path d="M14.5833 4.375H4.375V14.5833H14.5833V4.375Z" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30.625 4.375H20.4167V14.5833H30.625V4.375Z" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M30.625 20.4167H20.4167V30.625H30.625V20.4167Z" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5833 20.4167H4.375V30.625H14.5833V20.4167Z" stroke="#F3F3F3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}