import {Carousel} from '../components/Carousel'
import {Navbar} from '../components/Navbar/Navbar'
import './styles/home.css'

export const Home = () => {

    

    return (
        <div className='contain-page'>  
            <Navbar/>
            <Carousel/>
            <div className='contain-about-us'>
                <h2>¡Acerca de nosotros!</h2>
                <p>AMK surge para posicionarse como la ferretería de confianza de la industria. Ofrecemos 
                    soluciones personalizadas y productos de calidad para tus proyectos y todo el desarrollo de tus actividades. Nuestro equipo 
                    capacitado está listo para brindarte asesoramiento y servicio excepcional. </p>
                    <p>En AMK creemos que la velocidad y calidad de las respuestas son pilares que hacen más llevaderas los procesos.</p>
            </div>

        </div>
    )
}
