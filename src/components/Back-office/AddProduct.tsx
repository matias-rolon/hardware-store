import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const AddProduct = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='button-create'
                onClick={handleShow}>+</button>

            <Modal show={show}
                centered
                size="xl"
                onHide={handleClose}>

                <Modal.Body>
                    <div className="contain-result-filter">
                        <div className="section-name">
                            <input className='input-change' type="text" placeholder="Nombre"/>
                        </div>
                        <div className="section-price">
                            $<input className='input-change' type="number" placeholder="Precio"/>
                        </div>
                        <div className="section-stock">
                            <input className='input-change' type="text" placeholder="Stock"/>
                        </div>
                        <div className='section-category'>
                            <select className="select" id="category">
                                <option value="soldadura">Soldadura</option>
                                <option value="herramientas">Herramientas</option>
                                <option value="construccion">Construcción</option>
                                <option value="electricidad">Electricidad</option>
                                <option value="seguridad">Seguridad</option>
                                <option value="electricidad">Electronica</option>
                                <option value="servicios">Servicios</option>
                            </select>
                        </div>

                        <div className='section-delivery-time'>

                            <select className="select" id="delivery">
                                <option value="entrega">Entrega inmediata, salvo venta</option>
                                <option value="consultar">Consultar</option>
                                <option value="dias-recibida">dias recibida v/ OC</option>
                            </select>
                        </div>

                        <div className='section-config'>
                            <button className="dropdown-section" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <MoreVertIcon className='icon-more'/>
                            </button>
                            <ul className="dropdown-menu dropdown-product-options">
                                <li>
                                    <button className="button-modal">
                                        Añadir descripción
                                    </button>
                                </li>
                                <li>
                                    <button className="button-modal">
                                        Añadir imagenes
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary"
                        onClick={handleClose}>
                        Crear
                    </Button>
                </Modal.Footer>
            </Modal>

        </>


    )
}
