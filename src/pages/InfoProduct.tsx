import {Navbar} from "../components/Navbar/Navbar"

import './styles/infoProduct.css'
import {TableDetailsProduct} from '../components/TableDetailsProduct';
import {useState} from "react";
import {ImageSelector} from '../components/ImageSelector';

export const InfoProduct = () => {

    const [first] = useState([
        {
            name: "Tipo de producto",
            details: "Destornilladores para golpe"
        },
        {
            name: "Contenido",
            details: "3 destornilladores planos y 3 destornilladores philiips"
        },
        {
            name: "Certificación",
            details: "Norma IRAM 4126-1:99 Certificado N° 00411-1-1PROP emitido por el CIN  TRA"
        },
        {
            name: "Modelo",
            details: "Taladro Impacto GSB 550 RE STD 550W 220V"
        }, {
            name: "Origen",
            details: "Brasil"
        }, {
            name: "Fabricante",
            details: "3M"
        }
    ])


    const images = ["https://http2.mlstatic.com/D_NQ_NP_889029-MLA71032613845_082023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_855677-MLA70996248324_082023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_728534-MLA71032751753_082023-O.webp",  "https://http2.mlstatic.com/D_NQ_NP_889029-MLA71032613845_082023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_855677-MLA70996248324_082023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_728534-MLA71032751753_082023-O.webp"];

    return (
        <>
            <Navbar/>
            <div className="contain-product">
                <div className="product-info-card">
                    <div className="detail-container">
                        <ImageSelector images={images}/>
                        <div className="detials-product">
                            <h1 className="title-product">TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U</h1>
                            <p>De:
                                <a href="/">Ferreteria Los Hermanos</a>
                            </p>
                            <p>Disponibe en:
                                <b>1 día</b>
                            </p>
                            <span className="price-product">$34.316,31</span>
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
                    <span className="description-title">Detalles del producto</span>
                    <TableDetailsProduct sectionDetails={first}/>
                </div>

            </div>
        </>
    )
}
