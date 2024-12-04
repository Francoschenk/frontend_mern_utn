import { Link } from "react-router-dom";

const Menu=()=>{
    return(
        <nav className="Menu">
            <ul>
                <li> <Link to="/"> Inicio</Link></li>
                <li> <Link to="/casas"> Casas</Link></li>
            </ul>
        </nav>
    )
}

export default Menu