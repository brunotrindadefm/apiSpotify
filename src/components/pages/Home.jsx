import axios from "axios"
import { useState, useEffect } from "react";

import MusicCard from "../MusicCard/MusicCard";

import './MusicResponsive.css'

const Home = () => {

  const [data, setData] = useState([])
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  const spotifyFetch = async (url) => {

    const apiToken = import.meta.env.VITE_API_TOKEN

    setData([])
    setLoading(true)
    setErro(null)

    try {
      const response = await axios.get(url, {
        headers: {
          "Authorization": `Bearer ${apiToken}`
        },
        params: {
          q: "TopBrasil",
          type: "artist"
        }
      });
      setData(response.data.artists.items)
      console.log(response.data)
    } catch (err) {
      console.error(err.response.data)
      setErro("Não encontrado")
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    const urlTopMusics = 'https://api.spotify.com/v1/search';
    spotifyFetch(urlTopMusics);

  }, [])


  return (
    <div className="container">
      {
        !loading &&
        <h2 className='title'>Top Brasil</h2>
      }
      <div className="music-container" data-aos="fade-up">
        {data && data.map((music) => <MusicCard key={music.id} showEverything={true} music={music} />)}
      </div>

    </div>
  )
}

export default Home
