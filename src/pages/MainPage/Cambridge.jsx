import React from 'react'
import cambridge from '../../images/cambridgeimg.jpg'
import cambridge2 from '../../images/ceq-logo-stacked.png'
import leftarrow from '../../images/left-arrow-white.png'


function Cambridge() {
  return (
   <div className="container">
    <div className="cambridge-cont">
        <div className="cambridge-left">
            <img src={cambridge} alt="" />
        </div>
        <div className="cambridge-right">
            <img className='camb-logo' src={cambridge2} alt="" />
            <h3>Your path to learning English, step by step</h3>
            <p>Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding. Our unique approach encourages continuous progression with a clear path to improve language skills. We have qualifications for schools, general and higher education, and business.</p>
            <button>Learn more
                <img className='leftarrow' src={leftarrow} alt="" />            </button>
            </div>
            
    </div>
   </div>
  )
}

export default Cambridge