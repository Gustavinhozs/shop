"use client"
import Image from "next/image"
import style from "../page.module.css"
import { useEffect,useState, useTransition } from "react";
////importar spinner

export default  function Main() {
  const [listProduct, setProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
 const [textSearch, setTextSearch] = useState("");

  useEffect( ()=> {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products/")
      const data = await response.json();
      setListProdut(data);
      setListComplete(data);
    }

    getProduct()
   }, []);


   const orderAz = () => {
    const listAux = [...listProduct].sort((a,b) => 
    a.title.localeCompare(b.title) );
    setProduct(listAux);
   }


   const orderZa = () =>{
    let listAux = [...listProduct].reverse((a,b) =>
    a.title.localeCompare(b.title) );

    setProduct(listAux);
     }

     const orderCres = () => {
      let listPreco = [...listProduct].sort((a,b) => b.price - a.price)
    
      setProduct	(listPreco);
     }

     const orderDecre = () => {
      let listPreco = [...listProduct].reverse((a,b) => b.price - a.price)

      setProduct (listPreco)
     }

     const search =(text) => {
      setTextSearch(text);
      if(text == ""){
        setListProdut(listComplete);
        return
        }
        const newList = listProduct.filter(() => 
        product.title.toUpperCase().includes(textSearch.toUpperCase())
        );
        setListComplete(newList);
      }

      if( listProduct[0] == null){
        return <spinner/>
      }
  return (
    <>

    <div className={style.filters}>
      <div>
      <input type="text" value={textSearch}
        placeholder="Pesquise um produto"
        onChange={(event) => search (event.target.value) }/>

         <button onClick={orderAz}> Az </button>
         <button onClick={orderZa}> Za </button>
         <button onClick={orderCres}> Crescente </button>
         <button onClick={orderDecre}> Decrescente </button>
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

