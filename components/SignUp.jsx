import { useState } from "react"
import { useNavigate } from "react-router-dom"


const SignUp = () => {
    

    const navigate = useNavigate()

    const [message, setMessage] = useState(null)

    const signUpFormHandler = ((e) => {
        e.preventDefault()

        const companyName = e.target.companyName.value
        const siret = e.target.siret.value
        const postCode = e.target.postCode.value
        const city = e.target.city.value
        const address = e.target.address.value
        const companyData = {
            companyName,
            siret,
            postCode,
            city,
            address,
        }
        const companyDataJson = JSON.stringify(companyData)

        const email = e.target.email.value
        const password = e.target.password.value
        const phoneNumber = e.target.phoneNumber.value
        const userData = {
            email,
            password,
            phoneNumber
        }
        const userDataJson = JSON.stringify(userData)

        fetch("http://localhost:3000/user", {
            method : "POST",
            body : userDataJson,
            headers : {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })

        fetch("http://localhost:3000/company", {
            method : "POST",
            body : companyDataJson,
            headers : {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    })
    
    return(
        <section className="section-sign-up">
            <p>{message}</p>
            <div className="container-sign-up">
                <form onSubmit={signUpFormHandler} className="form-sign-up" action="">
                    <table>
                        <tr>
                            <td>INFORMATIONS D'ENTREPRISE</td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Raison sociale *</label></td>
                        </tr>
                        <tr>
                            <td><input name="companyName" type="text" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">SIRET *</label></td>
                        </tr>
                        <tr>
                            <td><input name="siret" type="text" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">CP *</label></td>
                            <td><label htmlFor="">Ville *</label></td>
                            <td><label htmlFor="">Adresse *</label></td>
                        </tr>
                        <tr>
                            <td><input name="postCode" type="text" /></td>
                            <td><input name="city" type="text" /></td>
                            <td><input name="address" type="text" /></td>
                        </tr>
                        <tr>
                            <td>INFORMATIONS UTILISATEUR</td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Email *</label></td>
                            <td><label htmlFor="">Mot de Passe *</label></td>
                            <td><label htmlFor="">N° de téléphone *</label></td>
                        </tr>
                        <tr>
                            <td><input name="email" type="text" /></td>
                            <td><input name="password" type="text" /></td>
                            <td><input name="phoneNumber" type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" /></td>
                        </tr>

                    </table>
                </form>
            </div>
        </section>
    )
}

export default SignUp