import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
            <img src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png" alt="Error 404" width="500" />
            <br />
            <Link to="/" className="back-link">
                Volver al inicio
            </Link>
        </div>
    )
}

export default NotFound