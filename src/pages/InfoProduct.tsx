import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ImageSelector } from "../components/ImageSelector";
import { TableDetailsProduct } from "../components/TableDetailsProduct";
import { Products } from "../data/products";
import "./styles/infoProduct.css";
import { useProductsBackOffice } from "../hooks/useProductsBackOffice";
import { useEffect } from "react";
export const InfoProduct = () => {
    
    const productId = useParams().productId;

    const {products, getProducts} = useProductsBackOffice()


    const product = products.find(product => product.name === productId);

    useEffect(() => {
        getProducts();
      }, [])


    return (
        <>
            <Navbar/>
            <div className="contain-product">
                <div className="product-info-card">
                    <div className="detail-container">
                        <ImageSelector images={product?.images}/>
                        <div className="detials-product">
                            <h1 className="title-product">{product?.name}</h1>
                            <p>De:
                                <a href="/">Ferreteria Los Hermanos</a>
                            </p>
                            <p>Disponibe en:
                                <b>1 día</b>
                            </p>
                            <span className="price-product">${product?.price}</span>
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
                        product?.description && product.description.length > 0 ? (
                            <>
                                <span className="description-title">Detalles del producto</span>
                                <TableDetailsProduct sectionDetails={product.description} />
                            </>
                        ) : null
                    }
                </div>

            </div>
        </>
    )
}
