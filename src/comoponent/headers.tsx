 import link from "next/link";
 import "/headers.css";
 // import{Grtechnology} from "react-icons/gr";

const header = () => {
  return (
    <header className="headers">
        <nav>
            <div>
                <link href="/">
                CLOUD
                {/* <Grtechnology/> */}
                HOSTING
                </link>
            </div>
            <ul>
              <link href="/">HOME</link>
              <link href="/articles">articles</link>
              <link href="/about">abou</link>
              <link href="/admin">admi</link>
            </ul>
           
        </nav>
        <div>
            <link href="/login">login</link>
            <link href="/register">register</link>
        </div>
    </header>
    
)}

export default header 
