import React from 'react'

const ContactCard = ({icon, text}) => {
  return (
    <div className="contact-details-card">
        <div className="icon-contact">
            {icon}
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactCard