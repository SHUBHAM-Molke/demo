import React from 'react';
import Link from 'next/link';


const Banner = () => {


  return (
    <div className="relative h-screen bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-10 p-5"
        src="/files/intro.mp4"  // Ensure you place your video in the public directory
        autoPlay
        loop
        muted
      />
      
    </div>
  );
};

export default Banner;
