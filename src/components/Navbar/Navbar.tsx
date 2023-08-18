import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/navbar.css'
import {NavItems} from './NavItems';
import {NavDropdown} from './NavDropdown';
import {SearchNav} from './SearchNav';


export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mi Tienda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavItems/>
                            <NavDropdown/>
                        </ul>
                        <SearchNav/>
                    </div>
                </div>
            </nav>
        </>
    )
}
