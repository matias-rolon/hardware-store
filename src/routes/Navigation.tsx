import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from '../pages/Home';
import { InfoProduct } from '../pages/InfoProduct';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/infoProduct" element={<InfoProduct/>}/>
            </Routes>
        </BrowserRouter>
    );
}
