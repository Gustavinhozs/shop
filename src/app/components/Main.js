"use client"
import Image from "next/image"
import style from "../page.module.css"
import { useEffect,useState } from "react";

export default  function Main() {
  const [listProduct, setProduct] = useState([]);
  useEffect( ()=> {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products/")
      const data = await response.json();
      setProduct(data);
    }
    getProduct()
   }, []);


   const orderAz = () => {
    const listAux = {...listProduct}.sort ((a,b) => 
    a.title.localCompare(b.title) );
    setProduct(listAux);
   }


   const orderZa = () =>{
    let listAux = [...listProduct].sort((a,b) =>
    a.title.localCompare(b.title) );

    listAux = listAux.reverse();
    setProduct(listAux0);
     }

  return (
    <>
    <div className={style.filters}>
      <div>
         <button onClick={orderAz}> Az </button>
         <button onClick={orderZa}> Za </button>
      </div>
    </div>
    <main className={style.body}>
      {listProduct.map((products) =>
        <div className={style.card} key={products.id}>
          <h1>{products.title}</h1>
          <Image width={300} height={300} src={products.image} />
          <h3 className={style.preco}>R$: {products.price}</h3>
          <p>{products.description}</p>
          <p>{products.category}</p>
        </div>
      )}
    </main>
    </>
  );
}
