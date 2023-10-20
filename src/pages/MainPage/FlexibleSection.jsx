import React from 'react'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import plus from '../../images/plus.png'

function FlexibleSection() {
  return (
    <div className="flexible">
          <div className="container">
            <h2>Flexible programme length</h2>
            <div className="flexible-center">

               <div className="flexible-card">
                    <img src={img1} alt="" />
                    <p>Standard <strong>two-year A-level</strong></p>
               </div>

               <div className="flexible-card">
               <img src={img2} alt="" />
                    <p><strong>One-year A-level: </strong>for students of
exceptional academic ability.</p>
                </div>
                <div className="flexible-card">
                <img src={plus} alt="" />
                <p>
                <strong>Extended A-level: </strong>for international students who need additional English language support before they can start the main programme.
                </p>
         
                </div>
            </div>
            <p>You can also join the programme for just the final A2 year if you have completed the first year of A-levels or equivalent at another school.</p>

            <button className='pinkbtn'>SEE PROGRAMME INFORMATION 
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    </div>
  )
}

export default FlexibleSection