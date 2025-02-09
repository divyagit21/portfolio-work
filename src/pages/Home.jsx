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
          position:relative;
          height:100vh;
          width:100%;
          }   
        `}</style>
    )
}
export default Home