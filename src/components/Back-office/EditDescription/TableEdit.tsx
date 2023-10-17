import '../../styles/editDescription.css'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    sectionDetails: Details[]
}

interface Details {
    name: string,
    details: string;
}

export const TableEdit = ({sectionDetails} : Props) => {
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
                                <input type="text" className='input-table-edit-name'
                                    defaultValue={
                                        detail.name
                                    }/>
                            </th>
                            <td>
                                <input type="text" className='input-table-edit-details'
                                    defaultValue={
                                        detail.details
                                    }/>
                            </td>
                            <div className='contain-icon'>
                                <DeleteIcon/>
                            </div>
                        </tr>
                    ))
                } </tbody>
            </table>
        </div>
    )
}
