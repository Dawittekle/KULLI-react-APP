import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './card1.css'

const Card1 = ({ 
  imageSrc = 'https://play.teleporthq.io/static/svg/default-img.svg', 
  imageAlt = 'image', 
  text2, 
  text3, 
  rootClassName = '' 
}) => {
  return (
    <div className={`card1-card ${rootClassName}`}>
      <img alt={imageAlt} src={imageSrc} className="card1-image" />
      <span className="card1-text1">
        {text2 ?? (
          <Fragment>
            <span className="card1-text3">Download the Kulli app</span>
          </Fragment>
        )}
      </span>
      <span>
        {text3 ?? (
          <Fragment>
            <span className="card1-text4">Scan to download</span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Card1.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.element,
  text3: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Card1