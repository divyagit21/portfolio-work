import React from 'react'

const Header = () => {
  return (
    <>
      <div className='header'>
        <a href="#home"><p>Home</p></a>
        <a href="#skills"><p>Skills</p></a>
        <a href="#projects"><p>Projects</p></a>
        <a href="#contact"><p>Contact</p></a>
      </div>
      <StyleSheet />
    </>
  )
}
const StyleSheet = () => {
  return (
    <style>{`
            .header{
            color:var(--secondary-color);
            display:flex;
            flex-direction:row;
            flex-wrap:nowrap;
            align-items:center;
            justify-content:center;
            font-size:var(--30px);
            gap:var(--40px);
            padding:var(--16px);
            }
            @media (max-width:500px){
              .header{
                font-size: var(--20px);
              } 
            }
            @media (max-width:395px){
              .header{
                font-size: var(--15px);
              } 
            }
            a{
               text-decoration:none;
               color:inherit;
            }
        `}</style>
  )
}
export default Header