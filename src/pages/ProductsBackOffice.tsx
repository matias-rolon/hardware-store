import './styles/productsBackOffice.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {Product, ProductBackOffice} from '../components/Back-office/ProductBackOffice';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

export const ProductsBackOffice = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Taladro Impacto GSB 550 RE STD 550W 220V',
            price: "13000",
            stock: 230,
            category: 'honda',
            deliveryTime: 'dias-recibida',
            time:13,
            state: 'activo',
            images: [
                "https://http2.mlstatic.com/D_NQ_NP_889029-MLA71032613845_082023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_855677-MLA70996248324_082023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_728534-MLA71032751753_082023-O.webp"
            ],
        },
        {
            id: 2,
            name: 'Taladro Impacto GSB 550 RE STD 550W 220V',
            price: "13000",
            stock: 230,
            category: 'Herramientas eléctricas',
            deliveryTime: 'entrega',
            state: 'sin-stock',
            images: [
                "https://http2.mlstatic.com/D_NQ_NP_715809-MLA46082506451_052021-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_775560-MLA46082514464_052021-O.webp",
                "https://static.vecteezy.com/system/resources/thumbnails/018/990/688/small/3d-black-rough-grunge-techno-abstract-background-overlap-layer-on-dark-space-with-red-lines-decoration-modern-graphic-design-element-cutout-style-concept-for-banner-flyer-card-or-brochure-cover-vector.jpg"
            ],
        },
        {
            id: 3,
            name: 'Taladro Impacto GSB 550 RE STD 550W 220V',
            price: "13000",
            stock: 230,
            category: 'Herramientas eléctricas',
            deliveryTime: 'consultar',
            state: 'en-pausa',
            images: [
                "https://http2.mlstatic.com/D_NQ_NP_978385-MLA53475628237_012023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_698849-MLA53475610336_012023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_946883-MLA53475680104_012023-O.webp",
                "https://http2.mlstatic.com/D_NQ_NP_900743-MLA53475525868_012023-O.webp",
                
            ],
        },
    ])

    const updateProduct = (id:number, updatedProduct:Product) => {
        const updatedProducts = [...products];
      
        const index = updatedProducts.findIndex((product) => product.id === id);
      
        if (index !== -1) {
          updatedProducts[index] = updatedProduct;
          setProducts(updatedProducts);
        }
      };
      

      const mostrar = () => {
        console.log(products);
      }

    return (
        <>
            <div className="contain-filters">
                <SearchIcon className='icon-search'/>
                <input type="text" className='filter-products'/>
                <button className='button-filter'>
                    <FilterListIcon/>
                    Filtrar
                </button>
                <button className='button-filter' onClick={mostrar}>
                    <SaveIcon/>
                    Guardar
                </button>
            </div>
            <div className='card-products-filter'>
                <div className='contain-products-filter'>
                    <div className='section-name'>NOMBRE</div>
                    <div className='section-price'>PRECIO</div>
                    <div className='section-stock'>STOCK</div>
                    <div className='section-category'>CATEGORIA</div>
                    <div className='section-category'>PLAZO DE ENTREGA</div>
                    <div className='section-state'>ESTADO</div>
                    <div className='section-config'>
                        <button className='button-create'>+</button>
                    </div>
                </div>
                {

                products.map( product => {
                    return <ProductBackOffice 
                    key={product.id} 
                    product={product}
                    onUpdateProduct={updateProduct}
                    />
                })
            }
            </div>
        </>
    )
}
