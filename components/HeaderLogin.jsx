import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const HeaderLogin = () =>{

    const navigate = useNavigate()
    const loginFormHandler = ((e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        const loginData = {
            email,
            password
        }

        const loginDataJson = JSON.stringify(loginData)
        fetch("http://localhost:3000/user/login", {
            method : "POST",
            body : loginDataJson,
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",    
        })
        .then((response) => {
            if(response.status === 200 ){
                navigate(
                    '/postings'
                )
            }else{
                setMessage("Connexion refusée")
            }
        })    
    })


    return(
        <section>
            <header>
                <div className="logo">
                    <p>BDF</p>
                </div>
                <div className="sign-in-container">
                    <form onSubmit={loginFormHandler} className="form-header" action="">
                        <table className="sign-in-form">
                            <tr>
                                <td><label htmlFor="">Email</label></td>
                                <td><input name="email" className="input-sign-in" type="text" /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="">Mot de passe</label></td>
                                <td><input name="password" className="input-sign-in" type="text" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><input className="submit-sign-in" value="Se connecter" type="submit" /></td>
                            </tr>
                        </table>
                    </form>
                </div>
            </header>
                <nav>
                    <ul>
                        <li><Link to={"/"}>Acceuil</Link></li>
                        <li><Link to={"/"}>Nos solutions</Link></li>
                        <li><Link to={"/"}>Nous découvir</Link></li>
                        <li><Link to={"/"}>Nous contacter</Link></li>
                        <li><Link to={"/signup"}>S'inscrire</Link></li>
                    </ul>
                </nav>
            </section>

        
    )
}
export default HeaderLogin