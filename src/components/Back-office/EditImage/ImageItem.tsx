import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {ModalEdit} from './ModalEdit';
import {ModalDelete} from './ModalDelete';

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

            <ModalDelete handleCloseDelete={handleCloseDelete}
                handleDeleteImage={handleDeleteImage}
                handleShowDelete={handleShowDelete}
                showDeleteModal={showDeleteModal}/>

        </div>
    )
}
