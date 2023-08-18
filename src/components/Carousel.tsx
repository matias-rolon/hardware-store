import './styles/carousel.css'

export const Carousel = () => {
    return (

        <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.abrafersrl.com.ar/wp-content/uploads/slide-dewalt-abrafer-2-1536x288.jpg" alt="..."/></div>
                <div className="carousel-item">
                    <img src="https://www.abrafersrl.com.ar/wp-content/uploads/slide-bosch-abrafer-categorias-1-1536x288.jpg" className="d-block w-100" alt="..."/></div>
                <div className="carousel-item">
                    <img src="https://www.abrafersrl.com.ar/wp-content/uploads/slide-ezeta-abrafer-1536x288.jpg" className="d-block w-100" alt="..."/></div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <div className="circle">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </div>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <div className="circle">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </div>
            </button>
        </div>
    )
}
