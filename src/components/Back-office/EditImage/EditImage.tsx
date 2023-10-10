import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../styles/EditImage.css';
import {useEditImage} from '../../../hooks/useEditImage';
import {ImageItem} from './ImageItem';

interface Props {
    images: string[];
    onUpdateImages: (updatedImages : string[]) => void;
}

export const EditImage = ({images, onUpdateImages} : Props) => {

    const {
        show,
        showDelete,
        editedImages,
        showEditModal,
        handleClose,
        handleShow,
        handleShowDelete,
        handleEditImage,
        handleDeleteImage,
        handleSaveChanges,
        setShowEditModal,
        handleCloseDelete
    } = useEditImage(images, onUpdateImages);

    return (
        <>
            <button className='button-modal'
                onClick={handleShow}>
                Editar Imágenes
            </button>

            <Modal show={show}
                centered
                size='xl'
                onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='contain-images'>
                        {
                        editedImages.map((image, index) => (
                          <ImageItem
                key={index}
                image={image}
                showEditModal={showEditModal[index]}
                showDeleteModal={showDelete}
                handleShowDelete={() => handleShowDelete(index)}
                handleDeleteImage={() => handleDeleteImage()}
                handleEditImage={(value) => handleEditImage(index, value)}
                handleShowEditModal={() =>
                  setShowEditModal((prevState) =>
                    prevState.map((val, i) => (i === index ? !val : val))
                  )
                }
                handleCloseDelete={handleCloseDelete}
                index={index}/>
                        ))
                    } </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary'
                        onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant='primary'
                        onClick={handleSaveChanges}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
