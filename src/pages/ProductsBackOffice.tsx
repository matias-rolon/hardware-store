import './styles/productsBackOffice.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {Product, ProductBackOffice} from '../components/Back-office/ProductBackOffice';
import SaveIcon from '@mui/icons-material/Save';
import {Products} from "../data/products";
import {AddProduct} from '../components/Back-office/AddProduct/AddProduct';
import { useState } from 'react';

export const ProductsBackOffice = () => {

    const {products, setProducts} = Products();

    const [searchTerm, setSearchTerm] = useState(''); 
    const handleSearchChange = (e:any) => {
        setSearchTerm(e.target.value);
    };
    const filteredProducts = products.filter((product) => {
        // Filtra los productos que contienen el término de búsqueda en su nombre
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const updateProduct = (id : number, updatedProduct : Product) => {
        const updatedProducts = [...products];

        const index = updatedProducts.findIndex((product) => product.id === id);

        if (index !== -1) {
            updatedProducts[index] = updatedProduct;
            setProducts(updatedProducts);
        }
    };

    const deleteProduct = (id : number) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    }

    const addProduct = (newProduct:Product) => { 
        const updatedProducts = [...products];
        updatedProducts.push(newProduct);
        setProducts(updatedProducts);
    }


    const mostrar = () => {
        console.log(products);
    }

    return (
        <>
            <div className="contain-filters">
                <SearchIcon className='icon-search'/>
                <input
                    type="text"
                    className="filter-products"
                    placeholder="Buscar productos"
                    value={searchTerm}
                    onChange={handleSearchChange} // Manejar cambios en el input
                />
                <button className='button-filter'>
                    <FilterListIcon/>
                    Filtrar
                </button>
                <button className='button-filter'
                    onClick={mostrar}>
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
                    <div className='section-config'>
                        <AddProduct addProduct={addProduct} products={products}/>
                    </div>
                </div>
                {filteredProducts.map((product) => (
                    <ProductBackOffice
                        key={product.id}
                        onDeleteProduct={deleteProduct}
                        product={product}
                        onUpdateProduct={updateProduct}
                    />
                ))}
                </div>
        </>
    )
}
