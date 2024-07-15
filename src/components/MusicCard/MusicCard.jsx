import { Link } from "react-router-dom"

const MusicCard = ({ music, showEverthing }) => {
    return (
        <>
        {music && music.images && music.images.length > 0 &&
            <div className='music-card'>
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
