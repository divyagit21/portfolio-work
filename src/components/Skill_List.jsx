import React from 'react';

const skills = [
  'Java', 
  'Python', 
  'HTML, CSS', 
  'JavaScript', 
  'ReactJS', 
  'Node.js', 
  'Express.js', 
  'MongoDB, SQL', 
  'GitHub', 
  'Figma', 
  'AWS'
];


const Skill_List = ({isSticky}) => {
  return (
    <>
    
      <div className="skill-list-wrapper"
       style={{ position: `${isSticky ? 'sticky' : ''}` }}
      >

        <ul>
      <div className='skills-heading'>Skills</div>
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <span className="skill-name">{skill}</span>
            </li>
          ))}
        </ul>

        <style>{`
          .skill-list-wrapper {
            color: #fff4d6;
            padding: 1.5rem;
            border-radius: 0.5rem;
            width: 20rem;
            position: relative; 
          }

          .skill-list-wrapper ul {
            list-style-type: none;
            padding-left: 0;
          }

          .skill-item {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
          }

          .skill-name {
            margin-left: 0.5rem;
        color: var(--tertiary-color);
        font-weight:bold;
          }

          .skill-list-wrapper {
            position: sticky;
            top: 0%;
            height: 100vh;
            z-index: 10;
            left: 10%;
            font-size: clamp(0.8rem, calc(2vw + 1rem), 2rem);
            padding: 1.25rem;
          }
                    .skills-heading{
        color: var(--secondary-color);
        display: flex;
        padding-bottom: 20px;
        font-size: clamp(1rem, calc(4vw + 1rem), 3rem);
        }
        @media (max-width: 768px) {
          .skills{
            flex-direction: column; 
            gap: 2rem;
            }
            .title {
              position:static;
            } 
            @media (max-width: 768px) {
            .skill-list-wrapper {
              width: 80%;
              position: relative; 
              height: auto;
              top: 0; 
              left: 0; 
              display:flex;
              align-items:center;
              justify-content:center;
            }
          }
          }
        `}</style>
      </div>
    </>
  );
};

export default Skill_List;
