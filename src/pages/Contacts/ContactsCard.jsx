import React from 'react'
import { useSelector } from 'react-redux';

function ContactsCard({centerName,centerPhone1,centerPhone2,centerLocation,centerFacebook,centerInstagram,primaryText,centerWebsite}) {
  
  let cut=centerPhone1.replaceAll(' ', '').substring(1)
  const language=useSelector((state)=>state.language.value)
  // console.log(cut);
 
  return (
    <div className="contact-card">
      <h2>{centerName}</h2>
      <span>{primaryText}</span>
      <h3>{language.call}</h3>
      <p>
        <i className="fa fa-mobile"></i>
        <a href={`tel:${centerPhone1}`}>
        {centerPhone1}
        </a>
      </p>
      <p>
        <i className="fa fa-phone"></i>
        <a href={`tel:${centerPhone2}`}>
        {centerPhone2}
        </a>
      </p>
        <a className='wp-message' href={`https://wa.me/+994${cut}`}>
         {language.sendMess}
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 48 48"
  >
    <path
      fill="#67C15E"
      fillRule="evenodd"
      d="M23.993 0C10.763 0 0 10.765 0 24a23.824 23.824 0 0 0 4.57 14.067l-2.99 8.917 9.224-2.948A23.81 23.81 0 0 0 24.007 48C37.237 48 48 37.234 48 24S37.238 0 24.007 0h-.014Zm-6.7 12.19c-.466-1.114-.818-1.156-1.523-1.185a13.55 13.55 0 0 0-.804-.027c-.918 0-1.877.268-2.455.86-.705.72-2.454 2.398-2.454 5.841s2.51 6.773 2.849 7.239c.353.465 4.895 7.632 11.947 10.553 5.515 2.286 7.152 2.074 8.407 1.806 1.834-.395 4.133-1.75 4.711-3.386.579-1.637.579-3.034.41-3.33-.17-.296-.636-.465-1.34-.818-.706-.353-4.134-2.046-4.783-2.272-.634-.24-1.24-.155-1.72.522-.677.946-1.34 1.905-1.876 2.483-.423.452-1.115.509-1.693.268-.776-.324-2.948-1.086-5.628-3.47-2.074-1.849-3.484-4.148-3.893-4.84-.41-.705-.042-1.114.282-1.495.353-.438.691-.748 1.044-1.157.352-.41.55-.621.776-1.1.24-.466.07-.946-.1-1.3-.168-.352-1.579-3.795-2.157-5.191Z"
    />
  </svg>
          </a>
        {/* <a className='page-check' href={`${centerWebsite}`}>{language.seePage}</a> */}
      <div className="center-icons">
        <a href={centerLocation}>
          <i className="fa fa-map-marker"></i>
        </a>
        <a href={centerFacebook}>
          <i className="fa fa-facebook"></i>
        </a>
        <a href={centerInstagram}>
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default ContactsCard