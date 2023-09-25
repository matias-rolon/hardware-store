import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../pages/Home';
import { InfoProduct } from '../pages/InfoProduct';
import { Login } from '../pages/Login';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/product/:productId" element={<InfoProduct/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}
