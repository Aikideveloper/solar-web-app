import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {

  const updateMenu = () => {
    if (document.getElementById('responsive-menu').checked == true) {
      document.querySelector('nav').style.borderBottomRightRadius = '0';
      document.querySelector('nav').style.borderBottomLeftRadius = '0';
    } else {
      document.querySelector('nav').style.borderRadius = '0';
    }
  };

  return (
    <nav id={styles.menu}>
      <Image alt="logo image" src="/img/logo_nav.png" width="40" height="40" id={styles.logo} />
      <input type='checkbox' id='responsive-menu' onClick={updateMenu} /><label></label>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/about'>Contact Us</Link></li>
      </ul>
      <div id={styles.buttonContact} className={`${styles.contact} px-4`}>
        <Link href='/'>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navbar;