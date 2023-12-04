import { Navbar } from '../components/Navbar/Navbar';
import { ProductCard } from '../components/ProductCard'
import { useProductsBackOffice } from "../hooks/useProductsBackOffice";
import { useEffect } from 'react';
import './styles/inventory.css'

export const Inventory = () => {

  const { products, getProducts } = useProductsBackOffice()

  useEffect(() => {
    getProducts();
  }, [])


  return (
    <>
      <Navbar />
      <div className='contain-inventory'>
        <div className='category'>
          <h5>Categorías</h5>
          <ul>
            <li>Buloneria</li>
            <li>Herrería</li>
            <li>Electricidad</li>
            <li>Seguridad</li>
          </ul>
        </div>
        <div className="products">
          {
            products.map(producto => (
              <ProductCard
                key={producto.id}
                price={producto.price}
                img={producto.images[0]}
                title={producto.name}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
