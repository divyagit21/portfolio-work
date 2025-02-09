import React,{useState,useEffect} from 'react'
import Type from './Type_Effect/Type'

const Info = () => {
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const containerHeight = windowWidth < 768 ? '60%' : windowWidth < 1024 ? '75%' : '100%';
      useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return (
        <>
            <div className='info' >
                <div className='info1'>
                   <div> I am</div>
                    <div>Mitta Sai Divya</div>
                </div>
                <div className='info2'>
                    <Type/>
                </div>
            </div>
            <StyleSheet />
        </>
    )
}
const StyleSheet = () => {
    return (
        <style>{`
            .info {
                display: flex;
                flex-direction: column;
                margin-top:clamp(0rem, calc(4vw + 1rem), 4rem);
                margin-left:min(16rem,15%);
                margin-right:min(16rem,15%);
                position: relative;
                text-align: center;
                gap:2%;
            }
            .info1 {
                font-size: clamp(0.8rem, calc(4vw + 1rem), 4rem);
                color: var(--secondary-color);
            }
            .info2 {
                font-size: clamp(0.2rem,calc(1vw + 0.5rem),1.2rem); 
                width:80%;
                margin-left: auto;
                margin-right: auto;
                line-height: 1.5;
                text-align: center;
                color: var(--tertiary-color);
            }

            @media (max-width:500px){
               .info{
                margin-top:clamp(0rem, calc(1vh + 0.2rem), 4rem);
               }
                .info1{
                font-size: clamp(0.2rem, calc(4vh + 0.2rem), 4rem);
                }
                .info2{
                font-size: clamp(0.2rem,calc(3vh + 0.2rem),1.2rem); 
                }
            }
        `}</style>
    )
}

export default Info
