import React from 'react'
import cambridge from '../../images/cambridgeimg.jpg'
import cambridge2 from '../../images/ceq-logo-stacked.png'
import leftarrow from '../../images/left-arrow-white.png'
import { useNavigate } from 'react-router-dom'
import triangle from '../../images/triangle.png'

function Cambridge() {

    const navigate=useNavigate();
  return (
   <div className="container">
    <div className="cambridge-cont">
        <div className="cambridge-left">
            <img src={cambridge} alt="" />
        </div>
        <div className="cambridge-right">
            <div className='diplomatxt'>
                <h2 className='diplomatitle'>CELT High School
                    {/* <div className="triangle"></div> */}
                    <img className='triangle' src={triangle} alt="" />
                </h2>
                <h3>A Level Diploma</h3>
            </div>
            {/* <img className='camb-logo' src={cambridge2} alt="" /> */}
            <h3>Dünyanın ən güclü universitetlərinə gedən yol</h3>
            <p>CELT A Level diplomu ilə siz dünyanın ən güclü uniersitetlərinə asan qəbul ola və təhsil ala bilərsiniz. Bizim individual yanaşmamız, sizin bütün sahələrdə uğurlu nəticələr əldə etmənizə zəmanət verir. 
Siz CELT məktəblərində övladlarınızı dünya standardlarına uyğun yetişdirə bilərsiniz.</p>
            <button className='pinkbtn' onClick={()=>navigate('/contacts')}>Uğura aparan yolu seçin
                <img className='leftarrow' src={leftarrow} alt="" /> 
             </button>
            </div>
            
    </div>
   </div>
  )
}

export default Cambridge