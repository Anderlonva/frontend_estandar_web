import React, { useEffect, useState } from 'react'
import swal from 'sweetalert2';
import { getPuestos } from '../../services/puestoService'
import { PuestoCard } from './PuestoCard';


export const PuestoView = ( { puestoStorage, uet }) => {

    const [puestos, setPuestos] = useState([])   


    const listarPuestos = async () => {
        try {
            swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading();
            const { data } = await getPuestos();
            setPuestos(data);
            //console.log(data);
            swal.close()
        } catch (error) {
            console.log(error)
            swal.close()
        }
    };

    useEffect(() => {
        listarPuestos();
    }, [])

    //console.log(puestoStorage);

    return (
        <>
            <div className='container '>
                <div className="row  g-4 mb-3 ">
                <hr/>
                    {
                        puestos.map((puesto) => {
                            if (uet.toLowerCase() === puesto.uet.toLowerCase() && puestoStorage.toLowerCase() === puesto.puesto.toLowerCase()) {
                                return <PuestoCard key={puesto._id} puesto={puesto}/>
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}
