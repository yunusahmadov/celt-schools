import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useNavigation

function BroadSection() {
  const navigate = useNavigate(); // Use useNavigate instead of useNavigation

  return (
    <div className='broad-section'>
      <div className="container">
        <h2>Geniş fənn seçimi</h2>
        <p>Follow your passion.</p>
        <p>We offer a wide range of subjects across sciences, arts and humanities.</p>
        <p>We will help you decide on the ones which are best for your intended degree.</p>
        <button onClick={() => navigate('/fields')} className='pinkbtn'>
          İxtisasınıza uyğun fənnlərə baxın
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default BroadSection;
