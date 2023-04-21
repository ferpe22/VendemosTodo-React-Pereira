import { Link } from "react-router-dom";

export const Categorias = () => {

    return (
        
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="nav-link active" to={"/category/1"}>
                    <button className="btn btn-secondary">
                        <i className="fas fa-home fa-lg"></i> Hogar
                    </button> 
                {/* <span className="visually-hidden">(current)</span> */}
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to={"/category/2"}>
                    <button className="btn btn-secondary">
                        <i className="fas fa-tshirt fa-lg"></i> Indumentaria
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to={"/category/3"}>
                    <button className="btn btn-secondary">
                        <i className="fas fa-running fa-lg"></i> Deportes
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to={"/category/4"}>
                    <button className="btn btn-secondary">
                        <i className="fas fa-laptop fa-lg"></i> Tecnologia
                    </button> 
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to={"/category/5"}>
                    <button className="btn btn-secondary">
                        <i className="fas fa-tv fa-lg"></i> Electro
                    </button>
                </Link>
            </li>
        </ul>
    );
}

