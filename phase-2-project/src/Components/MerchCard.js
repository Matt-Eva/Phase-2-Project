

const MerchCard = ({item}) => {
    const {title, price, stock, image, type} = item

    // function handleStockChange({item}){
    //     const {type, stock, id} = item
    //     fetch(baseUrl + `/${type}/${id}`)
    // }
        
    

    return (
        <div className="merchcard">
            <img src={image}/>
            <h4 style={{margin: "0px"}} title={title}>{title}</h4>
            <p>${price}</p>
            <p>Number In Stock: {stock}</p>
            <button>Add to Cart</button>
            <form>
                <input type="number" className="add-stock"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MerchCard;