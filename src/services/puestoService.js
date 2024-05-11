import { axiosInstance } from "../helpers/axios-config";

const getPuestos = () => {

    const respuesta = axiosInstance.get('puesto', { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};



const putPuesto = (puestoid, data) => {

    const respuesta = axiosInstance.put(`puesto/${puestoid}`, data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const getPuestoId = (puestoid) => {

    const respuesta = axiosInstance.get(`puesto/${puestoid}`, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const postPuesto = (data) => {

    const respuesta = axiosInstance.post('puesto', data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};



export {
    getPuestos,
    putPuesto,
    getPuestoId,
    postPuesto
}