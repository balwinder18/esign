import React, { useEffect, useRef, useState } from 'react'

export default function Whiteboard() {


  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [Isdrawing , setIsdrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.688; // Set canvas width
    canvas.height = window.innerHeight * 0.8; // Set canvas height


    const context = canvas.getContext('2d');
    context.strokeStyke = 'black';
    context.lineCap = 'round';
    context.lineWidth =1;
    contextRef.current = context;
  

    
  
  }, []);

  const startdrawing =({nativeEvent})=>{
      
      const {offsetX ,offsetY} = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsdrawing(true);
  };

  const stopdrawing =()=>{
    contextRef.current.closePath();
    setIsdrawing(false);
  };

  const draw=({nativeEvent})=>{
    if (!Isdrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };
  
  


    
  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startdrawing}
        onMouseUp={stopdrawing}
        onMouseMove={draw}
        onMouseLeave={stopdrawing}
        className="border border-black"
      />
    </div>
  )
}
