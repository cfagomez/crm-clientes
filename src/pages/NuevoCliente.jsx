import { Form, useActionData } from 'react-router-dom'
import Formulario from '../components/Formulario'

export async function action({request}) {

  const formData = await request.formData()

  const datos = Object.fromEntries(formData)

  const errores = []

  if (Object.values(datos).includes ('')) {
    errores.push('Todos los campos son obligatorios')
  }

  if (errores.length) {
    return errores
  }

}

const NuevoCliente = () => {

  const errores = useActionData()

  return (
    <>
      <h1 className='font-black text-4xl text-blue-800'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo Cliente</p>
      <div className='flex justify-end'>
        <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'>Volver</button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        <Form
          method='post'
        >
          <Formulario />
          <input 
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-xl'
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
