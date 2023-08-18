import React , { useEffect }from 'react'

import AnimatedCursor from "react-animated-cursor";
const BgCourcer = () => {

  useEffect(()=>{

    const blob = document.getElementById("blob");
  
 document.body.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`,
    }, { duration: 10000, fill: "forwards" });
  }
    },[])
  return (
    <div>
      <AnimatedCursor
    innerSize={5}
    outerSize={20}
    showSystemCursor={false}
    innerScale={1}
    outerScale={3}
    outerStyle={{
      background: `rgba(0, 0 ,0, 0)`,
      // zIndex: `-1`,
      border: `2px solid rgb(255 149 202)`,

    }}
    innerStyle={{
      background: `white`,
      // border: `2px solid lightblue`,
    }}
    trailingSpeed={15}
    clickables={[
      "a",
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      "label[for]",
      "select",
      "textarea",
      "button",
      ".link",
    ]}
    />
     <div id="blob"></div>
    <div id="blur"></div>
    </div>
  )
}

export default BgCourcer