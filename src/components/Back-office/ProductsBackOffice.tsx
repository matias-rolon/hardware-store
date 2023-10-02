import '../styles/productsBackOffice.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState} from 'react';

export const ProductsBackOffice = () => {
    const [seleccion, setSeleccion] = useState('');
    const [mostrarInput, setMostrarInput] = useState(false);

    const handleSelectChange = (event : any) => {
        const valorSeleccionado = event.target.value;
        setSeleccion(valorSeleccionado);

        if (valorSeleccionado === 'recibida') {
            setMostrarInput(true);
        } else {
            setMostrarInput(false);
        }
    };
    return (
        <>

            <div className="contain-filters">
                <SearchIcon className='icon-search'/>
                <input type="text" className='filter-products'/>
                <button className='button-filter'>
                    <FilterListIcon/>
                    Filtrar
                </button>
            </div>
            <div className='card-products-filter'>
                <div className='contain-products-filter'>
                    <div className='section-name'>NOMBRE</div>
                    <div className='section-price'>PRECIO</div>
                    <div className='section-stock'>STOCK</div>
                    <div className='section-category'>CATEGORIA</div>
                    <div className='section-category'>PLAZO DE ENTREGA</div>
                    <div className='section-state'>ESTADO</div>
                    <div className='section-config'>
                        <button className='button-create'>+</button>
                    </div>
                </div>
                <div>
                    <div className="contain-result-filter">
                        <div className="section-name">Taladro Impacto GSB 550 RE STD 550W 220V</div>
                        <div className="section-price">$13000</div>
                        <div className="section-stock">230</div>
                        <div className='section-delivery-time'>
                            <select className="select" id="marca">
                                <option value="black-box">Black Box</option>
                                <option value="honda">Honda</option>
                                <option value="stanley">Stanley</option>
                                <option value="stihl">Stihl</option>
                                <option value="de-walt">De Walt</option>
                            </select>
                        </div>

                        <div className='section-category'>
                            {
                            mostrarInput && (
                                <input type="text" className='input-day-reciber'/>
                            )
                        }
                            <select className="select" id="delivery"
                                onChangeCapture={
                                    (e) => handleSelectChange(e)
                            }>
                                <option value="entrega">Entrega inmediata, salvo venta</option>
                                <option value="consultar">Consultar</option>
                                <option value="recibida">dias recibida v/ OC</option>
                            </select>
                        </div>
                        <div className='section-state'>
                            <select className='select' id="estado">
                                <option value="usa">Activo</option>
                                <option value="canada">Sin stock</option>
                                <option value="canada">En pausa</option>
                            </select>
                        </div>
                        <div className="dropdown"></div>


                        <div className='section-config'>
                            <button className="dropdown-section" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <MoreVertIcon className='icon-more'/>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item dropdown-config" href="#">Editar descripcion</a>
                                </li>
                                <li>
                                    <a className="dropdown-item dropdown-config" href="#">Editar imagenes</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
