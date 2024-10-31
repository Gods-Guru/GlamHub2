import React from 'react';
// import '../App.css';
import {useEffect, useRef}  from "react";

export default function Brands(){
  const containerRef = useRef(null);

  useEffect(() => {
        //The current container that div has scrolled to
        const container = containerRef.current
        const scrollSpeed = 5
        let animationFrameId

        const scroll = () => {
            container.scrollLeft += scrollSpeed
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0
            }
            animationFrameId = requestAnimationFrame(scroll)
        }

        animationFrameId = requestAnimationFrame(scroll)

        // return () => cancelAnimationFrame(animationFrameId)
    }, [])
  return (
    <section className='logos'>
      <div className="logos-wrap" ref={containerRef}>
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
        <img src="../assets/Logos/logo1.png" alt="" className='logo' />
      </div>
    </section>
  );}
