import React from 'react'

import { Helmet } from 'react-helmet'

import './booking.css'

const Booking = (props) => {
  return (
    <div className="booking-container">
      <Helmet>
        <title>Booking - Kulli App</title>
        <meta property="og:title" content="Booking - Up Start Finance" />
      </Helmet>
    </div>
  )
}

export default Booking
