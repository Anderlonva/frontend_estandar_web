import React from 'react'

export const PuestoCard = ({ puesto, uet, departamento }) => {
    
    return (
        <div className="col" >
            <div className="card card-puestos">
            <div className='container-pdf'>
            <iframe src={puesto.urlEstandar}  frameBorder="0"  allow="autoplay" className='pdf-view' title={puesto.puesto} ></iframe>
            </div>
                <div className="card-body">
                    <p className="card-text">{puesto.departamento} - {puesto.uet} </p>
                    <p className="card-text"> Puesto: {puesto.puesto} </p>
                    <p className="card-text"> familia: {puesto.familia} </p>
                    <h5 className="card-title">Titulares</h5>
                    <p className="card-text"> {`Turno A : ${puesto.titularTurnoA}`}</p>
                    <p className="card-text"> {`Turno B : ${puesto.titularTurnoB}`}</p>

                </div>
            </div>
        </div>
    )
}

