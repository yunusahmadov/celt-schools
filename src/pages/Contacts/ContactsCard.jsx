import React from 'react'

function ContactsCard({centerName,centerPhone1,centerPhone2,centerLocation,centerFacebook,centerInstagram}) {
  return (
    <div className="contact-card">
      <h2>{centerName}</h2>
      <h3>Zəng et</h3>
      <p>
        <i class="fa fa-mobile"></i>
        <a href={`tel:${centerPhone1}`}>
        {centerPhone1}
        </a>
      </p>
      <p>
        <i class="fa fa-phone"></i>
        <a href={`tel:${centerPhone2}`}>
        {centerPhone2}
        </a>
      </p>
      <button>
        <a href="#">Mesaj yaz</a>
      </button>
      <button>
        <a href="#">Səhifəyə bax</a>
      </button>
      <div className="center-icons">
        <a href={centerLocation}>
          <i class="fa fa-map-marker"></i>
        </a>
        <a href={centerFacebook}>
          <i class="fa fa-facebook"></i>
        </a>
        <a href={centerInstagram}>
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default ContactsCard