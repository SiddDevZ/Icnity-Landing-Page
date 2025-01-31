import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const Card = ({ icon, title, description }) => {
  const [entryPoint, setEntryPoint] = useState({ x: 0, y: 0 });
  const [exitPoint, setExitPoint] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setEntryPoint({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setExitPoint({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative pt-12 w-full">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-[#fbfbfb] rounded-full p-[1.3rem] shadow-lg">
          <i className={`ri-${icon} text-blue-500 text-[2.5rem] leading-[2.5rem]`}></i>
        </div>
      </div>
      <div 
        className="card-body bg-[#1e1e2151] backdrop-blur-sm border border-[#3d3d3d] rounded-2xl p-6 pb-11 pt-16 overflow-hidden relative"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animation Layer with Different Timing */}
        <div 
          className="absolute inset-0 bg-[#1E1E21]"
          style={{
            clipPath: isHovered 
              ? `circle(150% at ${entryPoint.x}px ${entryPoint.y}px)`
              : `circle(0% at ${exitPoint.x}px ${exitPoint.y}px)`,
            transition: isHovered 
              ? 'clip-path 600ms cubic-bezier(0.33, 1, 0.68, 1)'  // Slower enter
              : 'clip-path 300ms cubic-bezier(0.33, 0, 0.67, 1)'  // Faster exit
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-white text-[1.35rem] font-bold text-center mb-[0.6rem]">
            {title}
          </h2>
          <p className="text-[#929292] text-center leading-[1.4rem] mx-auto w-[96%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;