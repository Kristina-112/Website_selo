import {images} from "../utils/themeContext.jsx";

export default function LiBulletPoint({name, children}) {
    return (
        <li>
            <img className="bullet-point" src={images.static[name]} alt=""/>
            {children}
        </li>
    )
}