function Product({img,title}){
    return(
        <div className="Products">
            <img src={img} alt="NotFound"/>
            <p >
                {title}
            </p>
        </div>
    )

}
export default Product;