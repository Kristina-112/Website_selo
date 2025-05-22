import {Route, Routes} from 'react-router-dom';

import './styles/styles.sass'
import useResetScroll from "./utils/useResetScroll";

import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home.jsx";
import Documents from "./pages/Documents.jsx";
import HousePlans from "./pages/HousePlans.jsx";

function App() {
    useResetScroll();

    return (

        <Routes>

            <Route path="/" element={
               <PageLayout content={<Home/>} />
            } />

            <Route path="/house-plans" element={
               <PageLayout content={<HousePlans/>} />
            } />

            <Route path="/news" element={
               <PageLayout content={<Documents/>} />
            } />

        </Routes>
    )
}

export default App;