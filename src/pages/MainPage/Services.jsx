import React from 'react'
import ServicesCard from './ServicesCard'
import { az_lang } from '../../language/language'
import { useSelector } from 'react-redux'

function Services() {
    const language=useSelector((state)=>state.language.value)
  return (
       <div className="rs-services rs-services-style1">
        <div className="container">
            <div className="row">
            <ServicesCard
                serviceIcon="fa fa-american-sign-language-interpreting rs-animation-scale-up"
                serviceTitle={language.servicesTrend}
                serviceDesc="Lorem ipsum dolor sit amet Sed nec molestie justo"
            />
                        <ServicesCard
                serviceIcon="fa fa-book rs-animation-scale-up"
                serviceTitle={language.servicesAcceptance}
                serviceDesc="Lorem ipsum dolor sit amet Sed nec molestie justo"
                />
                <ServicesCard
                serviceIcon="fa fa-user rs-animation-scale-up"
                serviceTitle={language.servicesStudents}
                serviceDesc="Lorem ipsum dolor sit amet Sed nec molestie justo"
                />
                 <ServicesCard
                serviceIcon="fa fa-graduation-cap rs-animation-scale-up"
                serviceTitle={language.servicesDiplom}
                serviceDesc="Lorem ipsum dolor sit amet Sed nec molestie justo"
                />
            </div>
        </div>
    </div>
  )
}

export default Services