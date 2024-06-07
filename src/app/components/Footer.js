import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.social}>
        <li>E-Mail</li>
        <li>Facebook</li>
        <li>SMS</li>
        <li>Instagram</li>
      </ul>
      <p>Since 1430</p>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://motoristapx.com.br/wp-content/uploads/2023/02/cropped-px-logo-512x512-1.png"} 
          alt="Logo da empresa"
        />
      </div>
    </footer>
  );
};

export default Footer;