import {Route, Routes} from 'react-router-dom';

import './styles/styles.sass'

import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import News from "./pages/News.jsx";

function App() {
    return (

        <Routes>

            <Route path="/" element={
               <PageLayout content={<Home/>} />
            } />

            <Route path="/news" element={
               <PageLayout content={<News/>} />
            } />

        </Routes>
    )
}

export default App;