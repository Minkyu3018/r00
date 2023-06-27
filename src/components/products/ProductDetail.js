import styled from "styled-components";

const BlueDiv = styled.div`
    background-color : skyblue
`

const ProductDetail = ({product}) => {

    const {pno,pname,price, imgFile} = product

    return ( 

    <li>
        <BlueDiv>PNO : {pno}</BlueDiv>
        <div>pname : {pname}</div>
        <div>{price}</div>
        <div className="imges"><img src={require(`../images/${imgFile}`)}/></div>
        <button>BUY</button>
    </li>

    );
}
 
export default ProductDetail;