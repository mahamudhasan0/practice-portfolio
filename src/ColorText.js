import React from 'react'
import Typed from 'react-typed'
import {Link} from 'react-scroll'
import './ColorText.css'

function ColorText() {
    return (
        <div className='colorWrapper'>
            <h1 className='hello'>
                Hello,<span className='iam'>I'm</span>
            </h1>
       
            <div className='text-container'>
                <h1 className='bachelor'>Mahamud Hasan</h1>
            </div>

            <div>
                <Typed
                    strings={[

                        '<strong>You Can Call Me</strong> Engineer',
                        '<strong>You Can Call Me</strong> Developer',
                        '<strong>You Can Call Me</strong> Full Stack Developer',
                        // space deya lagbe strong er por products er age na hle search for er pore gayer sathe lege thakbe porer word 
                        ]}
                    typeSpeed={125}
                    backSpeed={125}
                    loop
                    className='TyperText'
                />
            </div>
            
                  <Link to="home" spy={true} smooth={true} className='btn55'>Read More</Link>
           
        </div>
    )
}

export default ColorText
