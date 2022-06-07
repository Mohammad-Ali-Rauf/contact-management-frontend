import React from "react";
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const { name, email, phone, relationship } = contact;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name} {"  "}{"  "}
        <span style={{ float: 'right' }} className={'badge ' + ( relationship === 'professional' ? "badge-success" : "badge-primary" )}>
          { relationship.charAt(0).toUpperCase() + relationship.slice(1) }
        </span>
      </h3>
        <ul className="list">
            {email && (
                <li>
                    <i className="fa-regular fa-envelope" /> {email}
                </li>
            )}
            {phone && (
                <li>
                    <i className="fas fa-phone" /> {phone}
                </li>
            )}
        </ul>
        <p>
            <button className="btn btn-dark btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
        </p>
    </div>
  )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem;
