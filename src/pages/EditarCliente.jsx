import { Form, useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"

const EditarCliente = () => {

    const navigate = useNavigate()

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
        <p className='mt-3'>A continuacion, podras modificar los datos del cliente</p>
        <div className='flex justify-end'>
            <button 
                className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
                onClick={() => navigate(-1)}
            >
                Volver
            </button>
        </div>
        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
            <Form
                method="post"
                noValidate
            >
                <Formulario />
                <input 
                    type='submit'
                    className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                    value='Guardar Cambios'
                />
            </Form>
        </div>
    </>
  )
}

export default EditarCliente
