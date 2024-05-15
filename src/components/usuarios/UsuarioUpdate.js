import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUsuarioId, putUsuario } from '../../services/usuarioService';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import { Header } from '../ui/Header';


export const UsuarioUpdate = () => {

    const { usuarioId = '' } = useParams();
    const [usuario, setUsuario] = useState({})
    const [valoresForm, setValoresForm] = useState({})
    const { nombre = '', apellido = '', email = '', password = '', departamento = '', uet = '', puesto = '', turno = '', rol = '', estado = '' } = valoresForm

    const getUsuario = async () => {
        try {
            swal.fire({ // sirve para mostrar alerta de cargando 
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading();
            const { data } = await getUsuarioId(usuarioId);

            setUsuario(data) // se le agrega la data a usuario
            swal.close()
        } catch (error) {
            console.log(error);
            swal.close()
        }
    }

    useEffect(() => {
        getUsuario()
    }, [usuarioId]);

    useEffect(() => {
        if (usuario) {
            setValoresForm({  // con este recuperamos los datos del activo 
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                email: usuario.email,
                password: usuario.password,
                departamento: usuario.departamento,
                uet: usuario.uet,
                puesto: usuario.puesto,
                turno: usuario.turno,
                rol: usuario.rol,
                estado: usuario.estado,

            })
        }
    }, [usuario])

    const handleOnChange = ({ target }) => { // va a recibir los valores de los input del formulario
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value }) //... spread llama todo lo que tiene el array
    }

    const handleOnSubmit = async (e) => { // ESTEEEEEEEEEEEE
        e.preventDefault();
        const usuarioUpdate = {
            nombre, apellido, email, password, departamento, uet, puesto, turno, rol, estado
        }

        try {
            swal.fire({ // sirve para mostrar alerta de cargando 
                allowOutsideClick: false,
                text: 'Actualizando...'
            });
            swal.showLoading(); // se llama la alerta de cargando
            const { data } = await putUsuario(usuarioId, usuarioUpdate)
            //console.log(data);
            alert("Usuario modificado con exito!")
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
        <Header/>
        <div className='container mt-2'>
            <div className="card">
                <div className='card-header'>
                    <h5 className='card-title'>Actualizar Usuario</h5>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <form onSubmit={(e) => handleOnSubmit(e)} id='formulario' >
                            <div className='row'>
                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" name='nombre' value={nombre} required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Apellido</label>
                                        <input type="text" name='apellido' value={apellido} required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="text" name='email' value={email} required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="text" name='password' value={password} required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Departamento</label>
                                        <input type="text" name='departamento' value={departamento} required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">UET</label>
                                        <input type="text" name='uet' value={uet} required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>

                            </div>

                            <div className='row'>

                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <div className="mb-3">
                                        <label className="form-label">Puesto</label>
                                        <input type="text" name='puesto' value={puesto} required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>

                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <label className="form-label">Turno</label>
                                    <select className="form-select" name='turno'
                                        onChange={(e) => handleOnChange(e)} value={turno} >
                                        <option value=''>--Seleccionar--</option>
                                        <option value='A'>A</option>
                                        <option value='B'>B</option>
                                        <option value='C'>C</option>

                                    </select>
                                </div>

                                <div className='col-lg-3 col-md-12 col-sm-12'>
                                    <label className="form-label">Estado</label>
                                    <select className="form-select" name='estado'
                                        onChange={(e) => handleOnChange(e)} value={estado} >
                                        <option value=''>--Seleccionar--</option>
                                        <option value='Activo'>Activo</option>
                                        <option value='Inactivo'>Inactivo</option>

                                    </select>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                    <button className="btn btn-secondary btn-guardar">Guardar</button>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                    <Link type="button" className="btn btn-danger btn-salir" to='/usuarios'>Salir</Link>
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
