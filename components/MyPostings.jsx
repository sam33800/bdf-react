import { useEffect, useState } from "react"


const MyPostings = () =>{
    const [postings, setPostings] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/posting")
        .then((response) => {
            return response.json()
        })
        .then((postingsData) => {
            setPostings(postingsData.data)
        })

    },[])

    return(
        <section className="postings-list">
            <table>
                <tr>
                    <td>Chargement</td>
                    <td>Livraison</td>
                    <td>Détails de l'offre</td>
                </tr>
                {postings.map((posting) => {
                    return(
                        <>
                            <tr>
                                <td>{posting.pickUpCity}</td>
                                <td>{posting.deliveryCity}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>{posting.pickUpDate}</td>
                                <td>{posting.deliveryDate}</td>
                                <td></td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </section>
    )

}
export default MyPostings