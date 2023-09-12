import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import CountUpNumbers from './CountUpNumbers';
import { useSelector } from 'react-redux';

function CountUpSection() {
    const language=useSelector((state)=>state.language.value)






  return (
    <div className="rs-counter pt-100 pb-70 bg3">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="counter-content">
                    <h2 className="counter-title">{language.acheivementsTitle}</h2>
                    <div className="counter-text">
                        {/* <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart like mine.</p> */}
                    </div>
                    <div className="counter-img rs-image-effect-shine">
                        <img src="images2/1.jpg" alt="Counter Discussion"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-80">
                <div className="row">
                    <div className="col-md-6">
                        <div className="rs-counter-list">
                            <h2 className="counter-number plus">
                            <CountUpNumbers start={0} end={60} duration={2000} /></h2>                  
                            <h4 className="counter-desc">{language.achTeacher}</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="rs-counter-list">
                            <h2 className="counter-number plus">
                            <CountUpNumbers start={0} end={40} duration={2000} /></h2>
                            <h4 className="counter-desc">{language.achCourses}</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="rs-counter-list">
                            <h2 className="counter-number plus">
                            <CountUpNumbers start={0} end={900} duration={1000} />
                                </h2>                  
                            <h4 className="counter-desc">{language.achStudents}</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="rs-counter-list">
                            <h2 className="counter-number plus">
                            <CountUpNumbers start={0} end={3675} duration={1000} />
                            </h2>
                            <h4 className="counter-desc">{language.achClient}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CountUpSection