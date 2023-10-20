import React from 'react'

function TwoCardsElem({topText,firstText,secondText,thirdText,btnText,cardBgImg}) {
  return (
    <div className={`preperation-card ${cardBgImg}`}>

        <h3 className='prepertaion-top'>{topText}</h3>
        <p>{firstText}</p>
        <p>{secondText}</p>
        <p>{thirdText}</p>
        <div className="prepertaion-bottom">
            {btnText}
<i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default TwoCardsElem