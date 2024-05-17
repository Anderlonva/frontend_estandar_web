import React, { useState, useEffect } from 'react'
import swal from 'sweetalert2';
import { Header } from '../ui/Header'
import { getPuestos } from '../../services/puestoService'
import { PuestoRowTable } from './PuestoRowTable';
import { Link } from 'react-router-dom';

export const PuestoTable = () => {

    const [puestos, setPuestos] = useState([])
    const [uet, setUet] = useState("")

    useEffect(() => {
        setUet(localStorage.getItem("uet"))
    }, [])


    const listarPuestos = async () => {
        try {
            swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading();
            const { data } = await getPuestos();
            setPuestos(data);
            console.log(data);
            swal.close()
        } catch (error) {
            console.log(error)
            swal.close()
        }
    };

    useEffect(() => {
        listarPuestos();
    }, [])

    return (
        <>
            <Header />
            <div className='container'>
                <h2>Puestos {uet}</h2>
                <div className='row mt-3'>
                    <table className="table table-striped">
                        <thead>
                            <tr>

                                <th scope="col">Departamento</th>
                                <th scope="col">Uet</th>
                                <th scope="col">Puesto</th>
                                <th scope="col">Titular Turno A</th>
                                <th scope="col">Titular Turno B</th>
                                <th scope="col">Familia</th>
                                <th scope="col"><Link type="button" className="btn btn-secondary " to='/puesto/crearNuevo'>Crear Nuevo</Link></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                puestos.map((puesto) => {

                                    if (uet.toLowerCase() == puesto.uet.toLowerCase() ) {
                                        return <PuestoRowTable key={puesto._id} puesto={puesto} puestos={puestos} />
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
