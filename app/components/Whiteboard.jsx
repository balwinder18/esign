import React, { useEffect, useRef, useState } from 'react'

export default function Whiteboard() {


  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [Isdrawing , setIsdrawing] = useState(false);

  useEffect(() => {
  const canvas = canvasRef.current;

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  context.strokeStyle = 'black';
  context.lineCap = 'round';
  context.lineWidth = 1;
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


  const startTouchDrawing = (e) => {
  e.preventDefault();
  const rect = canvasRef.current.getBoundingClientRect();
  const touch = e.touches[0];
  const offsetX = touch.clientX - rect.left;
  const offsetY = touch.clientY - rect.top;
  contextRef.current.beginPath();
  contextRef.current.moveTo(offsetX, offsetY);
  setIsdrawing(true);
};

const touchDraw = (e) => {
  e.preventDefault();
  if (!Isdrawing) return;
  const rect = canvasRef.current.getBoundingClientRect();
  const touch = e.touches[0];
  const offsetX = touch.clientX - rect.left;
  const offsetY = touch.clientY - rect.top;
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
 <div className="flex flex-col md:flex-row items-start justify-center gap-6 p-4 w-full min-h-scree">
  {/* Left */}
  <div className="flex flex-col gap-4 w-full md:w-[200px]">
    <button
      onClick={clearCanvas}
      className="text-black hover:bg-black hover:text-white px-4 py-2 rounded-md bg-white border"
    >
      Reset
    </button>

    <button
      onClick={downloadCanvas}
      className="text-black hover:bg-black hover:text-white px-4 py-2 rounded-md bg-white border"
    >
      Download
    </button>

    <label className="text-black hover:bg-black hover:text-white px-4 py-2 rounded-md bg-white border text-center cursor-pointer">
      Upload
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  </div>

  {/* Right */}
  <div className="flex-1 w-full md:w-auto">
    <canvas
      ref={canvasRef}
      onMouseDown={startdrawing}
      onMouseUp={stopdrawing}
      onMouseMove={draw}
      onMouseLeave={stopdrawing}
      onTouchStart={startTouchDrawing}
  onTouchMove={touchDraw}
  onTouchEnd={stopdrawing}
      className="border border-black bg-white w-full md:w-[600px] md:h-[70vh] h-[50vh]"
    />
  </div>
</div>

  )
}
