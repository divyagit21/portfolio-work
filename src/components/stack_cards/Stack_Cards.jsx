import React,{useRef,useEffect} from 'react'
import projects from './data'
import Card from './Card'
import {motion, useTransform,useScroll} from 'framer-motion'
import Lenis from 'lenis'
const Stack_Cards = () => {
  const ref=useRef()
  const {scrollYProgress}=useScroll({target:ref, offset: ['start end', 'start start']});
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div className='stack-cards' ref={ref}>
            <motion.div className='item'>
              {projects.map((project, index) => {
                const targetScale=1 - ((projects.length - index) * 0.07);
                return <Card {...project} key={index} index={index} targetScale={targetScale}/>
              })}
            </motion.div>
      </div>
      <StyleSheet />
    </>
  )
}
const StyleSheet = () => {
  return (
    <style>{`
      .stack-cards{
        display:flex;
        position:relative;
        top:25%;
        align-items:center;
        justify-content:center;
      }
        @media (max-width:768px){
          .stack-cards{
        height: 300vh;   

          }
        }
    `}</style>
  )
}
export default Stack_Cards
