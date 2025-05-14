import Header from "./Header.jsx";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const PageLayout = ({ content }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Header />
            {content}
            <Footer/>
        </div>
    );
};

export default PageLayout;