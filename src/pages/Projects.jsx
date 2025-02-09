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
        width:100%;
        position:relative;
        }  
        `}</style>
    )
}
export default Projects
