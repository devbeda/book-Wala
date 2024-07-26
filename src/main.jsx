import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Courses from './pages/Courses/Courses.jsx'
import Signup from './pages/Signup/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>} >
       <Route path='/' element={<Home/>}/>
       <Route path='/courses' element={<Courses/>}/>
       <Route path='/signup' element={<Signup/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='dark:bg-slate-900 text-white'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
