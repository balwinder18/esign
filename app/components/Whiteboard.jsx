import React, { useEffect, useRef, useState } from 'react'

export default function Whiteboard() {


  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [Isdrawing , setIsdrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.688; // Set canvas width
    canvas.height = window.innerHeight * 0.77; // Set canvas height


    const context = canvas.getContext('2d');
    context.strokeStyke = 'black';
    context.lineCap = 'round';
    context.lineWidth =1;
    contextRef.current = context;
  

    
  
  }, []);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

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
  
  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    

    
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempContext = tempCanvas.getContext('2d');

    
    tempContext.fillStyle = 'white';
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    tempContext.drawImage(canvas, 0, 0);

    
    const link = document.createElement('a');
    link.href = tempCanvas.toDataURL('image/png'); 
    link.download = 'canvas-image-with-bg.png';
    link.click(); 
  };
  
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
  
          context.clearRect(0, 0, canvas.width, canvas.height);
  
          
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    };


    
  return (
    <div className='flex justify-center items-center flex-col'>
    <div className='flex '>
    <button onClick={clearCanvas} className="text-black hover:bg-black hover:text-white m-5 px-3 py-2 rounded-md w-full bg-white ">
              reset
            </button>

            <button onClick={downloadCanvas} className="text-black hover:bg-black hover:text-white m-5 px-3 py-2 rounded-md w-full bg-white ">
              download
            </button>
            <button  onChange={handleFileUpload} className="text-black hover:bg-black hover:text-white m-5 px-3 py-2 rounded-md w-full bg-white ">
            <input type="file" accept="image/*"/>
            </button>
            
            
    </div>
    <div className='bg-white'>
       
      <canvas
        ref={canvasRef}
        onMouseDown={startdrawing}
        onMouseUp={stopdrawing}
        onMouseMove={draw}
        onMouseLeave={stopdrawing}
        className="border border-black"
      />
      </div>
    </div>
  )
}
