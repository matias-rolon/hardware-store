import {useState} from "react";

interface Props {
    sectionDetails: Details[];
    onUpdateDescription: (updatedImages : Details[]) => void;
}

interface Details {
    name: string;
    details: string;
    [key: string]: string;
}


export function useEditDescription({sectionDetails, onUpdateDescription} : Props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [updatedDetails, setUpdatedDetails] = useState(sectionDetails);

    const handleSave = () => {
        onUpdateDescription(updatedDetails);
        handleClose();
    };


    const handleInputChange = (index : number, field : string, value : string) => {
        const updated = [...updatedDetails];
        updated[index][field] = value;
        setUpdatedDetails(updated);
    };

    const handleDeleteDescription = (index: number) => {
        const updated = updatedDetails.filter((item, i) => i !== index);
        setUpdatedDetails(updated);
    };


    return {
        show,
        updatedDetails,
        handleClose,
        handleShow,
        handleSave,
        handleInputChange,
        handleDeleteDescription
    }
}
