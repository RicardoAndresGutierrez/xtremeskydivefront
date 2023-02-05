import React from "react";

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logoanimado">
                    <img src="imagenes/logo.png" width="200" alt="Logo Xtreme Skydive" />
                </div>
                <h1> <span className="Xtitulo">X</span>treme Skydive</h1>
            </div>
        </header>
    );
}

export default Header;