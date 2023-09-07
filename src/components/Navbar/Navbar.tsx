import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/navbar.css';

import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {NavDropdown} from './NavDropdown';
import {SearchNav} from './SearchNav';


export const Navbar = () => {

    const navigation = useNavigate()

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-brand-container" onClick={ () => navigation('/') }>
                        <a className="navbar-brand logo" href="#">AMK SRL</a>
                        <a className="navbar-brand subtext with-line" href="#">FERRETERIA Y SEGURIDAD INDUSTRIAL</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavDropdown name='Home'/>
                            <NavDropdown name='Contactanos'/>
                            <NavDropdown name='Variable_def_1' dropdown={[]}/>
                            <NavDropdown name='Variable_def_2' dropdown={[]}/>
                        </ul>
                        <SearchNav/>
                        <ShoppingCartOutlinedIcon className='icon-shop'/>
                        <BookmarkBorderIcon className='icon-help' />
                    </div>
                </div>
            </nav>
            <div className="sections">
                <NavDropdown name='Home'/>
                <NavDropdown name='Contactanos'/>
                <NavDropdown name='Variable_def_1' dropdown={[]}/>
                <NavDropdown name='Variable_def_2' dropdown={[]}/>
            </div>
        </>
    )
}
