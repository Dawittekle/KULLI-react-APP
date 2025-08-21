import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features5.css'

const Features5 = (props) => {
  return (
    <div className="features5-layout223 thq-section-padding">
      <div className="features5-max-width thq-flex-row thq-section-max-width">
        <div className="thq-flex-column">
          <img
            alt={props.featureImageAlt}
            src={props.featureImageSrc}
            className="thq-img-ratio-4-3"
          />
        </div>
        <div className="thq-flex-column">
          <div className="features5-list thq-flex-column">
            <div className="thq-flex-row features5-list-item1">
              <div className="features5-content2 thq-flex-column">
                <h3 className="thq-heading-3 features5-title2">
                  {props.feature2Description1 ?? (
                    <Fragment>
                      <span className="features5-text3">
                        Discover the Power of Actions
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small features5-description2">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features5-text6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-row features5-list-item2">
              <div className="features5-content3 thq-flex-column">
                <h3 className="thq-heading-3 features5-title3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features5-text5">
                        Discover the Power of Actions
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small features5-description3">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features5-text2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-row">
              <div className="features5-content4 thq-flex-column">
                <h3 className="thq-heading-3 features5-title1">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features5-text4">
                        Discover the Power of Actions
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small features5-description1">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features5-text8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-flex-row features5-actions">
            <button className="features5-button1 thq-button-filled">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features5-text1">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features5-button2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features5-text7">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features5.defaultProps = {
  mainAction: undefined,
  featureImageSrc:
    'https://images.unsplash.com/photo-1524169113253-c6ba17f68498?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExMnx8YWJzdHJhY3R8ZW58MHx8fHwxNzEwOTMzOTc2fDA&ixlib=rb-4.0.3&w=1400',
  feature3Description: undefined,
  feature2Description1: undefined,
  feature1Title: undefined,
  feature3Title: undefined,
  feature2Description: undefined,
  featureImageAlt: 'PlaceholderImage1314',
  secondaryAction: undefined,
  feature1Description: undefined,
}

Features5.propTypes = {
  mainAction: PropTypes.element,
  featureImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2Description1: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  featureImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Features5
