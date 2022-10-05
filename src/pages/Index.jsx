import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Clientes from '../components/Clientes'

export function loader() {

  return console.log('Clientes')

}

const Index = () => {

  const clientes = useLoaderData()

  return (
    <div>
      <Clientes />
    </div>
  )
}

export default Index
