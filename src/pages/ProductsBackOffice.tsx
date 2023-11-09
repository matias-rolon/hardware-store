import './styles/productsBackOffice.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import {ProductBackOffice} from '../components/Back-office/ProductBackOffice';
import SaveIcon from '@mui/icons-material/Save';
import {AddProduct} from '../components/Back-office/AddProduct/AddProduct';
import {useProductsBackOffice} from "../hooks/useProductsBackOffice";
import { useEffect } from 'react';

export const ProductsBackOffice = () => {

    const {
        searchTerm,
        products,
        getProducts,
        handleSearchChange,
        save,
        addProduct,
        filteredProducts,
        deleteProduct,
        updateProduct
    } = useProductsBackOffice();

    useEffect(() => {
        getProducts();
    }, [])
    


    return (
        <>
            <div className="contain-filters">
                <SearchIcon className='icon-search'/>
                <input type="text" className="filter-products" placeholder="Buscar productos"
                    value={searchTerm}
                    onChange={handleSearchChange}/>
                <button className='button-filter'>
                    <FilterListIcon/>
                    Filtrar
                </button>
                <button className='button-filter'
                    onClick={save}>
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
                        <AddProduct addProduct={addProduct}
                            products={products}/>
                    </div>
                </div>
                {
                filteredProducts.map((product) => (
                    <ProductBackOffice key={
                            product.id
                        }
                        onDeleteProduct={deleteProduct}
                        product={product}
                        onUpdateProduct={updateProduct}/>
                ))
            } </div>
        </>
    )
}
