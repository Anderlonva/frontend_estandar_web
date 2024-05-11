import React, { useEffect, useState } from 'react'
import swal from 'sweetalert2';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logoNav from '../../img/logoNav.png'
import { Link } from 'react-router-dom'


export const Header = () => {

    const [ nombre, setNombre ] = useState("")
    const [ apellido, setApellido ] = useState("")
    //const [ departamento, setDepartamento ] = useState("")
    //const [ uet, setUet ] = useState("")
    const [ rol, setRol ] = useState("")
    
    useEffect(() => {
        
        setNombre(localStorage.getItem("nombre"))
        setApellido(localStorage.getItem("apellido"))
        //setDepartamento(localStorage.getItem("departamentoRS"))
        //setUet(localStorage.getItem("uetRS"))
        setRol(localStorage.getItem("rol"))
    },[])

    

    const closeSesion = () => {
        swal.showLoading();
        window.location.href = "../"
        localStorage.clear()
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-menu  mb-3 nav-header">
                <div className="container-fluid">
                    <a className="navbar-brand text-nav" href="/home">
                        <img src={logoNav} alt="" width="50" height="30" className="d-inline-block align-text-top mx-3" />Renault</a>
                    <button className="navbar-toggler bg-menuHambuerger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-nav" aria-current="page" href="/home">Home</a>
                            </li>
                            {rol === "Admin" ? <li className="nav-item">
                                <Link className="nav-link text-nav" aria-current="page" to="/usuarios">Operarios</Link>
                            </li> : ""}
                            {rol === "Admin" ? <li className="nav-item">
                                <Link className="nav-link text-nav" aria-current="page" to="/puestos">Puestos</Link>
                            </li> : ""}
                            {rol === "Admin" ? <li className="nav-item">
                                <Link className="nav-link text-nav" aria-current="page" to="/polivalentes">Polivalentes</Link>
                            </li> : ""}
                        </ul>
                        <NavDropdown className='text-nav' title=<span className='mx-1 text-nav nombreHeader'>{nombre + ' ' + apellido}</span> id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.2" onClick={() => closeSesion()} >Cerrar sesion</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </nav>
        </>
    )
}
