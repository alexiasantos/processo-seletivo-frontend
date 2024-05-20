import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import Home from './pages/Home/index'

const PagesNavigation: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PagesNavigation;
