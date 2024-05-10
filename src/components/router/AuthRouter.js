import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from '../auth/Login'

export const AuthRouter = () => {
    return (
        <Routes>
            <Route path='login' element={<Login />} />

            <Route path='*' element={<Navigate to='/login' />} />

        </Routes>
    )
}
