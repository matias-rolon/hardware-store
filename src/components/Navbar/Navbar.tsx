import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/navbar.css';

import { useNavigate } from 'react-router-dom';
import {NavDropdown} from './NavDropdown';
import {SearchNav} from './SearchNav';
import logo from "../../assets/logo.jpg";


export const Navbar = () => {

    const navigation = useNavigate()

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid container-fluid-home">
                <div className="navbar-brand-container" onClick={ () => navigation('/') }>
                        <img src={logo} className="img-logo" alt="" />
                    </div>
                    <div className='search-pc'>
                        <SearchNav/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    

                    <div className="offcanvas-body">
                        <p>Pedidos especiales</p>
                        <p>Pedidos encargo</p>
                        <p>Urgencias</p>
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavDropdown name='Nosotros' href='#'/>
                            <NavDropdown name='Catalogo' href='/catalogo'/>
                            <NavDropdown name='Servicios' dropdown={[]} href='#'/>
                            <NavDropdown name='Consultas' dropdown={[]} href='#'/>
                            <NavDropdown name='Contacto' dropdown={[]} href='#'/>
                        </ul>
                        <div className='search-responsive'>
                            <SearchNav/>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </nav>
            <div className="sections">
                <NavDropdown name='Nosotros' href='#'/>
                <NavDropdown name='Catalogo' href="/catalogo"/>
                <a href="/catalogo">catalogo</a>
                <NavDropdown name='Servicios' dropdown={[]} href='#'/>
                <NavDropdown name='Consultas' dropdown={[]} href='#'/>
                <NavDropdown name='Contacto' dropdown={[]} href='#'/>
            </div>
        </>
    )
}
