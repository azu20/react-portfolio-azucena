import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="../Pages/AboutMe">Azucena Gonzalez</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="./Pages/Home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./Pages/Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="./Pages/Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}


export default Navbar;
