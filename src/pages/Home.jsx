import React from 'react'
import Header from '../components/Header'
import Info from '../components/Info'
import Corner_lines from '../components/Corner_lines'
const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                    <Header/>
                <div className='header-info'>
                    <Info/>
                </div>
                <div className='corner-lines'>
                    <Corner_lines/>
                </div>
            </div>
            <StyleSheet/>
        </>
    )
}
const StyleSheet=()=>{
    return (
        <style>{`
          .home{
        //   background-color: red;
          // display:flex;
          // flex-direction:row;
          position:relative;
          height:100vh;
          width:100%;
          }   
        //   .header-info{
        //     flex-direction:column;
        //     // background-color:blue;
        //   } 
        //   .header-info,.corner-lines{
          // flex:1;
        //   } 
        //   .corner-lines{
        //   top:0;
        //   width:100vh;
        //   }
        `}</style>
    )
}
export default Home