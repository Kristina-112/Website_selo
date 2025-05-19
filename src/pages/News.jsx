import {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {images} from "../utils/themeContext.jsx";
import Documents from "../components/Documents.jsx";

const News = () => {
    const documents = [
        {
            title: "Информационное письмо",
            date: "01.10.2023",
            path: "/files/informatsionnoye-pismo.pdf",
            type: "document",
        },
        {
            title: "Правила проживания и внутреннего распорядка в дачном поселке «Заповедное»",
            date: "01.03.2025",
            path: "/files/pravila-prozhivaniya-i-vnutrennego-rasporyadka-v-dachnom-posyolke.pdf",
            type: "document",
        },
    ];

    const filters = [
        {
            attribute: "all",
            text: "Показать всё",
        },
        {attribute: "document",
            text: "Документы",
        },
        {
            attribute: "news",
            text: "Новости",
        },
    ]

    const [selectedType, setSelectedType] = useState(["all"]);

    const filteredDocs =
        selectedType === "all"
            ? documents
            : documents.filter((doc) => doc.type === selectedType);

    return (
        <div className="news">
            <div className="header">
                <img className="header_background" src={images.static.bg_home}/>
                <p className="header_title">Новости</p>
            </div>

            <motion.div
                className="container d-column"
                initial={{opacity: 50, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8, ease: "easeOut"}}
                viewport={{once: false}}
            >
                <h1>ДОКУМЕНТЫ ДЛЯ<br/>
                    ОЗНАКОМЛЕНИЯ
                </h1>

                <div className="d-flex mt-5">
                    <div className="filter">
                        {filters.map(({attribute, text}) => (
                            <label className="radiobutton" htmlFor={attribute} key={attribute}>
                                <input
                                    type="radio"
                                    id={attribute}
                                    name="filter"
                                    value={attribute}
                                    checked={selectedType === attribute}
                                    onChange={() => setSelectedType(attribute)}
                                />
                                <span className="radio-circle"></span>
                                {text}
                            </label>
                        ))}
                    </div>
                    <Documents documents={filteredDocs}/>
                </div>
            </motion.div>
        </div>
    )
};

export default News;