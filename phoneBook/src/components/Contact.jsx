import React from 'react'

function Contact({person}) {
  return (
    <>
        <li>{person.name}: {person.phone}</li>
    </>
  )
}

export default Contact