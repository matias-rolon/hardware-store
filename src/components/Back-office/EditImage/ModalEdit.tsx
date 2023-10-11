import {Modal, Button} from "react-bootstrap";

interface Props {
    showEditModal: boolean;
    handleShowEditModal: () => void;
    image: string;
    handleEditImage: (value : string) => void;
}

export const ModalEdit = ({handleEditImage, handleShowEditModal, image, showEditModal} : Props) => {
    return (
        <Modal show={showEditModal}
            onHide={handleShowEditModal}
            centered
            backdrop='static'
            keyboard={false}>
            <Modal.Body>
                <input type='text' className='input-image'
                    defaultValue={image}
                    onChange={
                        (e) => handleEditImage(e.target.value)
                    }/>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='secondary'
                    onClick={handleShowEditModal}>
                    Cerrar
                </Button>
                <Button variant='primary'
                    onClick={handleShowEditModal}>
                    Actualizar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
