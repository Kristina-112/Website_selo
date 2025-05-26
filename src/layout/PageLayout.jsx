import Header from "./Header.jsx";
import Footer from "./Footer";
import ScrollTopButton from "../shared/ScrollTopButton.jsx";

const PageLayout = ({ content }) => {
    return (
        <div className="layout">
            <Header />
            {content}
            <ScrollTopButton/>
            <Footer/>
        </div>
    );
};

export default PageLayout;