import React from 'react'

function QualifyCard({qualTitle,qual1,qual2,qual3,qualButton,qualImg}) {
  return (
    <div className='qualify-card'>
        <div className='qualify-card-img'>
            <img src={qualImg}  />
        </div>
        <div className='qualtitle'>
        <h2>{qualTitle}</h2>
        </div>
        <p>{qual1}</p>
        <p>{qual2}</p>
        <p>{qual3}</p>
        {
            qualButton?
            <button className='qualbtn'>{qualButton}</button>:''
        }
    </div>
  )
}

export default QualifyCard