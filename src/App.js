import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import TestPage from './pages/TestPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses/Courses'
import Contacts from './pages/Contacts/Contacts'
import EventsPage from './pages/Events/EventsPage'

function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
  <Route element={<MainPage />} path='/'/>
  <Route element={<Courses />} path='/courses'/>
  <Route element={<Contacts />} path='/contacts'/>
  <Route element={<EventsPage />} path='/events'/>



</Routes>
   </BrowserRouter>
  </>
  )
}

export default App