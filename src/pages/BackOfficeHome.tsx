import { NavbarBackOffice } from "../components/Back-office/NavbarBackOffice"
import { ProductsBackOffice } from '../components/Back-office/ProductsBackOffice';

export const BackOfficeHome = () => {
    return (
        <div>
            <NavbarBackOffice/>
            <ProductsBackOffice/>
        </div>
    )
}
