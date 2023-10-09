// hooks/useEditImage.tsx
import { useState } from 'react';
import { EditImageHooks } from '../interfaces/EditImageHooks';


export function useEditImage(images: string[], onUpdateImages: (updatedImages: string[]) => void): EditImageHooks {
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editedImages, setEditedImages] = useState<string[]>(images);
  const [imageToDeleteIndex, setImageToDeleteIndex] = useState<number | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean[]>(Array(images.length).fill(false));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = (index: number) => {
    setShowDelete(true);
    setImageToDeleteIndex(index);
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
    handleClose();
  };

  return {
    show,
    setShow,
    showDelete,
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
  };
}
