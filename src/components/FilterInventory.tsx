import { useState } from 'react';
import './styles/filterInventory.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const FilterInventory = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <div className="filter-component-movil">
                <div className="button-wrapper">
                    <button className={`filter-button ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>FILTRAR <ArrowForwardIcon /></button>
                </div>
                {menuVisible && (
                    <div className="menu">
                        <button className="close-button" onClick={toggleMenu}><ArrowBackIcon />  Filtrar por:</button>
                        <p>Buloneria</p>
                        <p>Herrería</p>
                        <p>Electricidad</p>
                        <p>Seguridad</p>
                    </div>
                )}
            </div>

            <div className='filter-component desktop-view'>
                <h4>Categorías:</h4>
                <div className="category-list">
                    <p>Bulonería</p>
                    <p>Herrería</p>
                    <p>Electricidad</p>
                    <p>Seguridad</p>
                </div>
            </div>

        </>
    );
};
