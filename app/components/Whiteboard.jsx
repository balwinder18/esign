import React, { useEffect, useRef, useState } from 'react'

export default function Whiteboard() {


  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [Isdrawing , setIsdrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;


    const context = canvas.getContext('2d');
    context.strokeStyke = 'black';
    context.lineCap = 'round';
    context.lineWidth ='5';
    contextRef = context;
  
  
  }, []);

  const startdrwaing =()=>{
      setIsdrawing(true);
      
  };

  const stopdrawing =()=>{

  };

  const draw=()=>{

  };
  


    
  return (
    <div></div>
  )
}
