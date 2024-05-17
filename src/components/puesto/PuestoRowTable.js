import React from 'react'
import { Link } from 'react-router-dom'

export const PuestoRowTable = ({ puesto }) => {

    return (
        <tr>
            <td>{puesto.departamento}</td>
            <td>{puesto.uet}</td>
            <td>{puesto.puesto}</td>
            <td>{puesto.titularTurnoA}</td>
            <td>{puesto.titularTurnoB}</td>
            <td>{puesto.familia}</td>

            <td><Link type="button" className="btn btn-success" to={`/puesto/edit/${puesto._id}`}>Editar</Link></td>
        </tr>
    )
}
