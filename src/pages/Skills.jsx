import React,{useEffect} from 'react';
import Skill_List from '../components/Skill_List';
import Stack_Cards from '../components/stack_cards/Stack_Cards';

const Skills = () => {
  return (
    <>
        <div className='skills' id='skills'>
          <Skill_List />
          <Stack_Cards />
        </div>
        <StyleSheet />
    </>
  );
}

const StyleSheet = () => {
  return (
    <style>{`
       .skills{
        display: flex;
        flex-direction: row;
        color: var(--secondary-color);
        gap:20%;
       }  
        .skills-align{
          flex-direction: row;
          gap: clamp(1rem, 5vw, 100px); 
          flex-wrap: wrap;
          background-color:orange;
        }
        @media (max-width: 768px) {
          .skills{
            flex-direction: column; 
          }
        }
    `}</style>
  );
}

export default Skills;
