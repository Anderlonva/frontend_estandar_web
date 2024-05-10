import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'



export const HomeRouter = () => {
    return (
        <Routes>

            

            <Route path='*' element={<Navigate to='/' />} />

        </Routes>
    )
}

