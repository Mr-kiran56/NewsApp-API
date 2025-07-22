import React from "react";
import loading from "./loading.gif";

 export  const Loading=()=>  {

  return (
      <div className="conatiner text-center" >
        <img src={loading} style={{marginTop:'30px',marginBottom:'30px', height:'100px'}} alt="Loading..." />
      </div>
    );

}

export default Loading;
