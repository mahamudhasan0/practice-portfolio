import React from 'react'
import {ProjectsList} from './ProjectData'
import './Project.css'

function Projects() {
    return (
        <div className='projectsWrapper'  id='toys'>
            <div className='nameinfo' >
                <h2 className='about'>Toys</h2>
                <div className='div-bottom'></div>
            </div>
           <div className='productBox'>
           {
            ProjectsList.map(({img,alt,Price})=>{
                   return(
                       <div 
                       key={img}
                       className='listProducts'
                       >
                           <img className='imgg' src={img} alt={alt} />
                           <h3 className='prod1'>Price: ${Price}</h3>
                       </div>
                   )
               }) 
            }
           </div>
        </div>
    )
}

export default Projects
