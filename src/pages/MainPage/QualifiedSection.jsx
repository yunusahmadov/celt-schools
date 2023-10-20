import React from 'react'
import QualifyCard from './QualifyCard'
import img1 from '../../images/KC_Icon_Teachers.svg'
import img2 from '../../images/KC_Icon_Support.svg'
import img3 from '../../images/KC_Icon_ClassSize.svg'

function QualifiedSection() {
  return (
<>
<div className="sec-title mb-50 text-center">
                <h2>TEST TEXT</h2>     
            </div>
<div className='qualified'>
      
      <div className="container">
   
          <div className="qual-container">
          <QualifyCard
              qualImg={img1}
              qualTitle={'Highly qualified teachers'}
              qual1={'All our teachers are subject specialists.'}
              qual2={'Many hold a second degree or equivalent qualification, including PhD.'}
          />
             <QualifyCard
              qualImg={img2}
              qualTitle={'Individual approach'}
              qual1={'You will have regular personal progress testing and skills analysis.'}
              qual2={'Dedicated professional care and support teams are always available for help and advice.'}
              qual3={'We use the Cognitive Abilities Test (CAT 4) to assess your abilities, academic potential and learning preferences.'}
              qualButton={'MORE ON THE CAT 4 TEST'}
          />
             <QualifyCard
              qualImg={img3}
              qualTitle={'Very small classes'}
              qual1={'All our teachers are subject specialists.'}
              qual2={'This means plenty of one-to-one contact with your teacher.'}
          />
          </div>
      </div>
  </div>
</>
  )
}

export default QualifiedSection