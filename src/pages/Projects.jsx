import React, { useEffect } from 'react'
import Scroll_cards from '../components/horizantal/Scroll_cards'

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <Scroll_cards />
            <StyleSheet />
        </div>
    )
}
const StyleSheet = () => {
    return (
        <style>{` 
        .projects{
        // height:350vh;
        width:100%;
        position:relative;
        // background-color:pink;
        }  
        `}</style>
    )
}
export default Projects
