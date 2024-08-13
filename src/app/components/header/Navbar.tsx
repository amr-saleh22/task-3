"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { BsList } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image"
const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.Webinar}>
        <Link href="/" legacyBehavior>
          <a> <Image src="/photo_5793883863120986300_x.jpg" alt="Webinar" width={150} height={200} /></a>
        </Link>
      </div>
      <div className={styles.menu} onClick={toggleMenu} aria-label="Toggle menu">
        <BsList />
      </div>
      <div
        className={`${styles.navlinksWrapper} ${
          menuActive ? styles.active : ""
        }`}
      >
        <ul className={styles.navlinks}>
          <li>
            <Link href="/" legacyBehavior>
              <a className={styles.navlink}>Home Page</a>
            </Link>
          </li>
          <li>
            <Link href="/customers" legacyBehavior>
              <a className={styles.navlink}>Customers</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className={styles.navlink}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/chossing" legacyBehavior>
              <a className={styles.navlink}>Choosing it</a>
            </Link>
          </li>
          <li>
            {/* <Link href="/Helping" legacyBehavior>
              <a className={styles.navlink}>Help Center</a>
            </Link> */}
          </li>
          <li>
            <Link href="/Buyind" legacyBehavior>
              <a className={styles.navlink}>Buy now</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
