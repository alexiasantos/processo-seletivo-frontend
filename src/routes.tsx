import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Home from './pages/Home/index';
import Filmes from './pages/Filmes/index';
import Hqs from './pages/Hqs/index';

const PagesNavigation: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/filmes' element={<Filmes />} />
                <Route path='/hqs' element={<Hqs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PagesNavigation;
