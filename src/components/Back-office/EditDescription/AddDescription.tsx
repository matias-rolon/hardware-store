import {Button, Modal} from 'react-bootstrap'
import '../../styles/editDescription.css'

interface Props {
    showAdd: boolean;
    handleShowAdd: () => void;
    handleCloseAdd: () => void;
    handleNameChangeAdd: (e : any) => void;
    handleDetailsChangeAdd: (e : any) => void;
    handleSaveAdd: () => void;
}


export const AddDescription = ({
    handleShowAdd,
    handleCloseAdd,
    showAdd,
    handleNameChangeAdd,
    handleDetailsChangeAdd,
    handleSaveAdd
} : Props) => {


    return (
        <>
            <Button variant="secondary"
                onClick={handleShowAdd}>
                Agregar descripción
            </Button>
            <Modal show={showAdd}
                onHide={handleCloseAdd}
                centered
                size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Editar descripción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='contain-add-description'>
                        <input type="text" placeholder='Nombre' className='add-name'
                            onChange={handleNameChangeAdd}/>
                        <input type="text" placeholder='Descripción' className='add-description'
                            onChange={handleDetailsChangeAdd}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleCloseAdd}>
                        Cerrar
                    </Button>
                    <Button variant="primary"
                        onClick={handleSaveAdd}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
