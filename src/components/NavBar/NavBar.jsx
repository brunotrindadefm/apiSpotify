import './NavBar.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { FiSearch } from "react-icons/fi"
import { FaClipboardQuestion } from 'react-icons/fa6'

function NavBar() {

    const [artista, setArtista] = useState('')

    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()

        if (!artista) return;

        navigate(`/search?q=${artista}`);
        setArtista('')
    }

    return (
        <header>
            <nav className="nav">
                <h1>
                    <Link to="/"><span>BT</span>Music</Link>
                </h1>
                <div className="pesquisa">
                    <form onSubmit={submit}>
                        <input onChange={(e) => setArtista(e.target.value)} value={artista} className="form-control m-2" placeholder="Search" type="text" />
                        <button className='botao'><FiSearch /></button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default NavBar