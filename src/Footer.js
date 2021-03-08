import React from 'react'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {Link} from 'react-scroll'
import {CgCopyright} from 'react-icons/cg'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='arrowUp'>
              <Link
                  to="scroll-to-top" 
                  spy={true} 
                  smooth={true}
              >
                   <FaArrowAltCircleUp className="scrollTop"/>
              </Link>
            </div>
            <div className='logo'>
                <AiOutlineFacebook className='logos'/>
                <AiFillLinkedin className='logos'/>
                <FaInstagram className='logos'/>
                <AiFillTwitterSquare className='logos'/>
            </div>
           <div className='footerInfo'>
             <h1 className='info'>Mahamud Hasan</h1>
             <CgCopyright className='copywrite'/>
             <p className='p'>2020</p>
           </div>
        </div>
    )
}

export default Footer
