import React, { useRef } from 'react'
import projects from './projects'
import Cards from './Cards'
import { motion, useScroll, useTransform } from 'framer-motion'
const Scroll_cards = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref
    })
    const translateX = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
    return (
            <div className='project-container' ref={ref} >
                <div className='pro_card'>
                <div className='project-title'> Projects</div>
                    <motion.div className='scroll_cards' style={{ translateX: translateX }}>
                        {projects.map((project, index) => {
                            return <Cards {...project} key={index} index={index} />
                        })}
                    </motion.div>
                </div>
                <StyleSheet />
            </div>
    )
}
const StyleSheet = () => {
    return (
        <style>{`
             .project-title{
        color: var(--secondary-color);
        padding: min(8%,1.5rem);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(1rem, calc(4vw + 1rem), 3rem);
        }  
            .project-container{
                height:350vh;
                }
                .pro_card{
                    height:30%;
                    position:sticky;
                    top:0;
                    overflow:hidden;
                    }
                .scroll_cards{
                    width:250%;
                    display: flex;
                    top:0;
                    padding:2%;
                     margin-top:clamp(0rem, calc(4vw + 1rem), 4rem);
                    gap:min(20rem,8%);
                    position:relative;
                }
                @media (max-width:410px){
                  .scroll_cards{
                     gap:2.5rem;
                  }
                }
            `}</style>
    )
}
export default Scroll_cards
