// import Header from './components/header/Header'
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import imgs from "../../public/hero.png"
import bulding from "./Buyind/page";
import About from "./components/About";
import Header from './components/header/Header'
 

const homePage = () => {  
  return (
    <>

      <Header />
      <div className={styles.item}>
      
        <h1 className={styles.item1}>All-in-One Solution for
          Effortless Webinar Hosting</h1>
        <p className={styles.item2}>
          Create immersive live Webinar experiences with everything you need. Join industry experts for a
           transformative learning experience and gain the
          audience you need.
        </p>
      </div>
      <div className={styles.btns}>
        <Link className={styles.btn1} href={""} > Plans & Pricing </Link>
        <Link className={styles.btn2} href={""} > Contact </Link>
        
      </div>
      <div className={styles.Images}>
        <Image src={"/hero.png"}
         alt="Webinar"
         width={1000}
         height={700}
         />
      </div>
    </>
  );
}

export default homePage;