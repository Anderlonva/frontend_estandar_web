import React, { useState, useEffect } from 'react'
import { Header } from '../ui/Header'
import { PuestoView } from '../puesto/PuestoView'

export const Home = () => {

  const [departamento, setDepartamento] = useState("")
  const [uet, setUet] = useState("")
  const [puesto, setPuesto] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")

  const nombreCompleto = `${nombre} ${apellido}`

  useEffect(() => {

    setDepartamento(localStorage.getItem("departamento"))
    setUet(localStorage.getItem("uet"))
    setPuesto(localStorage.getItem("puesto"))
    setNombre(localStorage.getItem("nombre"))
    setApellido(localStorage.getItem("apellido"))

  }, [])

  return (
    <>
      <Header />

      <div className='container text-center'>
        <h2 className='mt-5 mb-5'>{departamento.toUpperCase() + " - " + uet.toUpperCase()}</h2>
      </div>

      <PuestoView puestoStorage={puesto} uet={uet}/>

    </>


  )
}
