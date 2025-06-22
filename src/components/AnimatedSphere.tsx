
import React, { useEffect } from 'react';

const AnimatedSphere = () => {
  useEffect(() => {
    const slider = document.getElementById('rangeSlider');
    const svg = document.querySelector('feTurbulence');

    const handleSliderChange = function(this: HTMLInputElement) {
      const value = this.value;
      if (svg) {
        svg.setAttribute('numOctaves', value);
      }
    };

    if (slider) {
      slider.addEventListener('input', handleSliderChange);
    }

    return () => {
      if (slider) {
        slider.removeEventListener('input', handleSliderChange);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* Controls */}
      <div className="absolute z-50 bg-black/70 text-white p-4 rounded">
        <p className="mb-2">Complexity</p>
        <input 
          type="range" 
          id="rangeSlider" 
          min="0" 
          max="5" 
          defaultValue="1"
          className="w-full"
        />
      </div>

      {/* Background container */}
      <div className="w-full h-full overflow-hidden bg-black">
        <canvas className="liquid-canvas"></canvas>
      </div>

      {/* SVG filter */}
      <svg className="absolute inset-0 w-0 h-0">
        <filter id="swirl">
          <feTurbulence
            baseFrequency="0.01"
            numOctaves="1"
            result="wrap"
            type="fractalNoise">
          </feTurbulence>
          
          <feDisplacementMap
            id="liquid"
            className="liquid"
            in="SourceGraphic"
            in2="wrap"
            scale="300"
            xChannelSelector="R"
            yChannelSelector="B">
           </feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};

export default AnimatedSphere;
