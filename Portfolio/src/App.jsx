import Nav from './componets/nav';

import Footer from './componets/footer.jsx';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    
    <section className='whiteBackground'>

   <Nav/>

   <Outlet/>

   <Footer/>

   </section>

  )

}

export default App
