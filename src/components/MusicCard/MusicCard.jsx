import { Link } from "react-router-dom"

import 'aos/dist/aos.css';
import AOS from 'aos';

import { useEffect } from "react";

const MusicCard = ({ music, showEverything }) => {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
        {music && music.images && music.images.length > 0 &&
            <div data-aos="fade-up" data-aos-delay="100" className='music-card'>
                {music && music.images && music.images.length > 0 && (
                    <img src={music.images[0].url} alt={music.name} />
                )}
                <h2 className="text-center">{music.name}</h2>
                {showEverything && <Link to={`/aap/${music.id}`}>Sobre</Link>}
            </div>
        }
    </>
    )
}

export default MusicCard
