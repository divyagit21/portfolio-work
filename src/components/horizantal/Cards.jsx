import React from 'react'
const Cards = ({ title, desc, index }) => {
    return (
        <>
            <div className='cards'>
                <div className='project-name'>
                    <div>{title}</div>
                </div>
                <div className='desc'>
                    {desc}
                </div>
            </div>
            <StyleSheet />
        </>
    )
}
const StyleSheet = () => {
    return (
        <style>{`
            .cards{
              width:15%;
              left:min(4rem,2%);
              right:min(4rem,2%);
              color:var(--secondary-color);
              border-radius:20px;
              box-shadow:1px 1px 10px 2px #fff4d6;
              display:flex;
              flex-direction:column;
              gap:10px;
              padding:1.5rem;
            }
            .project-name{
            font-size: clamp(0.5rem,calc(3vw + 1rem),2.5rem);            
            text-transform: uppercase;
            }
            .desc{
            color:var(--tertiary-color);
            font-size: clamp(0.2rem,calc(1vw + 0.5rem),1.2rem); 
            }
        `}</style>
    )
}
export default Cards
