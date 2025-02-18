import React from "react";

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Proyectos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Habilidades</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Experiencia</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Educacion</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Contacto</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">Descargar CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;