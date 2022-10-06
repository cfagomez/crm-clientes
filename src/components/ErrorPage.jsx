import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold text-blue-600">CRM - Clientes</h1>
      <p className="text-center">Ha ocurrido un Error</p>
      <p className="text-center uppercase">{error.statusText} || {error.message}</p>
    </div>
  )
}

export default ErrorPage
