import { useEffect, useState } from "react"

const PostingsList = () => {

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
             <section className="postings-list">
            
            <div className="postings-header">
                <div className="pick-up-header"><p>Chargement</p></div>
                <div className="delivery-header"><p>Livraisonn</p></div>
                <div className="detail-header"><p>Détail de l'offre</p></div>
            </div>
       
            {postings.map((posting) => {
                return(
                    <>
                        <div className="pick-up-info">
                            <ul>
                                <li>{posting.pickUpCity}</li>
                                <li>{posting.pickUpDate}</li>
                            </ul>
                        </div>
                        <div className="delivery-info">
                            <ul>
                                <li>{posting.deliveryCity}</li>
                                <li>{posting.deliveryDate}</li>
                            </ul>
                        </div>
                        <div className="detail-info">
                            <p>{posting.addInfo}</p>
                        </div>
                    </>
                )
            })}
       
    </section>

           
        </section>
    )
}

export default PostingsList