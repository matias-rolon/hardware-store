import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../pages/Home';
import { InfoProduct } from '../pages/InfoProduct';
import { Login } from '../pages/Login';
import { BackOfficeHome } from '../pages/BackOfficeHome';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/product/:productId" element={<InfoProduct/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/back-office" element={<BackOfficeHome/>}/>
            </Routes>
        </BrowserRouter>
    );
}
