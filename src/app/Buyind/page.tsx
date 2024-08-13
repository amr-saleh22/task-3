import Link from "next/link";
import module from "./Buyind.module.css";
import Header from "../components/header/Header";
const Buyind = () => {
  return (
    <>
       <Header />
    <div className={module.Bigger}>
      <div className={module.Smaller}>
        <h3>Ready to Elevate Your Webinars?</h3>
      </div>
      <div className={module.btns}>
        <Link className={module.btn1} href={"/"}>
          {" "}
          Plans & Pricing{" "}
        </Link>
      </div>
    </div></>
  );
};

export default Buyind;