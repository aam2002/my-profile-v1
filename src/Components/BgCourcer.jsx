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
    innerSize={20}
    outerSize={500}
    showSystemCursor={false}
    innerScale={3}
    outerScale={1}
    outerStyle={{
      background: `rgba(0, 0 ,0, 0)`,
      zIndex: `-1`,

    }}
    innerStyle={{
      background: `rgba(0, 0 ,0, 0)`,
      border: `2px solid lightblue`,
    }}
    trailingSpeed={60}
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