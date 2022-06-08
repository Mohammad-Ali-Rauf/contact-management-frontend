import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return (
      <TransitionGroup appear>
        <CSSTransition timeout={1000} classNames="item">
          <h4>You have no contacts.</h4>
        </CSSTransition>
      </TransitionGroup>
    )
  }

  return (
    <>
      {filtered !== null ? (
        <TransitionGroup appear>
          {filtered.map(contact => (
            <CSSTransition key={contact.id} timeout={1000} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <TransitionGroup appear>
          {contacts.map((contact) => (
            <CSSTransition key={contact.id} timeout={1000} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  );
};

export default Contacts;
