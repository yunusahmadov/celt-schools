import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import TestPage from './pages/TestPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses/Courses'

function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
  <Route element={<MainPage />} path='/'/>
  <Route element={<Courses />} path='/courses'/>
</Routes>
   </BrowserRouter>
  </>
  )
}

export default App