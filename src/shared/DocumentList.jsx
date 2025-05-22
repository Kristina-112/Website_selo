import {useContext} from "react";
import {images, ThemeContext} from "../utils/themeContext.jsx";

const DocumentList = ({documents}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="documents-list">
            {documents.slice().reverse().map(({title, date, path}, index) => (
                <div key={index} className="document">
                    <img src={images.static.file}/>
                    <div className="d-column mr-2">
                        <p>{title}</p>
                        <p className="document__date">{date}</p>
                    </div>
                    <a href={path} target="_blank" rel="noopener noreferrer">
                        <img src={images[theme].download} alt="download icon"/>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default DocumentList;