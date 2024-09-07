import { Link, useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const Header = () => {

    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault()
        Cookies.remove('hello')
        navigate(
            '/'
        )}


    return(
        <section>
            <header>
                <div className="logo">
                    <p>BDF</p>
                </div>
            </header>
            <nav>
                <ul>
                    <li><Link to={"/postings"}>Les annonces</Link></li>
                    <li><Link to={"/postings/create"}>Poster une annonce</Link></li>
                    <li><Link to={"/mypostings"}>Mes annonces</Link></li>
                    <li><Link to={"/"}>Nous contacter</Link></li>
                    <li><Link to={"/"}>Mon profil</Link></li>
                    <li className="logout-btn" onClick={handleLogout}>Se déconnecter</li>
                </ul>
            </nav>
        </section>

    )
}

export default Header