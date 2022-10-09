export async function obtenerClientes() {

    const urlClientes = import.meta.env.VITE_API_URL
    const respuesta = await fetch(urlClientes)
    const resultado = await respuesta.json()

    return resultado

}

export async function obtenerCliente(id) {

    const urlCliente = `${import.meta.env.VITE_API_URL}/${id}`
    const respuesta = await fetch(urlCliente)
    const resultado = await respuesta.json()

    return resultado

}

export async function agregarCliente(datos) {

    try {

        const urlClientes = import.meta.env.VITE_API_URL
        const respuesta = await fetch(urlClientes, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type':'application/json'
            }
        })

    await respuesta.json()

    } catch (error ) {

        console.log(error)

    }

}

export async function actualizarCliente(datos, id) {

    const urlCliente = `${import.meta.env.VITE_API_URL}/${id}`
    const respuesta = await fetch(urlCliente, {

        method: 'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type':'application/json'
        }

    })
    
    await respuesta.json()

}

export async function eliminarCliente(id) {

    const urlCliente = `${import.meta.env.VITE_API_URL}/${id}`
    const respuesta = await fetch(urlCliente, {
        method: 'DELETE'
    })
    
    await respuesta.json()

}