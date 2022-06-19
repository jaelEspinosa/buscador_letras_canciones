import React from 'react'
import useLetras from '../hooks/useLetras'

const Letra = () => {
    const {letra,cargando}=useLetras()
  return (
   cargando ? <Spinner />:
     <>
     <h4>Letra</h4>
    <div className='letra'>{letra}</div>

     </>
  )
}

export default Letra