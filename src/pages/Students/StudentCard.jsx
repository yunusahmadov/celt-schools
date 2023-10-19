import React from 'react'

function StudentCard({data}) {
  return (
  <div className="student-card">
    <div className="student-card-top">
    <img className='student-bg' src={data?.inst_image?.image_full_url} alt="" />

    
    <div className='ttttt'>
    <svg viewBox="0 0 135 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M101.911 19.8581C99.4421 17.4194 97.15 14.8065 94.6816 12.1935C94.3289 11.671 93.8 11.3226 93.271 10.8C92.9184 10.4516 92.7421 10.2774 92.3895 9.92903C85.8658 3.83226 76.8737 0 67.1763 0C57.4789 0 48.4868 3.83226 41.7868 9.92903C41.4342 10.2774 41.2579 10.4516 40.9053 10.8C40.3763 11.3226 40.0237 11.671 39.4947 12.1935C37.0263 14.8065 34.7342 17.4194 32.2658 19.8581C23.45 28.7419 11.6368 30.4839 0 30.8323V54H16.5737H32.2658H101.734H110.374H134.176V30.6581C122.539 30.3097 110.726 28.7419 101.911 19.8581Z" fill="currentColor"></path></svg> 
    <img className='slider-student-img' src={data?.user_image} alt="" />
   </div>
    </div>
    <div className="student-card-bottom">
      <p>{data?.first_name} {data?.last_name.substring(0, 1)}.</p>
      <p>{data?.inst_name}</p>
      <p>{data?.program_name}</p>
    </div>
  </div>
  )
}

export default StudentCard