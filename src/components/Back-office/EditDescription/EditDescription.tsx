import {Button, Modal} from "react-bootstrap";
import {TableEdit} from "./TableEdit";
import {useEditDescription} from "../../../hooks/useEditDescription";
import {AddDescription} from './AddDescription';

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
        showAdd,
        handleShowAdd,
        handleCloseAdd,
        updatedDetails,
        handleSave,
        handleNameChangeAdd,
        handleDetailsChangeAdd,
        handleInputChange,
        handleDeleteDescription,
        handleSaveAdd,
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
                        onDeleteDescription={handleDeleteDescription}/>
                </Modal.Body>
                <Modal.Footer>
                    <AddDescription handleCloseAdd={handleCloseAdd}
                        handleShowAdd={handleShowAdd}
                        showAdd={showAdd}
                        handleNameChangeAdd={handleNameChangeAdd}
                        handleDetailsChangeAdd={handleDetailsChangeAdd}
                        handleSaveAdd={handleSaveAdd}/>
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
