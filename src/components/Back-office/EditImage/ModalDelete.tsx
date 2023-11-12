import {Modal, Button} from "react-bootstrap";

interface Props {
    showDeleteModal: boolean;
    handleShowDelete: () => void;
    handleCloseDelete: () => void;
    handleDeleteImage: () => void;
}

export const ModalDelete = ({handleCloseDelete, handleDeleteImage, handleShowDelete, showDeleteModal} : Props) => {
    return (
        <Modal show={showDeleteModal}
            onHide={handleShowDelete}
            centered
            backdrop='static'
            keyboard={false}>
            <Modal.Body>
                ¿Está seguro que desea eliminar esta imagen?
            </Modal.Body>

            <Modal.Footer>
                <Button variant='secondary'
                    onClick={handleCloseDelete}>
                    No
                </Button>
                <Button variant='primary'
                    onClick={handleDeleteImage}>
                    Sí
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
