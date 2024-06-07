import React from "react";
import style from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://motoristapx.com.br/wp-content/uploads/2023/02/cropped-px-logo-512x512-1.png"} 
          alt="Logo da loja"
        />
      </div>
      <p className={style.marketing}>THE BEST STORE IN THE W🌎RLD</p>
      <button className={style.addButton}>Adicionar novo produto</button>
      <div className={style.cartIcon}>
        <Image
          width={70}
          height={33}
          src={"https://static.vecteezy.com/system/resources/previews/019/787/015/non_2x/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"}
          alt="Ícone de Carrinho"
        />
      </div>
    </header>
  );
};

export default Header;