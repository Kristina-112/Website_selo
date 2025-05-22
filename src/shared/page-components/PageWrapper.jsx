import {motion} from "framer-motion";
import {images} from "../../utils/themeContext.jsx";

const PageWrapper = ({pageClass, title, children}) => (
    <div className={pageClass}>
        <header className="page-wrapper">
            <img className="page-wrapper__background" src={images.static.bg_home} alt="фон"/>
            <h1 className="page-wrapper__title">{title}</h1>
        </header>
        <motion.div className="page-wrapper__container content__text"
                    initial={{opacity: 1, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                    viewport={{once: false}}>
            {children}
        </motion.div>
    </div>
);

export default PageWrapper;