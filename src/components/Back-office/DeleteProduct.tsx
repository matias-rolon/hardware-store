import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

interface Props {
    deleteProduct: (id: string) => void
    id:string;
}

export const DeleteProduct = ({deleteProduct, id} : Props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <button className="button-modal"
                onClick={handleShow}>
                Eliminar
            </button>

            <Modal show={show}
                centered
                onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>¿Seguro que desea eliminar este producto?</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="danger"
                        onClick={
                            () => {
                                deleteProduct(id);
                                handleClose();
                            }
                    }>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
