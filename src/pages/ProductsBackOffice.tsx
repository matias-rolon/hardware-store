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
            state: 'activo'
        },
        {
            id: 2,
            name: 'Taladro Impacto GSB 550 RE STD 550W 220V',
            price: "13000",
            stock: 230,
            category: 'Herramientas eléctricas',
            deliveryTime: 'entrega',
            state: 'sin-stock'
        },
        {
            id: 3,
            name: 'Taladro Impacto GSB 550 RE STD 550W 220V',
            price: "13000",
            stock: 230,
            category: 'Herramientas eléctricas',
            deliveryTime: 'consultar',
            state: 'en-pausa'
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
                // products.map((product) => (
                //     <ProductBackOffice product={product} 
                //     onUpdateProduct={(updatedProduct: any) => updateProduct(product.id, updatedProduct)}/>
                // ))

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
