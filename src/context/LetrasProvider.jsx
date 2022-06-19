import axios from 'axios'
import {useState, useContext, createContext} from 'react'

const LetrasContext = createContext()

const LetrasProvider = ({children})=>{

    const [alerta, setAlerta]=useState('')
    const [letra, setLetra]=useState('')
    const [cargando, setCargando]=useState(false)
    const [busqueda, setBusqueda]=useState({
        artista: '',
        cancion: ''
    })

    const busquedaLetra = async (buscar)=>{
        setCargando(true)
           try{
        const url = `https://api.lyrics.ovh/v1/${buscar.artista}/${buscar.cancion}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        
        // Se puede hacer con axios instalando por cli axios
        
        /* const {data} = await axios.get(url) */ 
        
        // el .get es por default asi que no hace falta ponerlo.
        
        
        setLetra(resultado.lyrics)
        setAlerta('')
      }catch (error){
        console.log(error)
        setAlerta('Artista o Canción no Encontrada...')
      }
      setCargando(false)
    }
    return(
        <LetrasContext.Provider 
           value = {{
            alerta,
            setAlerta,
            busquedaLetra,
            letra,
            cargando,
            setLetra,
            busqueda,
            setBusqueda
        }}>

        {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext