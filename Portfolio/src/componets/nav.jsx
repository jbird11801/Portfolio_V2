
import { Link , useLocation } from 'react-router-dom';

import "./nav.css"

function Nav () {

     const currentPage = useLocation().pathname;
    
    return (

        <section className=' is-flex is-justify-content-space-between has-background-primary is-align-items-center is-family-monospace' id='navbar'>

            <h1 className=' is-size-3 pl-4'>Jarod Fredette</h1>

            <ul className='is-flex pr-4'>

                <li className='px-1'>

                    <Link to="/"
                    
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    
                    >Home</Link> 

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

                    <Link to="/Resume"
                    
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        
                    >Resume</Link>

                </li>

            </ul> 

            
        </section>
    )
}

export default Nav;