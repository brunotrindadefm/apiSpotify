import './NotFound.css'
import { TbError404 } from "react-icons/tb";

function NotFound({query}) {

    return (
        <div className='erro d-flex justify-content-center align-items-center flex-column '>
            <h2>Erro ao pesquisar <span>{query.substring(0,18)}</span></h2>
            <h3><TbError404 /> Not Found</h3>
        </div>

    )
}

export default NotFound