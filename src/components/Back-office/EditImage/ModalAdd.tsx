import {Button, Modal} from "react-bootstrap";

interface Props {
    showAdd: boolean;
    handleCloseAdd: () => void;
    handleAddImage: (e : React.ChangeEvent < HTMLInputElement >) => void;
    addImage: () => void;
}

export const ModalAdd = ({addImage, handleAddImage, handleCloseAdd, showAdd} : Props) => {
    return (
        <Modal show={showAdd}
            onHide={handleCloseAdd}
            centered>
            <Modal.Body><input type='text' className='input-image'
                    onChange={
                        (e) => handleAddImage(e)
                    }/></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                    onClick={handleCloseAdd}>
                    Cancelar
                </Button>
                <Button variant="primary"
                    onClick={addImage}>
                    Agregar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
