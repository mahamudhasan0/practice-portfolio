import React,{useState,useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { TaskListContext } from './Context'
import DarkMood from './DarkMood'
import {Link} from 'react-scroll'
import './Navbar.css'

function Navbar() {
    const {user} =useContext(TaskListContext)
    const [show,setShow] = useState(false)
    const ClickedShow = () =>{
        setShow(!show)
    }
    return (
        // header sticky korar jonno must component ta k onno div dye wrap kora jabe na but fragment dye kora jbe
       <>
            <div className='wrapper'>
                    <div className='navLinks' id='home'>
                        <ul>
                            <li className='active'>Home</li>
                            <li><Link to="about1" spy={true} smooth={true}>About</Link></li>
                            <li><Link to="toys" spy={true} smooth={true}>Toys</Link></li>
                            <li><Link to="todo" spy={true} smooth={true}>ToDo List</Link></li>
                            <li><Link to="login" spy={true} smooth={true}>Hello {user}</Link></li>
                        </ul>
                    </div>    
           <DarkMood/>
           </div>
           <div className='bars-icon'>
                 <FaBars onClick={ClickedShow}/>
            </div>
        {
                    show && (
                        <div className='menu'>
                            <ul className='dropUl'>
                                <li className='activeMenu'>Home</li>
                                <li>About</li>
                                <li>Projects</li>
                                <li>ToDo List</li>
                                <li>Hello {user}</li>
                            </ul>
                        </div>
                    )
                }
       </>
    )
}

export default Navbar
