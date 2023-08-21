import './styles/productCard.css'

interface Props {
    img: string;
    title: string;
    price: string
}

export const ProductCard = ({img, price, title}:Props) => {
    return (
        <>
            <div className='product-card'>
                <div className="contain-image">
                    <img className='product-image' src={img} alt=""/>
                </div>
                <div className="contain-title">
                    <span>{title}</span>
                </div>
                <span className='price'>{price}</span>
                <button className='product-button'>COMPRAR</button>
            </div>
        </>
    )
}
