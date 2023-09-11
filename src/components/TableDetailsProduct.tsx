import './styles/tableDetails.css'

interface Props {
    sectionDetails: Details[]
}

interface Details {
    name: string,
    details: string;
}

export const TableDetailsProduct = ({sectionDetails} : Props) => {
    return (
        <table>
            <tbody> 
                {
                    sectionDetails.map((detail, index) => (
                        <tr key={index}
                            className={
                                index % 2 === 0 ? 'table-row-odd' : 'table-row-even'
                        }>
                            <th>{detail.name}</th>
                            <td>{detail.details} </td>
                        </tr>
                    ))
                }    
            </tbody>
        </table>
    );
}
