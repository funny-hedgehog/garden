import { Link, Outlet } from 'react-router-dom'

import './Layout.css';

function Layout() {
  return (
    <>
      <header className="links">
        <Link to="/">Simple1</Link>
        <Link to="/simple2">Simple2</Link>
        <Link to="/overloaded">Overloaded</Link>

        <Link to="/ionic/simple1">IonicSimple1</Link>
        <Link to="/ionic/simple2">IonicSimple2</Link>
        <Link to="/ionic/overloaded">IonicOverloaded</Link>
      </header>

      <Outlet />

      <footer>2023</footer>
    </>
  )
}

export default Layout