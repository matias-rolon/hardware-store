import {Button, Modal} from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {ModalEdit} from './ModalEdit';

interface Props {
    image: string;
    showEditModal: boolean;
    showDeleteModal: boolean;
    handleShowDelete: () => void;
    handleCloseDelete: () => void;
    handleDeleteImage: () => void;
    handleEditImage: (value : string) => void;
    handleShowEditModal: () => void;
    index: number;
}

export const ImageItem = ({
    image,
    showEditModal,
    showDeleteModal,
    handleShowDelete,
    handleDeleteImage,
    handleEditImage,
    handleShowEditModal,
    handleCloseDelete

} : Props) => {
    return (
        <div className='contain-button-edit'>
            <div className='icon-edit-image'
                onClick={handleShowDelete}>
                <DeleteIcon/>
            </div>
            <div className='icon-edit-image'
                onClick={handleShowEditModal}>
                <EditIcon/>
            </div>
            <img src={image}
                className='image-edit'
                alt=''/>

            <ModalEdit handleEditImage={handleEditImage}
                handleShowEditModal={handleShowEditModal}
                image={image}
                showEditModal={showEditModal}/>


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
        </div>
    )
}
