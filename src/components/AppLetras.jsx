import useLetras from "../hooks/useLetras"
import Alerta from "./Alerta"
import Formulario from "./Formulario"
import Letra from "./Letra"
import Spinner from "./Spinner"


const AppLetras = () => {
  const {alerta,letra,cargando} = useLetras() 
  
  return (
    <>
        <header>Búsqueda de Letras de Canciones</header>
        <Formulario />
        <main>
          
          {cargando ? <Spinner /> :alerta ? <Alerta>{alerta}</Alerta>: letra ? <Letra />:  <p className="text-center">Busca letras de tus canciones y artistas favoritos</p>}        
          
        </main>
    </>
  )
}

export default AppLetras