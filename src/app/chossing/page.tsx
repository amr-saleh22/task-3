import module from "./Chossing.module.css";
import Link from "next/link";
import { TiWeatherCloudy } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
import { PiScreencastLight } from "react-icons/pi";
import { CiStopwatch } from "react-icons/ci";
import { IoMdCloudDone } from "react-icons/io";
import Header from "../components/header/Header";

const Choosing = () => {
  return (
    <>
        <Header />
    <div className={module.Bigger}>
      <h1 className={module.Hyper}>Why Choose V.connct Webinar?</h1>
      <div className={module.First}>
        <div className={module.Firsts}>
          <TiWeatherCloudy />
          <h5 className={module.Writerr}>User-Friendly Interface</h5>
          <p className={module.Paragh}>Navigate effortlessly through our user-friendly interface.</p>
        </div>

        <div className={module.Firsts}>
          <AiOutlineLike />
          <h5 className={module.Writerr}>Comprehensive Features</h5>
          <p className={module.Paragh}>
            Enjoy a wide array of features. Tailor each webinar to your unique
            needs.
          </p>
        </div>
        <div className={module.Firsts}>
          <LuUsers2 />
          <h5 className={module.Writerr}>Up to 5000 Participants</h5>
          <p className={module.Paragh}>Host anything from intimate seminars to grand conferences.</p>
        </div>
      </div>

      <div className={module.Second}>
        <div className={module.Firsts}>
          <PiScreencastLight />
          <h5 className={module.Writerr}>Live Stream Capabilities</h5>
          <p className={module.Paragh}>
            Connect with participants globally in real-time with our live
            streaming option.
          </p>
        </div>
        <div className={module.Firsts}>
          <CiStopwatch />
          <h5 className={module.Writerr}>30-Hour Webinar Duration</h5>
          <p className={module.Paragh}>
            Enjoy webinar durations for those in-depth discussions and
            comprehensive sessions.
          </p>
        </div>
        <div className={module.Firsts}>
          <IoMdCloudDone />
          <h5 className={module.Writerr}>Cloud Recording Storage</h5>
          <p className={module.Paragh}>
            Benefit from our cloud recording to ensuring you never miss a
            crucial detail.
          </p>
        </div>
      </div>
      <div className={module.btns}>
        <Link className={module.btn1} href={"./Buying"} > Plans & Pricing </Link>
      </div>
    </div></>
  );
};

export default Choosing;