import React from 'react';
import '../../styles/Novedades.css'

const NovedadItem = (props) => {
    const { title, imagen, body } = props;

    return (
        <div className="novedades">
            <h1 className='titulo'> {title} </h1>
            <div className='boximg'>
                <img className="imagenNovedad" src={imagen} alt="noticia" />
            </div>
            <div className='body' dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );
}

export default NovedadItem;