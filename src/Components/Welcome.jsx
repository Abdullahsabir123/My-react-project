import React,{useEffect, useState} from "react";
import "./welcome.css";
import { ColorRing } from "react-loader-spinner";

export default function Welcome() {

  // const {loader,setLoader} = useState(true)

  // useEffect(()=>{
  //   const load = setTimeout(()=>{
  //     setLoader(false);
  //   },5000);
  //   return ()=> clearTimeout(load);
  // },[]);

const [loader, setLoader] = useState(true);

useEffect(() => {
  const load = setTimeout(() => {
    setLoader(false);
  }, 2000);

  return () => clearTimeout(load);
}, []);

  return (
    <div>
      <div className="loddiv">
        <center>
          <ColorRing
            visible={loader}
            height="150"
            width="150"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </center>
      </div>
      <div className="img1">
        <h1 className="text-light pos">Welcome to my website</h1>
      </div>
    </div>
  );
}