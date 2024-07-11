import './index.css'

import { useState } from 'react'

import Input from './components/Form/Form'
import FetchSpotify from './components/spotifyFetch/FetchSpotify'
import Loading from './components/Loading/Loading'

function App() {

  const [artista,setArtista] = useState('')
  const [type, setType] = useState('')

  const passarArtista = (passandoArtista) => {
      setArtista(passandoArtista)
  }

  const passarTipo = (passandoTipo) => {
    setType(passandoTipo)
}

  console.log(type)
  console.log(artista)

  return (
    <>
      <Input noClique={passarArtista} typeClique={passarTipo}/>
      <FetchSpotify artista={artista} type={type}/>
    </>
  )
}

export default App
