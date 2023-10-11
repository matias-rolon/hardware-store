import { useState } from 'react';
import { EditImageHooks } from '../interfaces/EditImageHooks';

export function useEditImage(images: string[], onUpdateImages: (updatedImages: string[]) => void): EditImageHooks {
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [editedImages, setEditedImages] = useState<string[]>(images);
    const [imageToDeleteIndex, setImageToDeleteIndex] = useState<number | null>(null);
    const [showEditModal, setShowEditModal] = useState<boolean[]>(Array(images.length).fill(false));
    const [newImage, setNewImage] = useState('');

    const handleClose = () => {
        setEditedImages(images);
        setShow(false);
    };

    const handleShow = () => setShow(true);

    const handleCloseAdd = () => setShowAdd(false);

    const handleShowAdd = () => setShowAdd(true);

    const handleCloseDelete = () => setShowDelete(false);

    const handleShowDelete = (index: number) => {
        setImageToDeleteIndex(index);
        setShowDelete(true);
    };

    const handleAddImage = (e: any) => {
        setNewImage(e.target.value);
    };

    const addImage = () => {
        const updatedImages = [...editedImages, newImage];
        const updatedShowEditModal = [...showEditModal, false];
        setEditedImages(updatedImages);
        setShowEditModal(updatedShowEditModal);
        handleCloseAdd();
    };

    const handleEditImage = (index: number, newImageUrl: string) => {
        const updatedImages = [...editedImages];
        updatedImages[index] = newImageUrl;
        setEditedImages(updatedImages);
    };

    const handleDeleteImage = () => {
        if (imageToDeleteIndex !== null) {
            const updatedImages = [...editedImages];
            updatedImages.splice(imageToDeleteIndex, 1);
            setEditedImages(updatedImages);
            setImageToDeleteIndex(null);
        }
        handleCloseDelete();
    };

    const handleSaveChanges = () => {
        onUpdateImages([...editedImages]);
        setShow(false);
    };

    return {
        show,
        setShow,
        showDelete,
        showAdd,
        setShowDelete,
        editedImages,
        setEditedImages,
        imageToDeleteIndex,
        setImageToDeleteIndex,
        showEditModal,
        setShowEditModal,
        handleClose,
        handleShow,
        handleCloseDelete,
        handleShowDelete,
        handleEditImage,
        handleDeleteImage,
        handleSaveChanges,
        handleAddImage,
        addImage,
        handleCloseAdd,
        handleShowAdd
    };
}
