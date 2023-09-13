import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ImageSelector } from "../components/ImageSelector";
import { TableDetailsProduct } from "../components/TableDetailsProduct";
import productos from "../data/products.json";
import "./styles/infoProduct.css";
export const InfoProduct = () => {
    
    const productId = useParams().productId;

    const product = productos.find(product => product.nombre === productId);

    return (
        <>
            <Navbar/>
            <div className="contain-product">
                <div className="product-info-card">
                    <div className="detail-container">
                        <ImageSelector images={product?.imagenes}/>
                        <div className="detials-product">
                            <h1 className="title-product">{product?.nombre}</h1>
                            <p>De:
                                <a href="/">Ferreteria Los Hermanos</a>
                            </p>
                            <p>Disponibe en:
                                <b>1 día</b>
                            </p>
                            <span className="price-product">${product?.precio}</span>
                            <div className="buttonsContainer">
                                <button className="buttonMinus">
                                    -
                                </button>
                                <div className="countLabel">1</div>
                                <button className="buttonAdd">
                                    +
                                </button>
                            </div>
                            <button className="button-buy">AÑADIR AL CARRITO</button>
                            <button className="button-favorite">GUARDAR EN FAVORITOS</button>
                        </div>
                    </div>
                    
                    {
                        product?.descripcion && product.descripcion.length > 0 ? (
                            <>
                                <span className="description-title">Detalles del producto</span>
                                <TableDetailsProduct sectionDetails={product.descripcion} />
                            </>
                        ) : null
                    }
                </div>

            </div>
        </>
    )
}
