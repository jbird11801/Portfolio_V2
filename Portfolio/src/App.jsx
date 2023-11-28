import Nav from './componets/nav';

import './app.css';

import Footer from './componets/footer.jsx';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    
    <>

   <Nav/>

   <Outlet/>

   <Footer/>

   </>

  )

}

export default App
