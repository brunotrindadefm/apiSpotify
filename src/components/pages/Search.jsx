import { useParams, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

import MusicCard from "../MusicCard/MusicCard"
import NotFound from "../NotFound/NotFound"
import Loading from '../Loading/Loading'

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

    } catch (erro) {
      setErro('error 404')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    const queryURL = `https://api.spotify.com/v1/search`

    searchArtist(queryURL)
  }, [query])

  return (
    <div className='container'>
      {!erro && !loading &&
        <h2 className='title'>Resultados para <span className="query-text">{query}</span></h2>
      }
      {loading &&
        <div className="erro-loading">
          <Loading />
        </div>
      }
      {erro &&
        <div className="erro-loading">
          <NotFound erro={erro} query={query} />
        </div>
      }
      <div className='music-container'>
        {artistas.length > 0 && artistas.map((artista) => <MusicCard key={artista.id} movie={artista} />)}
      </div>

    </div>
  )
}

export default Search
