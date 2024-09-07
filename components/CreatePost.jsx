const CreatePost = () => {
    
    const createPostHandler = ((e) => {
        e.preventDefault()

        const goodsType = e.target.goodsType.value
        const length = e.target.length.value
        const width = e.target.width.value
        const heigth = e.target.heigth.value
        const pickUpCity = e.target.pickUpCity.value
        const pickUpDate = e.target.pickUpDate.value
        const deliveryCity = e.target.deliveryCity.value
        const deliveryDate = e.target.deliveryDate.value
        const addInfo = e.target.addInfo.value

        const postingData = {
            goodsType,
            dimensions : {
                length,
                width,
                heigth,
            },
            pickUpCity,
            pickUpDate,
            deliveryCity,
            deliveryDate,
            addInfo
        }
        const postingDataJson = JSON.stringify(postingData)

        fetch("http://localhost:3000/posting", {
            method : "POST",
            body : postingDataJson,
            headers : {
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
    })
    
    
    
    return(
        <section>
            <form onSubmit={createPostHandler} action="">
                <label htmlFor="">Type de marchandise</label>
                <input name="goodsType" type="text" />
                <label htmlFor="">Longueur</label>
                <input name="length" type="text" />
                <label htmlFor="">largeur</label>
                <input name="width" type="text" />
                <label htmlFor="">hauteur</label>
                <input name="heigth" type="text" />
                <label htmlFor="">Ville de chargement</label>
                <input name="pickUpCity" type="text" />
                <label htmlFor="">Date de chargement</label>
                <input name="pickUpDate" type="date" />
                <label htmlFor="">Ville de livraison</label>
                <input name="deliveryCity" type="text" />
                <label htmlFor="">Date de livraison</label>
                <input name="deliveryDate" type="date" />
                <label htmlFor="">Informations complémentaire</label>
                <textarea  name="addInfo" id=""></textarea>
                <input type="submit" />
            </form>
        </section>
    )
}

export default CreatePost
