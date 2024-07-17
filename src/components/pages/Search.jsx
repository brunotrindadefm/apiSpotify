import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

import MusicCard from "../MusicCard/MusicCard"
import NotFound from "../NotFound/NotFound"
import Loading from '../Loading/Loading'

import 'aos/dist/aos.css';
import AOS from 'aos';


import './MusicResponsive.css'

const Search = () => {

  const [artistaParams] = useSearchParams();

  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)
  const [artistas, setArtistas] = useState([])
  const query = artistaParams.get('q')

  const searchArtist = async (url) => {

    const apiToken = import.meta.env.VITE_API_TOKEN

    setLoading(true)
    setErro(null)
    setArtistas([])

    try {
      const response = await axios.get(url, {
        headers: {
          "Authorization": `Bearer ${apiToken}`
        },
        params: {
          type: 'artist',
          q: query
        }
      });
      setArtistas(response.data.artists.items)
      console.log(response.data)
      if (response.data.artists.total === 0) {
        setErro('Error 404')
      }
    } catch (erro) {
      setErro('Erro ao buscar o artista.')
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    AOS.init();

    const queryURL = `https://api.spotify.com/v1/search`

    searchArtist(queryURL)
  }, [query])

  return (
    <div className="container">
      {!erro && !loading && (
        <h2 className="title">
          Resultados para <span className="query-text">{query}</span>
        </h2>
      )}
      {loading && (
        <div className="erro-loading">
          <Loading />
        </div>
      )}
      {erro && (
        <div className="erro-loading">
          <NotFound query={query} />
        </div>
      )}
      <div className="music-container">
        {artistas.length > 0 &&
          artistas.map((artista) => (
            <MusicCard music={artista} key={artista.id} showEverything={true} />
          ))}
      </div>
    </div>
  )
}

export default Search
