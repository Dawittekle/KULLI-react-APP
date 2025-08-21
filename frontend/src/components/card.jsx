import React from 'react'
import PropTypes from 'prop-types'
import './card.css'

const Card = ({ text = 'Business', text1 = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.', rootClassName = '' }) => {
  return (
    <div className={`card-card ${rootClassName}`}>
      <div className="card-info">
        <span className="card-text1">{text}</span>
        <span className="card-text2">{text1}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Card