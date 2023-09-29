import '../styles/navbarBackOffice.css'

export const NavbarBackOffice = () => {
    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='contain-logo'>
                    <a className="navbar-brand logo" href="#">AMK SRL</a>
                    <p className="navbar-brand subtext with-line">FERRETERIA Y SEGURIDAD INDUSTRIAL</p>
                </div>

                <div className="offcanvas offcanvas-start"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú Back-Office</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <a href="" className='item-navbar'>Productos</a>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}
