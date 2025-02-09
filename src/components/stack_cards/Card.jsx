import React,{useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const Card = ({ img, index,targetScale }) => {
  const ref=useRef();
  const {scrollYProgress}=useScroll({target:ref, offset: ['start end', 'start start']});
  const scale=useTransform(scrollYProgress,[0,1],[1,targetScale])
  const imgscale=useTransform(scrollYProgress,[0,1],[2,1])
  const opacity=useTransform(scrollYProgress,[0,1],[0.5,1])
  return (
    <>
        <div className='card' ref={ref}>
          <motion.div className='card-border' style={{position:'relative',top:`calc(-10% + ${index*30}px)`,scale}}>
            <div className='outer-image'>
              <motion.div className='image' style={{opacity,imgscale}}>
                <img src={img} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      <StyleSheet/>
    </>
  )
}
const StyleSheet = () => {
  return (
    <style>{`
      .card{
        margin-top:50%;
        height:100vh;
        position:sticky;
        top:10%;
      }
      .card-border{
        background-color:var(--primary-color);
        position:relative;
        width: clamp(15rem,calc(40vw + 5rem),35rem);
        height:clamp(15rem,calc(40vw + 5rem),35rem);
        border:3px solid #fff4d6;
        box-shadow: 0 10px 20px #fff4d6; 
        border-radius:25px;
      }
      .outer-image{
         height:100%;
         weight:100%;
         padding:5%;
         position:relative;
         overflow:hidden;
        border-radius:25px;
      }
      img{
         aspect-ratio:1;
          object-fit: contain;
          width: 100%;
      }
      .image{
           height: 100%;
            width: 100%;
      }
            @media (max-width:768px){
            .card{
               margin-top:0%;
               height:60vh;
            }
            @media (max-width:768px){
            .card{
               margin-top:0%;
               height:70vh;
            }
               .card-border{
                 width: clamp(15rem,calc(40vw + 5rem),25rem);
                 height:clamp(15rem,calc(40vw + 5rem),22rem);
               }
            }
    `}</style>
  )
}
export default Card
