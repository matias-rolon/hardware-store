import { useNavigate } from 'react-router-dom';
import './styles/productCard.css'

interface Props {
    img: string;
    title: string;
    price: number
}

export const ProductCard = ({img, price, title}:Props) => {

    const navigation = useNavigate()

    return (
        <>
            <div className='product-card' onClick={ () => navigation(`/product/${title}`) }>
                <div className="contain-image">
                    <img className='product-image' src={img} alt=""/>
                </div>
                <div className="contain-title">
                    <span>{title}</span>
                </div>
                <span className='price'>${price}</span>
                <button className='product-button'>COMPRAR</button>
            </div>
        </>
    )
}
