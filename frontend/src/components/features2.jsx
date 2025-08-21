import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  return (
    <div className="features2-layout302 thq-section-padding">
      <div className="features2-max-width thq-section-max-width">
        <div className="features2-section-title thq-flex-column">
          <h2 className="thq-heading-2">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features2-text12">
                  Discover the Key Features
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features2-text23">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim in
                  eros elementum tristique. Duis cursus, mi quis viverra ornare,
                  eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="features2-content1">
          <div className="thq-grid-5">
            <div className="features2-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features2-text15">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features2-text13">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features2-text17">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features2-text19">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features2-text21">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features2-text16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature4 thq-flex-column">
              <img
                alt={props.feature4ImageAlt}
                src={props.feature4ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features2-text18">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features2-text20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features2-feature5 thq-flex-column">
              <img
                alt={props.feature5ImageAlt}
                src={props.feature5ImageSrc}
                className="thq-team-image-round"
              />
              <div className="thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature5Title ?? (
                    <Fragment>
                      <span className="features2-text22">
                        Engaging Content for Various Topics
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature5Description ?? (
                    <Fragment>
                      <span className="features2-text14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature3ImageAlt: 'image',
  feature2ImageAlt: 'image',
  sectionTitle: undefined,
  feature1Description: undefined,
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature4ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature5ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature5Description: undefined,
  feature1Title: undefined,
  feature3Description: undefined,
  feature1ImageAlt: 'image',
  feature5ImageAlt: 'image',
  feature2Title: undefined,
  feature4Title: undefined,
  feature2Description: undefined,
  feature4Description: undefined,
  feature2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature3Title: undefined,
  feature4ImageAlt: 'image',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature5Title: undefined,
  sectionDescription: undefined,
}

Features2.propTypes = {
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
  feature5Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature4Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature5Title: PropTypes.element,
  sectionDescription: PropTypes.element,
}

export default Features2
