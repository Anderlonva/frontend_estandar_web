import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HomeRouter } from './HomeRouter'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {

  const [auth, setAuth] = useState(false)


  useEffect(() => {
    setAuth(localStorage.getItem("token"))

  }, [])

  return (
    <BrowserRouter>
      {
        auth ? <HomeRouter /> : <AuthRouter /> //if ternario = si auth es true muestra home si no muestra login
      }
    </BrowserRouter>
  )
}
