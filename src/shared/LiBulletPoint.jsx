import {images} from "../utils/themeContext.jsx";

export default function LiBulletPoint({imageKey, children}) {
    return (
        <li>
            <img className="bullet-point" src={images.static[imageKey]} alt=""/>
            {children}
        </li>
    )
}