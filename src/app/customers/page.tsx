import module from "./Customers.module.css";
import Image from "next/image";
import Header from "../components/header/Header";
const Customers = () => {
  return (
    <>
      <Header />
      <h1 className={module.good}>Trusted and used by many organizitions worldwide </h1>
      <div className={module.Photos}>
        <Image src="/AlAtrega 1.png" alt="Webinar" width={150} height={300} />
        <Image src="/Delta international schools 1.png" alt="Webinar" width={150} height={300} />
        <Image src="/Sphinx University 2.png" alt="Webinar" width={150} height={300} />
        <Image src="/Delta institute 1.png" alt="Webinar" width={150} height={300} />
        <Image src="/Ayatu Rahman 1.png" alt="Webinar" width={150} height={300} />
        <Image src="/Resala 2.png" alt="Webinar" width={150} height={300} />

      </div></>
  )
}

export default Customers;