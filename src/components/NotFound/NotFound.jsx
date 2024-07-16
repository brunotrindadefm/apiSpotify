import './NotFound.css'
import { TbError404 } from "react-icons/tb";

function NotFound({erro, query}) {

    const tamanhoQuery = (query) => {
        if (query.length > 22) {
            query = query.substring(0,22);
        }
    }

    return (
        <div className='erro container d-flex justify-content-center align-items-center flex-column '>
            <h2>Erro ao pesquisar {tamanhoQuery(query)}</h2>
            <h3><TbError404 /> Not Found</h3>
        </div>

    )
}

export default NotFound