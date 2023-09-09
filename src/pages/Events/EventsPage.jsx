import React from 'react'
import Toolbar from '../../components/Toolbar'
import Header from '../Courses/Header'
import Breadcrumbs from './EventBread.jsx'
import EventElems from './EventElems'
import Footer from '../../components/Footer'

function EventsPage() {
  return (
    <body className="inner-page">
     <div className="full-width-header">
        <Toolbar/>
      <Header/>
      </div>
      <Breadcrumbs
    pageName={"Events"}
    />
    <EventElems/>
    <Footer/>
      </body>
  )
}

export default EventsPage