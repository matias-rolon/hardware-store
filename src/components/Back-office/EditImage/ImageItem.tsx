import {Button, Modal} from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    image: string;
    showEditModal: boolean;
    handleShowDelete: () => void;
    handleEditImage: (value : string) => void;
    handleShowEditModal: () => void;
    index: number;
}

export const ImageItem = ({
    image,
    showEditModal,
    handleShowDelete,
    handleEditImage,
    handleShowEditModal,

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
        </div>
    )
}
