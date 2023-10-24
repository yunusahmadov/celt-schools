import React from 'react'
import { useNavigate } from 'react-router-dom'

function ApplySection() {
  const navigate=useNavigate()
  return (
    <div className='apply-section'>
        <div className="overlay"></div>
    <div className="container">
        <h2>Növbəti addımı atın: Elə indi müraciət edin</h2>
        <p>Məktəbimizdə oxumaq üçün müraciət sadə və sürətlidir.</p>
        <p>Sizə yaxın olan kampusu seçirsiniz və əlaqə saxlayırsınız.</p>
        <p>Məktəbimizdə oxumaq üçün hazırkı bilikləriniz yetərlidirsə, sizə ən qısa zamanda dəvət göndəririk..</p>
        <button className='pinkbtn' onClick={()=>navigate('contacts')}>Müraciət edin 
        <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
    </div>

</div>
  )
}

export default ApplySection