import './Form.css'

import { useState } from 'react'

import { FiSearch } from "react-icons/fi"

function Form({ noClique, typeClique }) {

    const [artista, setArtista] = useState('')
    const [type, setType] = useState('')

    const clique = (e) => {
        e.preventDefault()
        noClique(artista)
        typeClique(type)
    }

    return (
        <form className="container text-center text-white shadow rounded-4 p-4 d-flex justify-content-center flex-column align-items-center">
            <h2 className='my-5'>Pesquisa Spotify</h2>
            <div className="pesquisa">
                <div>
                    <input onChange={(e) => setArtista(e.target.value)} value={artista} className="form-control m-2" placeholder="Search" type="text" />
                </div>
                <div>
                    <button onClick={clique} className='botao'><FiSearch /></button>
                </div>
            </div>
            <div className="custom-select-container">
                <select value={type} onChange={(e) => setType(e.target.value)} className="form-select">
                    <option selected>O que procura?</option>
                    <option value="album">Álbum</option>
                    <option value="artist">Artista</option>
                    <option value="playlist">Playlist</option>
                </select>
            </div>
        </form>
    )
}

export default Form