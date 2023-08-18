import SearchIcon from '@mui/icons-material/Search';
import '../styles/navbar.css'

export const SearchNav = () => {
    return (
        <>
            <form className="d-flex ms-auto">
                <input className="search" placeholder="Buscar productos"/>
                <button className="search-button" type="submit">
                    <SearchIcon/>
                </button>
            </form>
        </>
    )
}
