export async function obtenerClientes() {

    const urlClientes = import.meta.env.VITE_API_URL
    const respuesta = await fetch(urlClientes)
    const resultado = await respuesta.json()

    return resultado

}