import {Navbar} from "../components/Navbar/Navbar"

import './styles/infoProduct.css'

export const InfoProduct = () => {
    return (
        <>
            <Navbar/>
            <div className="contain-product">
                <div className="product-info-card">
                    <div className="detail-container">
                        <div className="contain-image-product">
                            <img className='product-info-image' src="https://www.abrafersrl.com.ar/wp-content/uploads/25091-247x247.jpg" alt=""/>
                        </div>
                        <div className="detials-product">
                            <span className="title-product">TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U</span>
                            <span className="price-product">$34.316,31</span>
                            <div className="buttonsContainer">
                                <button className="buttonMinus" > - </button>
                                <div className="countLabel">1</div>
                                <button className="buttonAdd"> + </button>
                                <button className="button-buy">Comprar</button>
                             </div>
                        </div>
                    </div>
                    <span className="description-title">Descipción</span>
                    <p className="description-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam laborum non molestiae incidunt adipisci officia, culpa velit deleniti quaerat, nulla architecto, tenetur amet modi cumque aliquid similique placeat itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam exercitationem aspernatur ipsam laboriosam vitae explicabo, sequi animi quidem quia omnis dolore nihil fugiat earum consequuntur facilis, recusandae beatae laudantium eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, eius nulla. Possimus numquam accusamus iure quam itaque modi, odio consectetur repellendus, sunt aliquam consequuntur ullam saepe? Doloremque corporis quidem amet!</p>

                </div>

            </div>
        </>
    )
}
