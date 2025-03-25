import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './card1.css'

const Card1 = (props) => {
  return (
    <div className={`card1-card ${props.rootClassName} `}>
      <img alt={props.imageAlt} src={props.imageSrc} className="card1-image" />
      <span className="card1-text1">
        {props.text2 ?? (
          <Fragment>
            <span className="card1-text3">Download the Kulli app</span>
          </Fragment>
        )}
      </span>
      <span>
        {props.text3 ?? (
          <Fragment>
            <span className="card1-text4">Scan to download</span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Card1.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  text2: undefined,
  text3: undefined,
  rootClassName: '',
}

Card1.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.element,
  text3: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Card1
