import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/navbar.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import {NavDropdown} from './NavDropdown';
import {SearchNav} from './SearchNav';


export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-brand-container">
                        <a className="navbar-brand logo" href="#">AMK</a>
                        <a className="navbar-brand subtext with-line" href="#">S.R.L</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavDropdown/>
                            <NavDropdown/>
                            <NavDropdown/>
                            <NavDropdown/>
                            <NavDropdown/>

                        </ul>
                        <SearchNav/>
                        <ShoppingCartOutlinedIcon className='icon-shop'/>
                        <QuestionAnswerOutlinedIcon className='icon-help' />
                    </div>
                </div>
            </nav>
            <div className="sections">
                <NavDropdown/>
                <NavDropdown/>
                <NavDropdown/>
                <NavDropdown/>
                <NavDropdown/>
            </div>
        </>
    )
}
