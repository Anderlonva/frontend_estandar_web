import React, { useState, useEffect } from 'react'
import { getUsuarios } from '../../services/usuarioService';
import { UsuarioRowTable } from './UsuarioRowTable';
import { Header } from '../ui/Header';
import { Link } from 'react-router-dom';

export const UsuariosView = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [uet, setUet] = useState("")
    const [turno, setTurno] = useState("")
   

    useEffect(() => {
        setUet(localStorage.getItem("uet"))
        setTurno(localStorage.getItem("turno"))
    }, [])

    const listarUsuarios = async () => {
        try {
            const { data } = await getUsuarios(); //desestructuro la respuesta y solo recibo data
            setUsuarios(data)
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarUsuarios()
    }, [])



    return (
        <>
            <Header />
            <div className='container'>
                <h2>Operarios {uet}</h2>
                <div className='row mt-3'>
                    <table className="table table-striped">
                        <thead>
                            <tr>

                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Turno</th>
                                <th scope="col">Puesto</th>
                                <th scope="col"><Link type="button" className="btn btn-secondary " to='/usuario/crearNuevo'>Crear Nuevo</Link></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario) => {

                                    if (uet.toLowerCase() === usuario.uet.toLowerCase() && turno === usuario.turno ) {
                                        return <UsuarioRowTable key={usuario._id} usuario={usuario} usuarios={usuarios} />
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

