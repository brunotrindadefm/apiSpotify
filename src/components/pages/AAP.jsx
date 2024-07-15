import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios"

import MusicCard from "../MusicCard/MusicCard"

const AAP = () => {

  const { id } = useParams()
  const [artist, setArtist] = useState(null)

  const getArtist = async (url) => {

    const apiToken = import.meta.env.VITE_API_TOKEN

    try {
      const response = await axios.get(url, {
        headers: {
          'Authorization': apiToken
        }
      })
      setArtist(response.data)
    } catch (erro) {
      console.log(erro.message)
    }
    useEffect(() => {

      const idURL = `https://api.spotify.com/v1/search/${id}`

      getArtist(idURL)
    }, [])

  }

  return (
    <div className='music-page'>
      {artist && <>
        <MusicCard music={artist} showEverthing={false} />
      </>}
    </div>
  )
}

export default AAP
