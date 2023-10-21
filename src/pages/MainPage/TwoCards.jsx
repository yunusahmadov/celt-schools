import React from 'react'
import TwoCardsElem from './TwoCardsElem'

function TwoCards() {
  return (
   <div className="container">
        <div className="sec-title mb-50 text-center">
                <h2>TEST TEXT</h2>     
            </div>
        <div className="whole-container">
            <TwoCardsElem 
            cardBgImg={'cardBg1'}
            topText={'Oxbridge'}
            firstText={'Exceptional A-level grades are essential for entry to Oxford or Cambridge.'}
            secondText={'But you’ll need much more besides.'}
            thirdText={'Our specialist Oxbridge preparation programme provides the essential deeper skills for success.'}
            btnText={'OXBRIDGE PREPARATION'}
            />
            <TwoCardsElem
            cardBgImg={'cardBg2'}
            topText={'Medical School'}
            firstText={'UK Medical School is an aspiration for many elite students. But it is extremely demanding and competitive.'}
            secondText={'Our specialist Medical School preparation programme will help you stand out from the rest.'}
            btnText={'MEDICINE PATHWAYS AT KINGS '}
            titleBg={'medical'}
            
            />
        </div>
   </div>
  )
}

export default TwoCards