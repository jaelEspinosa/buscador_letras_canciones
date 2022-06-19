import React from 'react'
import useLetras from '../hooks/useLetras'

const Letra = () => {
    const {letra,cargando,busqueda}=useLetras()
  return (
   cargando ? <Spinner />:
     <>
     <h3>Letra: {busqueda.cancion}</h3>
    <div className='letra'>{letra}</div>
    </>
  )
}

export default Letra