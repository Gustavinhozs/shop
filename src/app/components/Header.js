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
      <p className={style.marketing}>THE BEST STORE IN W🌎RLD</p>
      <button className={style.addButton}>Adicionar novo produto</button>
      <div className={style.cartIcon}>
        <Image
          width={70}
          height={48}
          src={"https://w7.pngwing.com/pngs/785/236/png-transparent-fire-and-shopping-cart-illustration-shopping-cart-icon-flame-shopping-cart-icon-text-camera-icon-logo.png"}
          alt="Ícone de Carrinho"
        />
      </div>
    </header>
  );
};

export default Header;