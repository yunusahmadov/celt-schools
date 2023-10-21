import React from 'react'
import { useNavigate } from 'react-router-dom';

function TwoCardsElem({topText,firstText,secondText,thirdText,btnText,cardBgImg,titleBg}) {

        const navigate=useNavigate();
  return (
    <div className={`preperation-card ${cardBgImg}`}>

        <h3 className={`prepertaion-top background ${titleBg}`}>{topText}</h3>
<div className="qualp">
<p>{firstText}</p>
        <p>{secondText}</p> 
        <p>{thirdText}</p>
</div>
        <div className="prepertaion-bottom" onClick={()=>navigate('/contacts')}>
            {btnText}
<i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default TwoCardsElem