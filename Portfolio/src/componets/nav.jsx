
import { Link , useLocation } from 'react-router-dom';

import { useState } from 'react';

import "./nav.css"

function Nav () {

    const currentPage = useLocation().pathname;

    const [clicked, setClicked] = useState(false); 

    const fliper = () => {

        setClicked(!clicked)

    }
    
    return (

        <section className=' is-flex is-justify-content-space-between has-background-primary is-align-items-center is-family-monospace' id='navbar'>

            <h1 className=' is-size-3-desktop is-size-5-touch pl-4'>Jarod Fredette</h1>

            <ul className='is-flex pr-4 is-hidden-touch'>

                <li className='px-1'>

                    <Link to="/"
                    
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    
                    >About</Link> 

                </li>
 
                <li className='px-1' >

                    <Link to="/Work"
                    
                    className={currentPage === '/Work' ? 'nav-link active' : 'nav-link'}
                    
                    >Work</Link> 

                </li>

                <li className='px-1'>

                    <Link to="/Contact"
                    
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                        
                    >Contact Me</Link> 

                </li>

                <li className='pl-1'>

                    <Link target="_blank" to="https://docs.google.com/document/d/127uL0AoLE1n5DqXq2O0DRlHrvjfGfHWRb8gtwUgns7Q/edit?usp=sharing"
                    
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        
                    >Resume</Link>

                </li>

            </ul> 

   <        section className={clicked === true ? 'dropdown is-right is-active is-hidden-desktop' : 'dropdown is-hidden-desktop'}>

                    <button onClick={fliper} id='Menu' className="dropdown-trigger" aria-haspopup="true" aria-controls="dropdown-menu3" >

                        <span className="icon is-small">

                            <i className="fa-solid fa-bars"></i>

                        </span>

                    </button>

                <div className="dropdown-menu" id="dropdown-menu3" role="menu">

                    <div className="dropdown-content whiteBackground">

                            <Link to="/"
                            
                            onClick={fliper} className={currentPage === '/' ? 'nav-link dropdown-item active' : 'nav-link dropdown-item'}
                            
                            >About</Link> 

                            <Link to="/Work"
                            
                            onClick={fliper} className={currentPage === '/Work' ? 'nav-link dropdown-item active' : 'nav-link dropdown-item'}
                            
                            >Work</Link>

                            <Link to="/Contact"
                    
                            onClick={fliper} className={currentPage === '/Contact' ? 'nav-link dropdown-item active' : 'nav-link dropdown-item'}
                        
                            >Contact Me</Link> 

                            <Link to="/Resume"
                            
                            onClick={fliper} className={currentPage === '/Resume' ? 'nav-link dropdown-item active' : 'nav-link dropdown-item'}
                                
                            >Resume</Link>
                    
                    </div>

                </div>

            </section>
            
        </section> 

    )
}

export default Nav;