import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../home/Home';
import { UsuariosView } from '../usuarios/UsuariosView';
import { UsuarioNew } from '../usuarios/UsuarioNew'
import { UsuarioUpdate } from '../usuarios/UsuarioUpdate'


export const HomeRouter = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/usuarios' element={<UsuariosView />} />
            <Route path='/usuario/crearNuevo' element={<UsuarioNew />} />
            <Route path='/usuario/edit/:usuarioId' element={<UsuarioUpdate />} />

            <Route path='*' element={<Navigate to='/' />} />

        </Routes>
    )
}

