import Nav from './componets/nav'

import { Outlet } from 'react-router-dom';

function App() {

  return (
    
    <>

   <Nav/>

   <Outlet/>

   </>

  )

}

export default App
