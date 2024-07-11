import { useState, useEffect } from 'react'
import axios from 'axios'
import './FetchSpotify.css'
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';

function FetchSpotify({ artista, type }) {

    const [data, setData] = useState(null)
    const [erro, setErro] = useState(null);
    const [loading, setLoading] = useState(false);

    const spotifyFetch = async () => {

        const apiToken = "BQAQxb9F7GONvBFkW1BmJoNFm-WNpsek9U_bL-zzyzEAoL5_WhEHmzQ--gO5LM6ATRjVAWy7pD8y-B7K8MOQlVscr_YmSxGcekHW87H3izHJsBReEDg"

        setData(null)
        setLoading(true)
        setErro(null)

        try {
            const response = await axios.get('https://api.spotify.com/v1/search', {
                headers: {
                    "Authorization": `Bearer ${apiToken}`
                },
                params: {
                    "q": artista,
                    "type": type
                },
            });
            const dataKey = type + "s";
            setData(response.data[dataKey].items)
            console.log(response.data[dataKey])
        } catch (err) {
            setErro("Não encontrado")
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (artista && type) {
            spotifyFetch();
        }
    }, [artista, type])


    return (
        <>
            {erro && <NotFound />}
            {loading && <Loading />}
            {data && (
                <div className='container-fluid text-center'>
                    <div className="row row-cols-auto justify-content-center">
                        {data.map(item => (
                            <div className='card p-3 m-2' key={item.id}>
                                {item.images?.length > 0 && (
                                    <div className='imgEscrita'>
                                        <img src={item.images?.length > 0 ? item.images[0].url : 'path/to/placeholder.jpg'} className="card-img-top mb-3" alt={item.name} />
                                        <p className="card-title">{item.name.substring(0, 22)}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default FetchSpotify