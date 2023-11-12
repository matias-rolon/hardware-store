import {useState} from "react";

interface Props {
    sectionDetails: Details[];
    onUpdateDescription: (updatedDescription : Details[]) => void;
}

interface Details {
    name: string;
    details: string;
    [key: string]: string;
}


export function useEditDescription({sectionDetails, onUpdateDescription} : Props) {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setUpdatedDetails(sectionDetails)
        setShow(true)
    };


    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [updatedDetails, setUpdatedDetails] = useState(sectionDetails);

    const [newDescription, setNewDescription] = useState({name: '', details: ''});

    const handleNameChangeAdd = (e : any) => {
        setNewDescription({
            ...newDescription,
            name: e.target.value
        });
    };

    const handleDetailsChangeAdd = (e : any) => {
        setNewDescription({
            ...newDescription,
            details: e.target.value
        });
    };


    const handleSave = () => {
        onUpdateDescription(updatedDetails);
        handleClose();
    };


    const handleInputChange = (index : number, field : string, value : string) => {
        const updated = [...updatedDetails];
        updated[index][field] = value;
        setUpdatedDetails(updated);
    };

    const handleDeleteDescription = (index : number) => {
        const updated = updatedDetails.filter((_, i) => i !== index);
        setUpdatedDetails(updated);
    };

    const handleSaveAdd = () => {
        setUpdatedDetails([
            ...updatedDetails,
            newDescription
        ]);

        handleCloseAdd();
    };


    return {
        show,
        updatedDetails,
        showAdd,
        handleNameChangeAdd,
        handleDetailsChangeAdd,
        handleClose,
        handleCloseAdd,
        handleShow,
        handleShowAdd,
        handleSave,
        handleSaveAdd,
        handleInputChange,
        handleDeleteDescription
    }
}
