import { useState } from "react";

function Product()
{   
        
    const [productId,setProductId]=useState('');
    const [productName,setProductName]=useState('');
    const [productModel,setProductModel]=useState('');
    const [productprice,setProductprice]=useState('');
    return(
        <form>
            <div>
                <label>Product Id</label>
                <input type="text" value={productId} onChange={(event)=>{ setProductId(event.target.value)}} ></input>
            </div>
            <div>
                <label>Product Name</label>
                <input type="text" value={productName} onChange={(event)=>{ setProductName(event.target.value)}}></input>
            </div>
            <div>
                <label>Product Model</label>
                <input type="text" value={productModel} onChange={(event)=>{ setProductModel(event.target.value)}}></input>
            </div>
            <div>
                <label>Product Price</label>
                <input type="text" value={productprice} onChange={(event)=>{ setProductprice(event.target.value)}}></input>
            </div>
            <button>Submit Details</button>
        </form>
    )
}

export default Product