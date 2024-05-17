import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../home/Home';
import { UsuariosView } from '../usuarios/UsuariosView';
import { UsuarioNew } from '../usuarios/UsuarioNew'
import { UsuarioUpdate } from '../usuarios/UsuarioUpdate'
import { PuestoTable } from '../puesto/PuestoTable';
import { PuestoUpdate } from '../puesto/PuestoUpdate';
import { PuestoNew } from '../puesto/PuestoNew';


export const HomeRouter = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/usuarios' element={<UsuariosView />} />
            <Route path='/usuario/crearNuevo' element={<UsuarioNew />} />
            <Route path='/usuario/edit/:usuarioId' element={<UsuarioUpdate />} />
            <Route path='/puestos' element={<PuestoTable />} />
            <Route path='/puesto/edit/:puestoId' element={<PuestoUpdate />} />
            <Route path='/puesto/crearNuevo' element={<PuestoNew />} />

            <Route path='*' element={<Navigate to='/' />} />

        </Routes>
    )
}

