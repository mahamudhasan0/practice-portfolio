import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Projects from './Projects'
import Contact from './Contact'
import ToDo from './ToDo'
import './Home.css'
import image from './images/mahamudpic.jpg'
//https://animate.style
function Home() {

    return (
        <div className='home'  id='about1'>
            <div className='about-bottom'>
                <h2 className='about'>About</h2>
                <div className='div-bottom'></div>
            </div>
            <div className='para-img'>
              <div className='paraText'>
                  <div className='lol'>
                  <ScrollAnimation
                  // animateOnce={true}   on scroll e bar bar na ese ak bar e animation hbe true korle
                   animateIn="animate__fadeInUp"
                   >
                   <div className='aboutText' id='about1'>
                    
                    <p className='justifyText'> 
                        I'm a React Front End Developer.
                        I'm a Node js Back End Developer.
                        I Have Good Knowledge about Animations.
                    </p>
                   </div>
                   </ScrollAnimation>
                  </div>
              </div>

              <div 
              className='indexImg'
              >
                <div>
                   <img src={image} alt=''/>
                </div>
              </div>
            </div>


                {/* Projects */}

            <Projects/>
            <div className='about-bottom' id='todo'>
                <h2 className='about'>ToDo Lists</h2>
                <div className='div-bottom'></div>
            </div>
            {/* Todo */}
            <ToDo/>
           {/* contact */}
            <div className='contact'>
                <div className='about-bottom'>
                    <h2 className='about'>Contact</h2>
                    <div className='div-bottom'></div>
                </div>

                <div className='userForm'>

                <Contact/>

                </div>

                {/* <div className='contact'>
                    <ScrollAnimation
                  // animateOnce={true}   on scroll e bar bar na ese ak bar e animation hbe true korle
                   animateIn="animate__fadeInLeft"
                   >
                    <address>
                        <h2 className='about'>rakibrony@gmail.com</h2>
                        <h2 className='about'>Jibannagar,Chuadanga</h2>
                        <h2 className='about'>postal code 1300</h2>
                        <h2 className='about'>01997513691</h2>
                    </address>
                    </ScrollAnimation>

                </div> */}
                    

            </div>
        </div>
    )
}

export default Home
