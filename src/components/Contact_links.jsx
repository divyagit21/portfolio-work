import React, { useRef, useEffect, useState } from 'react';

const Contact_links = () => {
    const ref1 = useRef();
    const [pos1, setPos1] = useState({ x1: 0, y1: 0 });
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const func1 = (e) => {
            const x1 = e.clientX;
            const y1 = e.clientY;
            setPos1({ x1, y1 });
        };
        window.addEventListener('mousemove', func1);

        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('mousemove', func1);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const windowCenter = windowHeight / 2;

    const transY1 = 0.007 * (pos1.y1 - windowCenter);
    const transY2 = -0.009 * (pos1.y1 - windowCenter);
    return (
        <>
            <div className='contact'>
                <div className='contact_title'>Contact</div>
                <div className="icon-items">
                    <a
                        href="https://www.linkedin.com/in/mittasaidivya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-item"
                    >
                        <img className='image' src="/images/linkedin.png" alt="LinkedIn" />
                    </a>
                    <a
                        href="https://github.com/divyagit21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-item"
                    >
                        <img className='image' src="/images/git.png" alt="GitHub" />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1bn_P70jDBCeqOy9cgVpvNCy4dq_8sqSI/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-item"
                    >
                        <img className='image' src="/images/resume.png" alt="Resume" />
                    </a>
                    <a
                        href="mailto:mittasaidivya21@gmail.com"
                        className="icon-item"
                    >
                        <img className='image' src="/images/email.png" alt="Email" />
                    </a>
                </div>
                <div
                    style={{
                        width: '40%',
                        height: '1px',
                        position: 'relative',
                        backgroundColor: '#fff4d6',
                        top: '30%',
                        left: '40%',
                        rotate: `${transY1}deg`,
                    }}
                    ref={ref1}
                >
                    <div
                        style={{
                            width: '100%',
                            height: '1px',
                            position: 'absolute',
                            backgroundColor: '#fff4d6',
                            rotate: `${transY2}deg`,
                        }}
                        ref={ref1}
                    >
                    </div>
                </div>
            </div>
            <StyleSSheet />
        </>
    )
}
const StyleSSheet = () => {
    return (
        <style>{`
        .lines{
           display:flex;
        }    
        .contact{
          height:40vh;
          width:100%;
          color:var(--secondary-color);
          position:relative;
        }
        .contact_title{
           color: var(--secondary-color);
        padding: 20px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: clamp(1rem, calc(4vw + 1rem), 3rem);
        }
        .icon-items {
        display: flex;
        gap: 4%;
        position: relative;
        margin-left: 48%;
        top: 15%;
      }
      .icon-item {
        height: 8vh;
        width: 8%;
        background-color: #fff4d6;
        border-radius: 10px;
      }
      .icon-item .image {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
        `}</style>
    )
}
export default Contact_links
