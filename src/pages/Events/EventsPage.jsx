import React from 'react'
import Toolbar from '../../components/Toolbar'
import Breadcrumbs from './EventBread.jsx'
import EventElems from './EventElems'
import Footer from '../../components/Footer'
import Header from '../MainPage/Header'
import RightMenuToggle from '../MainPage/RightMenuToggle'

function EventsPage() {
  return (
    <body className="home1">
     <div className="full-width-header">
      <Header/>
      </div>
      <RightMenuToggle/>
      <Breadcrumbs
    pageName={"Events"}
    />
    <EventElems/>
    <Footer/>
      </body>
  )
}

export default EventsPage