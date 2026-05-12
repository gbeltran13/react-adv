import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import {Routes as routesNav} from "./routes"
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback = {<span>Cargando ...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routesNav.map(({to, name}) => (
                  <li key={to}> 
                    <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routesNav.map(({to, path, Component}) => (
                <Route key={to} path={path} element={<Component/>} />
              ))
            }
            <Route path='/*' element = {<Navigate to= {routesNav[0].to} replace />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  )
}
