
import '../styles/dropdown.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

interface Props {
    name: string
    dropdown?: Items[];
    href: string;
}

interface Items {
    nameSection: string;
    itemSection: Section[]
}

interface Section {
    nameItem: string;
    url: string;
}

export const NavDropdown = ({ name, dropdown, href }: Props) => {
    const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      // Evitar la propagación del evento al contenedor de la marca de navegación
      event.stopPropagation();
    };
  
    return (
      <>
        <li className="nav-item nav-item-nav dropdown dropdown-nav">
          <a
            href={href}
            onClick={handleItemClick}
            className={`nav-link nav-link-nav ${dropdown ? 'dropdown-toggle' : ''}`}
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {name}
          </a>
          {dropdown ? (
            <div className="dropdown-menu dropdown-menu-nav" aria-labelledby="navbarDropdown">
              {dropdown.map((dropdown) => (
                <ul>
                  <h6 className="dropdown-header">{dropdown.nameSection}</h6>
                  {dropdown.itemSection.map((item) => (
                    <li key={item.nameItem}>
                      <a className="dropdown-item dropdown-item-nav" href={item.url}>
                        {item.nameItem}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ) : null}
        </li>
      </>
    );
  };
  