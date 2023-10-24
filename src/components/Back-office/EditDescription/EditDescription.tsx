import {Button, Modal} from "react-bootstrap";
import {TableEdit} from "./TableEdit";
import {useEditDescription} from "../../../hooks/useEditDescription";

interface Props {
    sectionDetails: Details[];
    onUpdateDescription: (updatedImages : Details[]) => void;
}

interface Details {
    name: string;
    details: string;
    [key: string]: string;
}

export const EditDescription = ({sectionDetails, onUpdateDescription} : Props) => {
    const {
        handleClose,
        handleShow,
        show,
        updatedDetails,
        handleSave,
        handleInputChange,
        handleDeleteDescription,
    } = useEditDescription({sectionDetails, onUpdateDescription});

    return (
        <>
            <button className="button-modal"
                onClick={handleShow}>
                Editar descripción
            </button>

            <Modal show={show}
                onHide={handleClose}
                centered
                size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Editar descripción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <TableEdit sectionDetails={updatedDetails}
                        onInputChange={handleInputChange}
                        onDeleteDescription={handleDeleteDescription}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary"
                        onClick={handleSave}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
