import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {images} from "../utils/themeContext.jsx";

const News = () => {
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


                <div className="d-flex ">
                    <div className="filter">
                        <p className="filter_title">сортировать</p>

                        <div className="filter_categories">
                            <label htmlFor="all">
                                <input type="checkbox" id="all" name="all" value="all"/>
                                <div className="filter_checkbox"></div>
                                Показать всё
                            </label>
                            <label htmlFor="news">
                                <input type="checkbox" id="news" name="news" value="news"/>
                                <div className="filter_checkbox"></div>
                                Новости
                            </label>
                            <label htmlFor="documents">
                                <input type="checkbox" id="documents" name="documents" value="documents"/>
                                <div className="filter_checkbox"></div>
                                Документы
                            </label>
                        </div>
                    </div>

                    <div className="documents">
                        <div className="document">
                            <img src={images.static.file}/>
                            <a href="/files/informatsionnoye-pismo.pdf"/>
                        </div>
                        <div className="document">
                            <img src={images.static.file}/>
                            <a href="/files/informatsionnoye-pismo.pdf"/>
                        </div>
                        <div className="document">
                            <img src={images.static.file}/>
                            <a href="/files/informatsionnoye-pismo.pdf"/>
                        </div>
                        <div className="document">
                            <img src={images.static.file}/>
                            <a href="/files/informatsionnoye-pismo.pdf"/>
                        </div>
                        <div className="document">
                            <img src={images.static.file}/>
                            <a href="/files/informatsionnoye-pismo.pdf"/>
                        </div>
                        <div className="document">
                            <img src={images.static.file}/>
                            <a href="/files/informatsionnoye-pismo.pdf"/>
                        </div>
                    </div>
                </div>


            </motion.div>
        </div>
    )
};

export default News;