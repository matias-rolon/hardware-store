export interface EditImageHooks {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    showDelete: boolean;
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
    editedImages: string[];
    setEditedImages: React.Dispatch<React.SetStateAction<string[]>>;
    imageToDeleteIndex: number | null;
    setImageToDeleteIndex: React.Dispatch<React.SetStateAction<number | null>>;
    showEditModal: boolean[];
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean[]>>;
    handleClose: () => void;
    handleShow: () => void;
    handleCloseDelete: () => void;
    handleShowDelete: (index: number) => void;
    handleEditImage: (index: number, newImageUrl: string) => void;
    handleDeleteImage: () => void;
    handleSaveChanges: () => void;
  }
  