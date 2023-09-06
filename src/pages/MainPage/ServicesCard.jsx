import React from 'react'

function ServicesCard({serviceIcon,serviceDesc,serviceTitle}) {
  return (
    <div className="col-lg-3 col-md-6">
    <div className="services-item rs-animation-hover">
        <div className="services-icon">
            <i className={serviceIcon}></i>                    	        
        </div>
        <div className="services-desc">
            <h4 className="services-title">{serviceTitle}</h4>
            <p>{serviceDesc}</p>
        </div>
    </div>
</div>
  )
}

export default ServicesCard