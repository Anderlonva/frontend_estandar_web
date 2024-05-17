import React, { useState, useEffect } from 'react'
import { Header } from '../ui/Header'
import { useParams } from 'react-router-dom'
import swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import { postPuesto } from '../../services/puestoService';

export const PuestoNew = () => {

    const [valoresForm, setValoresForm] = useState({})
    const { departamento = '', uet = '', puesto = '', titularTurnoA = '', titularTurnoB = '', familia = '', urlEstandar = '' } = valoresForm

    const handleOnChange = ({ target }) => { // va a recibir los valores de los input del formulario
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value }) //... spread llama todo lo que tiene el array
    }

    const handleOnSubmit = async (e) => { // ESTEEEEEEEEEEEE
        e.preventDefault();
        const PuestoNew = {
            departamento, uet, puesto, titularTurnoA, titularTurnoB, familia, urlEstandar
        }

        try {
            swal.fire({ // sirve para mostrar alerta de cargando 
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading(); // se llama la alerta de cargando
            const { data } = await postPuesto(PuestoNew)
            //console.log(data);
            alert("Puesto Creado con exito!")
            swal.close();

        } catch (error) {
            console.log(error);
            swal.close();
            let mensaje;
            if (error && error.response && error.response.data) {
                mensaje = error.response.data
            } else {
                mensaje = 'Ocurrio un error por favor intente de nuevo'
            }
            swal.fire('Error', mensaje, 'error')
        }
    }

    return (
        <>
            <Header />
            <div className='container mt-2'>
                <div className="card">
                    <div className='card-header'>
                        <h5 className='card-title'>Crear Puesto</h5>
                    </div>
                    <div className="card-body">
                        <div className='row'>
                            <form onSubmit={(e) => handleOnSubmit(e)} id='formulario' >
                                <div className='row'>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label">Departamento</label>
                                            <input type="text" name='departamento' value={departamento} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label">Uet</label>
                                            <input type="text" name='uet' value={uet} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label">Puesto</label>
                                            <input type="text" name='puesto' value={puesto} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label">Titular Turno A</label>
                                            <input type="text" name='titularTurnoA' value={titularTurnoA} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label">Titular Turno B</label>
                                            <input type="text" name='titularTurnoB' value={titularTurnoB} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <label className="form-label">Familia</label>
                                    <select className="form-select" name='familia'
                                        onChange={(e) => handleOnChange(e)} value={familia} >
                                        <option value=''>--Seleccionar--</option>
                                        <option value='X52'>X52</option>
                                        <option value='HJD'>HJD</option>

                                    </select>
                                </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-10 col-md-12 col-sm-12'>
                                        <div className="mb-3">
                                            <label className="form-label">Url Estandar</label>
                                            <input type="text" name='urlEstandar' value={urlEstandar} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <button className="btn btn-secondary btn-guardar">Guardar</button>
                                    </div>
                                    <div className='col-lg-2 col-md-2 col-sm-2'>
                                        <Link type="button" className="btn btn-danger btn-salir" to='/puestos'>Salir</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
