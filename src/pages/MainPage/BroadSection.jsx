import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useNavigation

function BroadSection() {
  const navigate = useNavigate(); // Use useNavigate instead of useNavigation

  return (
    <div className='broad-section'>
      <div className="container">
        <h2>Geniş fənn seçimi</h2>
        <p>Sevdiyiniz sahəni oxuyun.</p>
        <p>Biz iqtisadiyyat, dəqiq elmlər, mühəndislik, tibb və hümanitar sahələr üzrə fənlər tədris edirik.
We offer a wide range of subjects across sciences, arts and humanities.</p>
        <p>Nəzərdə tutulan dərəcəniz üçün ən uyğun olanları seçməyinizə kömək edəcəyik.</p>
        <button onClick={() => navigate('/courses')} className='pinkbtn'>
          İxtisasınıza uyğun fənnlərə baxın
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default BroadSection;
