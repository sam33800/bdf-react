import { Link } from "react-router-dom"

const Home = () => {
    return(
        <section className="home-body">
            <div className="banner">
                <p><Link to={"/signup"}>Rejoignez notre communauté !</Link></p>
            </div>
        </section>
    )
}

export default Home