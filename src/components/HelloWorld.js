const HelloWorld = ({product}) => {

   const {pno,pname,price} = product

    return ( 
    <div>
        <div>{pno}</div>
        <div>{pname}</div>
        <div>{price}</div>
        
        {price > 5000 && <div>비싸</div>}
        {price > 5000 ? <div>비싸</div> : <div>쌈</div>}

    </div>
    );
}
 
export default HelloWorld;

