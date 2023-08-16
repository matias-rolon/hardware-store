import SearchIcon from '@mui/icons-material/Search';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../styles/navbar.css'



export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mi Tienda</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre nosotros</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu multi-column columns-2" aria-labelledby="navbarDropdown" id='listas'>
                                    <div className='row'>

                                        <div className="col-md-6">
                                            <li>
                                                <h6 className="dropdown-header">Indumentaria</h6>
                                                <a className="dropdown-item" href="#">Guantes</a>
                                                <a className="dropdown-item" href="#">Casco</a>
                                                <a className="dropdown-item" href="#">Zapatillas</a>
                                                <a className="dropdown-item" href="#">Delantal</a>
                                            </li>

                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <h6 className="dropdown-header">Herramientas</h6>
                                                <a className="dropdown-item" href="#">Martillo</a>
                                                <a className="dropdown-item" href="#">Destornillador</a>
                                                <a className="dropdown-item" href="#">Tester</a>
                                                <a className="dropdown-item" href="#">Pinzas</a>
                                            </li>

                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <h6 className="dropdown-header">Iluminación</h6>
                                                <a className="dropdown-item" href="#">Luces led</a>
                                                <a className="dropdown-item" href="#">Reflectores</a>
                                                <a className="dropdown-item" href="#">Instalacion</a>
                                            </li>

                                        </div>
                                        <div className="col-md-6">
                                            <li>
                                                <h6 className="dropdown-header">Maquinas electricas</h6>
                                                <a className="dropdown-item" href="#">Amoladora</a>
                                                <a className="dropdown-item" href="#">Caladora</a>
                                                <a className="dropdown-item" href="#">Lijadora</a>
                                                <a className="dropdown-item" href="#">Sierra circular</a>
                                                <a className="dropdown-item" href="#">Destornilladora electrica</a>
                                            </li>

                                        </div>

                                    </div>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex ms-auto">
                            <input className="search" placeholder="Buscar productos"/>
                            <button className="search-button" type="submit">
                                <SearchIcon/>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
