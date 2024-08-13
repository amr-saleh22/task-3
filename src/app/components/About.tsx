import module from "./about.module.css";
import Image from "next/image";
import Link from "next/link";
function About(){
  return (
    <div className={module.First}>
      <h3 className={module.Write}>Get to Know V.Connct Webinar</h3>
      <p className={module.Para}>
        Explore the seamless flow of V.connct webinars, ensuring a smooth
        experience for both hosts and participants.
      </p>
      <div className={module.container}>
        <div className={module.Left}>
          <div className={module.LeftRow}>
            <h3 className={module.Writer}>Webinar Schedule</h3>
            <p className={module.parag}>
              Plan your events with precision, ensuring that your audience knows
              when to tune in.
            </p>
            <Image src="/Rectangle2.png" alt="Webinar" width={500} height={300} />
          </div>
          <div className={module.ULeft}>
            <h3 className={module.Writer}>Brand Identity</h3>
            <Image src="/Rectangle6.png" alt="Webinar" width={500} height={300} />
          </div>
        </div>
        <div className={module.Middle}>
          <Image src="/Rectangle3.png" alt="Webinar" width={500} height={300} />
          <h3 className={module.Writer}>Register form</h3>
          <p className={module.parag}>
            Easily collect participant information with our user-friendly
            registration forms.
          </p>
          <Image src="/Rectangle5.png" alt="Webinar" width={500} height={300} />
        </div>
        <div className={module.Right}>
          <div className={module.Rightrow}>
            <h3 className={module.Writer}>Shareable Card</h3>
            <Image src="/Rectangle4.png" alt="Webinar" width={500} height={300} />
          </div>

          <div className={module.URight}>
            <h3 className={module.Writer}>Email Notifications</h3>
            <p className={module.parag}>
              Keep participants informed with emails for registration
              confirmation, webinar start & end.
            </p>
            <Image src="/Rectangle1.png" alt="Webinar" width={500} height={300} />
          </div>
        </div>
      </div>
      <div className={module.btns}>
        <Link className={module.btn1} href={"Buying"} > Plans & Pricing </Link>
      </div>
    </div>
  );
};

export default About;