import React from 'react';
import { useSelector } from 'react-redux';
import { newContact } from '../selectors';

const Navbar = () => {
    const newContactState = useSelector(newContact);
    return (
        <nav className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">
                    <h3>Agenda Telefonica</h3>
                </span>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <button className="btn btn-primary" onClick={() => newContactState = !newContactState } >Crear Contacto</button>
                {/* <button className="btn btn-primary">Iniciar Sesión</button> */}
            </div>
        </nav>
    )
}

export default Navbar
