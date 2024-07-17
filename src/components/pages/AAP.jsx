import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import MusicCard from "../MusicCard/MusicCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AAP.css';

const apiToken = import.meta.env.VITE_API_TOKEN;

const AAP = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    AOS.init();
  }, []);

  const getArtist = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${apiToken}`
        }
      });
      setArtist(response.data);
      console.log(response.data);
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
      setAlbums(response.data.items);
      console.log(response.data.items);
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

  useEffect(() => {
    AOS.refresh();
  }, [albums]);

  const corrigirEscrita = (frase) => {
    if (!frase) return '';
    return frase
      .split(' ')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
      .join(' ');
  };


  const formatFollowers = (number) => {
    return number.toLocaleString("pt-BR", {
    });
  }

  return (
    <div className='music-page'>
      {artist && (
        <>
          <MusicCard key={artist.id} music={artist} showEverything={false} />
          <div data-aos="fade-up" className="info">
          <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">Abrir no Spotify</a>
            <h5><span>Seguidores:</span> {formatFollowers(artist.followers.total)}</h5>
            <p><span>Gêneros:</span></p>
            {artist.genres.map((genero) => (
              <p key={genero}>{corrigirEscrita(genero)}</p>
            ))}
          </div>
          <div className="info-album">
            <h2>Álbuns</h2>
            <div className="albums">
              {albums.map((album, index) => (
                <div key={album.id} className="album" data-aos="fade-up" data-aos-delay={index * 100}>
                  <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                    <img src={album.images[0].url} alt={album.name} />
                  </a>
                  <h3>{album.name}</h3>
                  <p>Data de lançamento: {album.release_date}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AAP;
