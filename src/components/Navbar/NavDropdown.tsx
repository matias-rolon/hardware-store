
import '../styles/dropdown.css'

interface Props {
    name: string
    dropdown?: Items[];
}

interface Items {
    nameSection: string;
    itemSection: Section[]
}

interface Section {
    nameItem: string;
    url: string;
}

export const NavDropdown = ({name, dropdown}: Props) => {


    return (
        <>
            <li className="nav-item nav-item-nav dropdown dropdown-nav">
                <a  className={`nav-link nav-link-nav ${dropdown ? 'dropdown-toggle' : ''}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {name}
                </a>
                {
                    dropdown ? 
                        <div className="dropdown-menu dropdown-menu-nav" aria-labelledby="navbarDropdown">
                        {
                            dropdown.map( dropdown => (
                                <ul>
                                    <h6 className="dropdown-header">{dropdown.nameSection}</h6>
                                        {
                                            dropdown.itemSection.map( item => (
                                                <li>
                                                    <a className="dropdown-item dropdown-item-nav" href={item.url}>{item.nameItem}</a>
                                                </li>
                                            ) )
                                        }
                                </ul>
                            ) )
                        }
                        </div>
                : null} 
                    
            </li>
        </>
    )


}
