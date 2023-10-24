import '../../styles/editDescription.css'
import DeleteIcon from '@mui/icons-material/Delete';


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
                            <div className="contain-icon" onClick={() => onDeleteDescription(index)}>
                                <DeleteIcon />
                            </div>
                        </tr>
                    ))
                } </tbody>
            </table>
        </div>
    );
};
