import './NotFound.css'

function NotFound({erro, query}) {
    return (
        <div className='erro container d-flex justify-content-center align-items-center flex-column '>
            <h2>Erro ao pesquisar {query}</h2>
            <h3>{erro}</h3>
        </div>

    )
}

export default NotFound