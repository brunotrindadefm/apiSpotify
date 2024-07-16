import { Link } from "react-router-dom"

import 'aos/dist/aos.css';
import AOS from 'aos';

import { useEffect } from "react";

const MusicCard = ({ music, showEverthing }) => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
        {music && music.images && music.images.length > 0 &&
            <div data-aos="fade-up" className='music-card'>
                {music && music.images && music.images.length > 0 && (
                    <img src={music.images[0].url} alt={music.name} />
                )}
                <h2 className="text-center">{music.name}</h2>
                {showEverthing && <Link to={`/aap/${music.id}`}>Detalhes</Link>}
            </div>
        }
    </>
    )
}

export default MusicCard
