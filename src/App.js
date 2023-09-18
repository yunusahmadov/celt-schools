import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import TestPage from './pages/TestPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses/Courses'
import Contacts from './pages/Contacts/Contacts'
import EventsPage from './pages/Events/EventsPage'
import ErrorPage from './components/ErrorPage'
import StudentsPage from './pages/Students/StudentsPage'
import ScrollToTopButton from './components/ScrollToTop'
import Preloader from './components/Preloader'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTopButton />
        <Preloader />
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route path='/courses' element={<Courses />}  />
          <Route path='/contacts' element={<Contacts />}  />
          <Route element={<EventsPage />} path='/events' />
          <Route element={<StudentsPage />} path='/graduates' />
          <Route element={<ErrorPage />} path='*' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App