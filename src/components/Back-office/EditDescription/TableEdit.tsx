import { useState } from 'react';
import '../../styles/editDescription.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Modal} from "react-bootstrap";



interface Details {
    name: string;
    details: string;
}

interface TableEditProps {
    sectionDetails: Details[];
    onInputChange: (index : number, field : string, value : string) => void;
    onDeleteDescription: (index: number) => void;
}

export const TableEdit = ({sectionDetails, onInputChange, onDeleteDescription} : TableEditProps) => {

    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
;
    const handleClose = () => setShow(false);
    const handleShow = (index:number) => {
        setShow(true);
        setIndex(index);
    } 

    

    return (
        <div className="contain-table-edit">
            <table>
                <tbody> {
                    sectionDetails ?. map((detail, index) => (
                        <tr key={index}
                            className={
                                index % 2 === 0 ? 'table-row-odd' : 'table-row-even'
                        }>
                            <th>
                                <input type="text" className="input-table-edit-name"
                                    defaultValue={
                                        detail.name
                                    }
                                    onChange={
                                        (e) => onInputChange(index, 'name', e.target.value)
                                    }/>
                            </th>
                            <td>
                                <input type="text" className="input-table-edit-details"
                                    defaultValue={
                                        detail.details
                                    }
                                    onChange={
                                        (e) => onInputChange(index, 'details', e.target.value)
                                    }/>
                            </td>
                            <div  className="contain-icon" onClick={() => handleShow(index) }>
                                <DeleteIcon />
                            </div>
                        </tr>
                    ))
                } </tbody>
            </table>
            <Modal show={show}
                onHide={handleClose}
                centered
                size="xl">
                <Modal.Body>
                    ¿Estas seguro que desea eliminar el elemento?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary"
                        onClick={ () => { onDeleteDescription(index); handleClose(); }}>
                        Si
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
