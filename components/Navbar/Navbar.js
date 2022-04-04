import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const inputRef = useRef(null)
  const closeMenu = () => {
    inputRef. current.checked = false
  }
  return (
    <nav id={styles.menu}>
      <Image alt="logo image" src="/img/logo_nav.png" width="40" height="40" id={styles.logo} />
      <input ref={inputRef} type='checkbox' id='responsive-menu' /><label></label>
      <ul>
        <li onClick={closeMenu}><Link href='/'>Inicio</Link></li>
        <li onClick={closeMenu}><Link href='/about'>Nosotros</Link></li>
        <li onClick={closeMenu}><Link href='/contact'>Contacto</Link></li>
        <li onClick={closeMenu}><Link href='/lgpd'>Política de privacidad</Link></li>
      </ul>
      <div id={styles.buttonContact} className={`${styles.contact} px-4`}>
      <li className={`${styles.contact}`} onClick={closeMenu}><Link href='/contact'>Contacto</Link></li>
      </div>
    </nav>
  );
};

export default Navbar;