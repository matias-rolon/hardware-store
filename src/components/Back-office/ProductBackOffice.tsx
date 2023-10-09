import {useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { EditImage } from './EditImage/EditImage';


interface Props {
    product: Product;
    onUpdateProduct: any;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    stock: number;
    category: string;
    deliveryTime: string;
    time?: number;
    state: string;
    images: string[];
}

export const ProductBackOffice = ({product, onUpdateProduct} : Props) => {

    const {
        id,
        deliveryTime,
        time,
        name,
        price,
        stock,
        category,
        state,
        images
    } = product

    const [mostrarInput, setMostrarInput] = useState(deliveryTime === 'dias-recibida');

    const handleInputChange = ({target} : any, value : string) => {

        setMostrarInput(target.value == 'dias-recibida');

        const updatedProduct = {
            ...product,
            [value]: target.value
        };
        onUpdateProduct(id, updatedProduct);
    };

    const handleTimeChange = ({target}: any) => {
        const updatedProduct = {
            ...product,
            time: target.value
        };
        onUpdateProduct(id, updatedProduct);
    }

    const handleUpdateImages = (updatedImages: string[]) => {
        // Actualiza el array de imágenes en el producto
        const updatedProduct = {
          ...product,
          images: updatedImages,
        };
        onUpdateProduct(id, updatedProduct);
      };


    return (
        <div>
            <div className="contain-result-filter">
                <div className="section-name">
                    <input className='input-change' type="text"
                        defaultValue={name}
                        onChange={
                            (e) => handleInputChange(e, 'name')
                        }/>
                </div>
                <div className="section-price">
                    $<input className='input-change' type="number"
                        defaultValue={price}
                        onChange={
                            (e) => handleInputChange(e, 'price')
                        }/>
                </div>
                <div className="section-stock">
                    <input className='input-change' type="text"
                        defaultValue={stock}
                        onChange={
                            (e) => handleInputChange(e, 'stock')
                        }/>
                </div>
                <div className='section-category'>
                    <select className="select" id="marca"  defaultValue={category}>
                        <option value="black-box">Black Box</option>
                        <option value="honda">Honda</option>
                        <option value="stanley">Stanley</option>
                        <option value="stihl">Stihl</option>
                        <option value="de-walt">De Walt</option>
                    </select>
                </div>

                <div className='section-delivery-time'>
                    {
                    mostrarInput && (
                        <input type="number" className='input-day-reciber' defaultValue={time || 0} onChange={(e) => handleTimeChange(e)} />
                    )
                }
                    <select className="select" id="delivery"
                        defaultValue={deliveryTime}
                        onChangeCapture={
                            (e) => handleInputChange(e, 'deliveryTime')
                    }>
                        <option value="entrega">Entrega inmediata, salvo venta</option>
                        <option value="consultar">Consultar</option>
                        <option value="dias-recibida">dias recibida v/ OC</option>
                    </select>
                </div>
                <div className='section-state' onChange={
                            (e) => handleInputChange(e, 'state')
                        }>
                    <select className='select' id="estado"  defaultValue={state}>
                        <option value="activo">Activo</option>
                        <option value="sin-stock">Sin stock</option>
                        <option value="en-pausa">En pausa</option>
                    </select>
                </div>
                <div className='section-config'>
                    <button className="dropdown-section" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <MoreVertIcon className='icon-more'/>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item dropdown-config" href="#">Editar descripcion</a>
                        </li>
                        <li>
                            <EditImage images={images} onUpdateImages={handleUpdateImages}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
