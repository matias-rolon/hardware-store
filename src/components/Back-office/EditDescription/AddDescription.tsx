import {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'
import '../../styles/editDescription.css'


export const AddDescription = () => {

    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

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
                        <input type="text" placeholder='Nombre' className='add-name'/>
                        <input type="text" placeholder='Descripción' className='add-description'/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleCloseAdd}>
                        Cerrar
                    </Button>
                    <Button variant="primary"
                        onClick={handleShowAdd}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
