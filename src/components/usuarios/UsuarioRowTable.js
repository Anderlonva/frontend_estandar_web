import React from 'react'
import { Link } from 'react-router-dom'

export const UsuarioRowTable = ({ usuario }) => {
    
    return (
        <tr>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.email}</td>
            <td>{usuario.password}</td>
            <td>{usuario.turno}</td>
            <td>{usuario.puesto}</td>
            

            <td><Link type="button" className="btn btn-success" to={`/usuario/edit/${usuario._id}`}>Editar</Link></td>
        </tr>
    )
}