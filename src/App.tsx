import {Navbar} from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Carousel} from './components/Carousel';
import {ProductCard} from './components/ProductCard';
import './App.css'


function App() {

    return (
        <>
            <div className='contain-page'>
                <Navbar/>
                <Carousel/>
                <div className="productos">
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                <ProductCard img='https://www.abrafersrl.com.ar/wp-content/uploads/F616281-247x247.jpg' price='$32.911,50' title='TACO NYLON BALDE SA 6 + TORNILLOS 4.5X35MM TMF X 1000U'/>
                </div>
                
            </div>
        </>
    )
}

export default App
