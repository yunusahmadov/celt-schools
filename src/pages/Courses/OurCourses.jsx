import React, { useState } from 'react'
import { az_lang } from '../../language/language'
import CoursesCard from './CoursesCard'
import { useSelector } from 'react-redux'
import math from "../../images/courseImages/math.jpg"
import physic from "../../images/courseImages/physics.jpg"
import chemistry from "../../images/courseImages/chemistry.jpg"
import biology from "../../images/courseImages/biology.jpg"
import economics from "../../images/courseImages/economics.jpg"
import business from "../../images/courseImages/business2.jpg"
import accounting from "../../images/courseImages/accounting.jpg"
import geography from "../../images/courseImages/geography.jpg"
import IT from "../../images/courseImages/IT.jpg"
import englang from "../../images/courseImages/englang.jpg"
import leader from "../../images/courseImages/leader.jpg"
import environment from "../../images/courseImages/environment.jpg"
import studcanada from "../../images/courseImages/studentincanada.jpg"
import economicissues from "../../images/courseImages/economicissues.jpg"
import lawstud from "../../images/courseImages/law-students-in-class.jpeg"
import families from "../../images/courseImages/families.jpg"
import society from "../../images/courseImages/society.jpg"
import fashion from "../../images/courseImages/fashion.jpg"
import compsciense from "../../images/courseImages/computer_science.jpg"
import calculus from "../../images/courseImages/Calculus-class.jpg"
import nutrition from "../../images/courseImages/nutriotion.jpg"
import comunication from "../../images/courseImages/comunication.png"






















function OurCourses() {
const language=useSelector((state)=>state.language.value)
const [showHs,setShowHS]=useState(false)

  
  return (
    <div id="rs-courses-3" className="rs-courses-3 sec-spacer">
    <div className="container">
    <div className="btn-tabs">
      <button className={`${showHs?'inactive-tab':'active-tab'}`}  onClick={()=>setShowHS(false)}>A Level Diplomu</button>
      <button className={`${showHs?'active-tab':'inactive-tab'}`} onClick={()=>setShowHS(true)}>HS Diplomu  </button>

    </div>
      <div className="course-container">
        {
          showHs?
          <>
           <CoursesCard 
          courseName={'Financial Accounting Principles (M)'}
          courseImage={accounting}/>
            <CoursesCard 
          courseName={'International Business Fundamentals (M)'}
          courseImage={business}/>
            <CoursesCard 
          courseName={'Business Leadership (M)'}
          courseImage={leader}/>
            <CoursesCard 
          courseName={'Environment Resource Management (M)'}
          courseImage={environment}/>
            <CoursesCard 
          courseName={'Canadian and World Issues (U)'}
          courseImage={studcanada}/>
            <CoursesCard 
          courseName={'Analysing Current Economic Issues (U)'}
          courseImage={economicissues}/>
            <CoursesCard 
          courseName={'Canadian and International Law (U)'}
          courseImage={lawstud}/>
            <CoursesCard 
          courseName={'English (U)'}
          courseImage={englang}/>
            <CoursesCard 
          courseName={'Nutrition and Health (U)'}
          courseImage={nutrition}/>
            <CoursesCard 
          courseName={'Families in Canada (U)'}
          courseImage={families}/>  
          <CoursesCard 
          courseName={'Fashion (M)'}
          courseImage={fashion}/>  
          <CoursesCard 
          courseName={'Challenge and Change in Society (U)'}
          courseImage={society}/>  

<CoursesCard 
          courseName={'Computer Science (U)'}
          courseImage={compsciense}/>  
            <CoursesCard 
          courseName={'Calculus and Vectors (U)'}
          courseImage={calculus}/>  
            <CoursesCard 
          courseName={'Advanced Functions (U)'}
          courseImage={math}/>  

<CoursesCard 
          courseName={'Biology (U)'}
          courseImage={biology}/>  
            <CoursesCard 
          courseName={'Chemistry (U)'}
          courseImage={chemistry}/>  
            <CoursesCard 
          courseName={'Physics (U)'}
          courseImage={physic}/>  
               <CoursesCard 
          courseName={'Communications Technology (M)'}
          courseImage={comunication}/>  
          
          </>
          : 
   <>
          <CoursesCard 
          courseName={'Accoounting'}
          courseImage={accounting}/>
          <CoursesCard 
          courseName={'Biology'}
          courseImage={biology}/>
          <CoursesCard 
          courseName={'Chemistry'}
          courseImage={chemistry}/>
          <CoursesCard 
          courseName={'Economics'}
          courseImage={economics}/>
              <CoursesCard 
          courseName={'Geography'}
          courseImage={geography}/>
              <CoursesCard 
          courseName={' Information Technology'}
          courseImage={IT}/>
              <CoursesCard 
          courseName={'Mathematics'}
          courseImage={math}/>
              <CoursesCard 
          courseName={'Physics'}
          courseImage={physic}/>
              <CoursesCard 
          courseName={'Business'}
          courseImage={business}/>
             <CoursesCard 
          courseName={'English language'}
          courseImage={englang}/>
   </>

        }




      </div>


    </div>
  </div>
  )
}

export default OurCourses