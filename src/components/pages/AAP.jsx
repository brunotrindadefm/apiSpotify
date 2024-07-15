import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import MusicCard from "../MusicCard/MusicCard";

import './AAP.css'

const apiToken = import.meta.env.VITE_API_TOKEN

const AAP = () => {

  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [albuns, setAlbuns] = useState([])


  const getArtist = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${apiToken}`
        }
      });
      setArtist(response.data);
    } catch (error) {
      console.error("Erro ao buscar artista:", error);
    }
  };

  const getAlbums = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
        headers: {
          Authorization: `Bearer ${apiToken}`
        }
      });
      setAlbuns(response.data.items);
      console.log(response.data.items)
    } catch (error) {
      console.error("Erro ao buscar álbuns:", error);
    }
  };

  useEffect(() => {
    if (id) {
      getArtist();
      getAlbums();
    }
  }, [id]);


  return (
    <div className='music-page'>
      {artist && (
        <>
          <MusicCard key={artist.id} music={artist} showEverything={false} />
          <p className="tagline"></p>
          <div className="info">
            <h3>
              Gêneros Musicais
            </h3>
            <p>{artist.genres.map((generos) => <p>{generos}</p>)}</p>
          </div>
          <div className="info">
            <h3>Seguidores</h3>
            <p>{artist.followers.total}</p>
          </div>
          <div className="info">
            <h3></h3>
          </div>
          <div className="info">
            <h3>Álbuns</h3>
            <ul>
              {albuns.map((album) => (
                <>
                <li key={album.id}>{album.name}</li>
                <img src={album.images[0].url} alt={album.name} />
                <p>Data de lançamento: {album.release_date}</p>
                </>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AAP;
