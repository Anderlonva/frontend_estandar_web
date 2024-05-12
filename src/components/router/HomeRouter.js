import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../home/Home';


export const HomeRouter = () => {
    return (
        <Routes>

            <Route path='/' element={<Home />} />
            

            <Route path='*' element={<Navigate to='/' />} />

        </Routes>
    )
}

