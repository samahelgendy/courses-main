import React from 'react'
import zaya from '../assets/zaya.webp'
import arrived from '../assets/arrives.webp'
import be from '../assets/be-s.webp'
import target from '../assets/target.webp'
import first from '../assets/first.webp'
const Posters = () => {
  return (
    <div className="w-full h-auto   flex flex-col justify-start items-center mt-12 lg:px-12 xs:px-2">
      <div className="w-full h-auto  mb-4">
        <img src={zaya} alt="zaya" />
      </div>
      <div className="arrived w-full h-auto ">
        <img src={arrived} alt="arrived" />
      </div>
      <div className="arrived w-full h-auto ">
        <img src={be} alt="be" />
      </div>
      <div className="arrived w-full h-auto ">
        <img src={target} alt="target" />
      </div>
      <div className="arrived w-full h-auto ">
        <img src={first} alt="first" />
      </div>
    </div>
  );
}

export default Posters