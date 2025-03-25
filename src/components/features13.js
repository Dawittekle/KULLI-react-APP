import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features13.css'

const Features13 = (props) => {
  return (
    <div className="features13-layout226 thq-section-padding">
      <div className="features13-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <div className="thq-flex-column features13-content1">
              <h3 className="features13-title1 thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features13-text2">
                      Discover the Magic of Lorem Ipsum Text Generation
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features13-description1 thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features13-text3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="thq-flex-row features13-actions1"></div>
          </div>
        </div>
        <div className="thq-flex-column">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <div className="thq-flex-column">
              <h3 className="features13-title2 thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features13-text1">
                      Discover the Magic of Lorem Ipsum Text Generation
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features13-description2 thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features13-text4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="thq-flex-row features13-actions2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features13.defaultProps = {
  feature2Title: undefined,
  feature1Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1664251929714-8e4cbf0d075d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
  feature2ImageAlt: 'icon',
  feature1Description: undefined,
  feature2Description: undefined,
  feature1ImageAlt: 'icon',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1533043760339-585a91d9f317?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
}

Features13.propTypes = {
  feature2Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features13
