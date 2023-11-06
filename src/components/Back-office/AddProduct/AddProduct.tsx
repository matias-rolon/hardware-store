import {Button, Modal} from "react-bootstrap";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {EditDescription} from '../EditDescription/EditDescription';
import {useAddDescription} from "../../../hooks/useAddProduct";
import { EditImage } from '../EditImage/EditImage';

interface Description {
    name: string;
    details: string;
    [key: string]: string;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    stock: number;
    category: string;
    deliveryTime: string;
    time?: number;
    images: string[];
    description: Description[];
}

interface Props {
    addProduct: (newProduct : Product) => void
}

export const AddProduct = ({addProduct} : Props) => {

    const {
        handleClose,
        handleShow,
        handelAdd,
        handleInputChange,
        show,
        showInput,
        product,
        handleTimeChange,
        onUpdateDescription,
        onUpdateImages
    } = useAddDescription({addProduct});

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
                            <input className='input-change' type="text" placeholder="Nombre"
                                onChange={
                                    (e) => handleInputChange(e, 'name')
                                }/>
                        </div>
                        <div className="section-price">
                            $<input className='input-change' type="number" placeholder="Precio"
                                onChange={
                                    (e) => handleInputChange(e, 'price')
                                }/>
                        </div>
                        <div className="section-stock">
                            <input className='input-change' type="text" placeholder="Stock"
                                onChange={
                                    (e) => handleInputChange(e, 'stock')
                                }/>
                        </div>
                        <div className='section-category'
                            onChange={
                                (e) => handleInputChange(e, 'category')
                        }>
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
                            {
                            showInput && (
                                <input type="number" className='input-day-reciber'
                                    defaultValue={0}
                                    onChange={
                                        (e) => handleTimeChange(e)
                                    }/>
                            )
                        }
                            <select className="select" id="delivery"
                                onChangeCapture={
                                    (e) => handleInputChange(e, 'deliveryTime')
                            }>
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
                                    <EditDescription sectionDetails={
                                            product.description
                                        }
                                        onUpdateDescription={
                                            onUpdateDescription
                                        }/>
                                </li>
                                <li>
                                    <EditImage images={product.images} onUpdateImages={onUpdateImages} />
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
                        onClick={handelAdd}>
                        Crear
                    </Button>
                </Modal.Footer>
            </Modal>

        </>


    )
}
