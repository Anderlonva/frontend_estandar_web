import React, { useState, useEffect } from 'react'
import swal from 'sweetalert2';
import { postLogin } from '../../services/usuarioService'
import logoInicio from '../../img/LOGO-renault.jpg'
import ReCAPTCHA from 'react-google-recaptcha';


const SITE_KEY = process.env.REACT_APP_SITE_KEY

export const Login = () => {

    const [valoresForm, setValoresForm] = useState({})
    const { email = '', password = '' } = valoresForm
    const [verifyCaptcha, setVerifyCaptcha] = useState(false)
    const [reCaptchaValue, setReCaptchaValue] = useState(false)

    const handleOnChange = ({ target }) => { // va a recibir los valores de los input del formulario
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value }) //... spread llama todo lo que tiene el array
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const usuario = {
            email, password
        }

        try {
            swal.fire({ // sirve para mostrar alerta de cargando 
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading(); // se llama la alerta de cargando
            const { data } = await postLogin(usuario)
            const { usuarioExiste, token } = data
                                                                    
                                                                    
            if (token == true) {
                localStorage.setItem("token", true)
                localStorage.setItem("nombre", usuarioExiste.nombre)
                localStorage.setItem("apellido", usuarioExiste.apellido)
                localStorage.setItem("departamento", usuarioExiste.departamento)
                localStorage.setItem("uet", usuarioExiste.uet)
                localStorage.setItem("puesto", usuarioExiste.puesto)
                localStorage.setItem("turno", usuarioExiste.turno)
                localStorage.setItem("rol", usuarioExiste.rol)
            }

            //console.log(token);
            //console.log(usuarioExiste);
            if (token === true) {

                let timerInterval
                swal.fire({
                    title: `Bienvenid@ ${usuarioExiste.nombre} ${usuarioExiste.apellido}`,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        swal.showLoading()
                        const b = swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = swal.getTimerLeft()
                        }, 1000)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                        swal.showLoading();

                    }
                })



                window.location.href = '/home'
            }


        } catch (error) {

            swal.fire('Error', error.response.data.msg, 'error')
        }

    } 

    const onChange = value => {
        setReCaptchaValue(value);
        setVerifyCaptcha(!verifyCaptcha)
    }


    return (
        <div className='container-fluid'>

            <div className='row mt-5'>
                <div className='col-lg-6 col-xl-6 text-center col-md-12 mb-4'>
                    <img
                        src={logoInicio}
                        alt="HomePage"
                        className='img-inicio'
                    >
                    </img>
                </div>
                <div className='col-lg-4 col-xl-4 col-md-12'>
                    <div className="container-login">
                        <div className="credentials">
                            <form onSubmit={(e) => handleOnSubmit(e)} id='formulario' >
                                <div className='row'>


                                    <div className='col'>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" name='email' value={email} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" name='password' value={password} required
                                                onChange={(e) => handleOnChange(e)} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row '>
                                    <div className='col'>
                                        <div className="mb-3">
                                            <ReCAPTCHA 
                                            sitekey={SITE_KEY}
                                            onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='row mt-3'>
                                    <div className='col'>
                                        <button className="btn btn-dark" disabled={!verifyCaptcha} >Ingresar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
