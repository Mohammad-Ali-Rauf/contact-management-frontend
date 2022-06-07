import React from 'react'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'

const Home = () => {
  return (
    <div className='grid-2 p-3'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  )
}

export default Home
