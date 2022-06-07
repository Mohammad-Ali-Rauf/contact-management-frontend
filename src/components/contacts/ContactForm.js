import React, { useContext, useState } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        relationship: "personal",
    });

    const { name, email, phone, relationship } = contact;

    const { addContact } = contactContext;

    const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        setContact({
            name: "",
            email: "",
            phone: "",
            relationship: "personal",
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>Add Contact</h2>
            <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
            />
            <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <input
                className='m'
                type='radio'
                name='relationship'
                value='personal'
                checked={relationship === "personal"}
                onChange={onChange}
            />
            Personal
            <input
                className='m'
                type='radio'
                name='relationship'
                value='professional'
                checked={relationship === "professional"}
                onChange={onChange}
            />
            Professional
            <div>
                <input
                    type='submit'
                    value='Add Contact'
                    className='btn btn-primary btn-block'
                />
            </div>
        </form>
    );
};

export default ContactForm;
