import React from 'react'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import plus from '../../images/plus.png'

function FlexibleSection() {
  return (
    <div className="flexible">
          <div className="container">
            <h2>Proqramların bitirmə müddəti</h2>
            <div className="flexible-center">

               <div className="flexible-card">
                    <img src={img1} alt="" />
                    <p>2 illik standard proqram</p>
               </div>

               <div className="flexible-card">
               <img src={img2} alt="" />
                    <p> 1 illik sürətli proqram</p>
                </div>
                <div className="flexible-card">
                <img src={plus} alt="" />
                <p>
                 3 illik rahat proqram
                </p>
         
                </div>
            </div>
            <p className='finala2'>You can also join the programme for just the final A2 year if you have completed the first year of A-levels or equivalent at another school.</p>

            {/* <button className='pinkbtn'>SEE PROGRAMME INFORMATION 
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button> */}
        </div>
    </div>
  )
}

export default FlexibleSection