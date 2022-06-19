import React from 'react'
import useLetras from '../hooks/useLetras'

const Alerta = ({children}) => {
  const {letras}=useLetras()
  return (

    <div className='alerta'>{children}</div>
  )
}

export default Alerta