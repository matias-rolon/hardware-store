import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import '../../styles/EditImage.css';
import { useEditImage } from '../../../hooks/useEditImage';

interface Props {
  images: string[];
  onUpdateImages: (updatedImages: string[]) => void;
}

export const EditImage = ({ images, onUpdateImages }: Props) => {

  const {
    show,
    showDelete,
    editedImages,
    showEditModal,
    handleClose,
    handleShow,
    handleCloseDelete,
    handleShowDelete,
    handleEditImage,
    handleDeleteImage,
    handleSaveChanges,
    setShowEditModal,
  } = useEditImage(images, onUpdateImages);

    return (
      <>
        <button className='button-modal' onClick={handleShow}>
          Editar Imágenes
        </button>
  
        <Modal show={show} centered size='xl' onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='contain-images'>
              {editedImages.map((image, index) => (
                <div key={index} className='contain-button-edit'>
                  <div className='icon-edit-image' onClick={() => handleShowDelete(index)}>
                    <DeleteIcon />
                  </div>
                  <div className='icon-edit-image' onClick={() => setShowEditModal(prevState => prevState.map((val, i) => i === index ? !val : val))}>
                    <EditIcon />
                  </div>
                  <img src={image} className='image-edit' alt='' />
  
                  <Modal
                    show={showEditModal[index]}
                    onHide={() => setShowEditModal(prevState => prevState.map((val, i) => i === index ? !val : val))}
                    centered
                    backdrop='static'
                    keyboard={false}
                  >
                    <Modal.Body>
                      <input
                        type='text'
                        className='input-image'
                        defaultValue={image}
                        onChange={(e) => handleEditImage(index, e.target.value)}
                      />
                    </Modal.Body>
  
                    <Modal.Footer>
                      <Button variant='secondary' onClick={() => setShowEditModal(prevState => prevState.map((val, i) => i === index ? !val : val))}>
                        Cerrar
                      </Button>
                      <Button variant='primary' onClick={() => setShowEditModal(prevState => prevState.map((val, i) => i === index ? !val : val))}>
                        Actualizar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              ))}
            </div>
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' onClick={handleSaveChanges}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
  
        <Modal
          show={showDelete}
          onHide={handleCloseDelete}
          centered
          backdrop='static'
          keyboard={false}
        >
          <Modal.Body>
            ¿Está seguro que desea eliminar esta imagen?
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseDelete}>
              No
            </Button>
            <Button variant='primary' onClick={handleDeleteImage}>
              Sí
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
