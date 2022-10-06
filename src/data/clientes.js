export async function obtenerClientes() {

    const urlClientes = import.meta.env.VITE_API_URL
    const respuesta = await fetch(urlClientes)
    const resultado = await respuesta.json()

    return resultado

}

export async function agregarCliente(datos) {

    const urlClientes = import.meta.env.VITE_API_URL
    const respuesta = await fetch(urlClientes, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type':'application/json'
        }
    })
    await respuesta.json()

}