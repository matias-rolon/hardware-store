import { NavbarBackOffice } from "../components/Back-office/NavbarBackOffice"
import { ProductsBackOffice } from './ProductsBackOffice';

export const BackOfficeHome = () => {
    return (
        <div>
            <NavbarBackOffice/>
            <ProductsBackOffice/>
        </div>
    )
}
