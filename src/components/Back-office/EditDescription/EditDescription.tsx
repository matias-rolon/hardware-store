import {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import { TableEdit } from "./TableEdit";

interface Props {
    sectionDetails: Details[]
}

interface Details {
    name: string,
    details: string;
}

export const EditDescription = ({sectionDetails}:Props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(sectionDetails);

    return (
        <>
            <button className="button-modal"
                onClick={handleShow}>
                Editar descripcion
            </button>

            <Modal show={show}
                onHide={handleClose}
                centered
                size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Editar descripción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TableEdit sectionDetails={sectionDetails} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary"
                        onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
