import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="./Pages/AboutMe">Azucena Gonzalez</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="./Pages/AboutMe">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Pages/Portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./Pages/Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}


export default Navbar;
