import {Route, Routes} from 'react-router-dom';

import './styles/styles.sass'

import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";

function App() {
    return (

        <Routes>

            <Route path="/" element={
               <PageLayout content={<Home/>} />
            } />

        </Routes>
    )
}

export default App;