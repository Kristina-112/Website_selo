import {images} from "../utils/themeContext.jsx";

export default function BulletPoint({name, text}) {
    return (
        <li>
            <img className="bullet-point" src={images.static[name]} alt=""/>
            {text}
        </li>
    )
}