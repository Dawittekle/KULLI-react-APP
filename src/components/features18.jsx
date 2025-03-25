import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content1">
          <div className="features18-section-title">
            <span className="thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features18-text4">Slogan</span>
                </Fragment>
              )}
            </span>
            <div className="features18-content2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features18-text6">
                      Discover the Key Feature #1
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features18-text5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Suspendisse varius enim
                      in eros elementum tristique. Duis cursus, mi quis viverra
                      ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1Slogan: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'Image',
  feature1Description: undefined,
  feature1Title: undefined,
}

Features18.propTypes = {
  feature1Slogan: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
}

export default Features18
