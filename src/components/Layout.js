import { Link, Outlet } from 'react-router-dom'

import './Layout.css';

function Layout() {
  return (
    <>
      <header className="links">
        <Link to="/garden">Simple1</Link>
        <Link to="/garden/simple2">Simple2</Link>
        <Link to="/garden/overloaded">Overloaded</Link>

        <Link to="/garden/ionic/simple1">IonicSimple1</Link>
        <Link to="/garden/ionic/simple2">IonicSimple2</Link>
        <Link to="/garden/ionic/overloaded">IonicOverloaded</Link>
      </header>

      <Outlet />

      <footer>2023</footer>
    </>
  )
}

export default Layout