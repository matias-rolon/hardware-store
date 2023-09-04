import {ProductCard} from '../components/ProductCard'
import {Carousel} from '../components/Carousel'
import {Navbar} from '../components/Navbar/Navbar'

import Productos from "../data/products.json";

import './styles/home.css'
import { useState } from 'react';

export const Home = () => {

    const [products] = useState(Productos)

    return (
        <div className='contain-page'>
            <Navbar/>
            <Carousel/>
            <div className="productos">                
                {
                    products.map( producto => (
                        <ProductCard 
                            price={producto.precio} 
                            img={producto.imagenes[0]} 
                            title={producto.nombre} 
                        />
                    ) )
                }
            </div>

        </div>
    )
}
