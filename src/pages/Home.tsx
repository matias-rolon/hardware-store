import {ProductCard} from '../components/ProductCard'
import {Carousel} from '../components/Carousel'
import {Navbar} from '../components/Navbar/Navbar'
import { useProductsBackOffice } from "../hooks/useProductsBackOffice";
import './styles/home.css'

import { Products } from "../data/products";
import { useEffect } from 'react';

export const Home = () => {

    const {products, getProducts} = useProductsBackOffice()

    useEffect(() => {
      getProducts();
    }, [])
    

    return (
        <div className='contain-page'>  
            <Navbar/>
            <Carousel/>
            <div className="productos">                
                {
                    products.map( producto => (
                        <ProductCard
                            key={producto.id}
                            price={producto.price} 
                            img={producto.images[0]} 
                            title={producto.name} 
                        />
                    ) )
                }
            </div>

        </div>
    )
}
