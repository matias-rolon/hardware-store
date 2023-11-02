import MoreVertIcon from '@mui/icons-material/MoreVert';
import {EditImage} from './EditImage/EditImage';
import {EditDescription} from './EditDescription/EditDescription';
import {useProductBackOffice} from '../../hooks/useProductBackOffice';
import {DeleteProduct} from './DeleteProduct';


interface Props {
    product: Product;
    onUpdateProduct: (id : number, updatedProduct : Product) => void;
    onDeleteProduct: (id: number) => void
}

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

export const ProductBackOffice = ({product, onUpdateProduct, onDeleteProduct} : Props) => {

    const {
        deliveryTime,
        time,
        name,
        price,
        stock,
        category,
        images
    } = product

    const {
        mostrarInput,
        handleInputChange,
        handleTimeChange,
        handleUpdateImages,
        handleUpdateDescriptions,
    } = useProductBackOffice(product, onUpdateProduct);


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
                    <select className="select" id="category"
                        defaultValue={category}>
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
                    mostrarInput && (
                        <input type="number" className='input-day-reciber'
                            defaultValue={
                                time || 0
                            }
                            onChange={
                                (e) => handleTimeChange(e)
                            }/>
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

                <div className='section-config'>
                    <button className="dropdown-section" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <MoreVertIcon className='icon-more'/>
                    </button>
                    <ul className="dropdown-menu dropdown-product-options">
                        <li>
                            <EditDescription onUpdateDescription={handleUpdateDescriptions}
                                sectionDetails={
                                    product.description
                                }/>
                        </li>
                        <li>
                            <EditImage images={images}
                                onUpdateImages={handleUpdateImages}/>
                        </li>
                        <li>
                            <DeleteProduct id={product.id} deleteProduct={onDeleteProduct}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
