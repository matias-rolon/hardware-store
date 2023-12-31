import { useState } from "react";

export function Products(){
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Martillo Galponero O De Uña Mango Ergonomico De Calidad',
            price: "13000",
            stock: 230,
            category: 'electricidad',
            deliveryTime: 'dias-recibida',
            time:13,
            images: [
                "https://http2.mlstatic.com/D_NQ_NP_889029-MLA71032613845_082023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_855677-MLA70996248324_082023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_728534-MLA71032751753_082023-O.webp"
            ],
            description: [
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
                }, 
                {
                    name: "Origen",
                    details: "Brasil"
                }, 
                {
                    name: "Fabricante",
                    details: "3M"
                }
            ]
        },
        {
            id: 2,
            name: 'Destornillador Plano 3 X 75 Mm Tolsen 20016',
            price: "13000",
            stock: 230,
            category: 'herramientas',
            deliveryTime: 'entrega',
            images: [
                "https://http2.mlstatic.com/D_NQ_NP_715809-MLA46082506451_052021-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_775560-MLA46082514464_052021-O.webp",
                "https://static.vecteezy.com/system/resources/thumbnails/018/990/688/small/3d-black-rough-grunge-techno-abstract-background-overlap-layer-on-dark-space-with-red-lines-decoration-modern-graphic-design-element-cutout-style-concept-for-banner-flyer-card-or-brochure-cover-vector.jpg"
            ],
            description: [
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
                }, 
                {
                    name: "Origen",
                    details: "Brasil"
                }, 
                {
                    name: "Fabricante",
                    details: "3M"
                }
            ]
        },
        {
            id: 3,
            name: 'Kit Set X3 De Pinza Universal Y Alicate Reforzadas Aislada',
            price: "13000",
            stock: 230,
            category: 'servicios',
            deliveryTime: 'consultar',
            images: [
                "https://http2.mlstatic.com/D_NQ_NP_978385-MLA53475628237_012023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_698849-MLA53475610336_012023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_946883-MLA53475680104_012023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_900743-MLA53475525868_012023-O.webp",
                
            ],
            description: [
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
                }, 
                {
                    name: "Origen",
                    details: "Brasil"
                }, 
                {
                    name: "Fabricante",
                    details: "3M"
                }
            ]
        },
    ])

    return{
        products,
        setProducts
    }
}

