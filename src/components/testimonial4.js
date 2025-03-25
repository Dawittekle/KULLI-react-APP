import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial4.css'

const Testimonial4 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial4-max-width thq-section-max-width">
        <div className="testimonial4-section-title">
          <h2 className="testimonial4-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial4-text28">User Reviews</span>
              </Fragment>
            )}
          </h2>
          <p className="testimonial4-subtitle thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial4-text23">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="testimonial4-content thq-flex-row">
          <div className="testimonial4-column1 thq-card thq-flex-column">
            <div className="testimonial4-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <span className="testimonial4-text10 thq-body-small">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial4-text24">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare.&quot;
                  </span>
                </Fragment>
              )}
            </span>
            <div className="testimonial4-avatar1">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial4-avatar-image1 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial4-avatar-content1">
                <span className="testimonial4-text11 thq-body-small">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial4-text20">Author Name</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author1Position ?? (
                    <Fragment>
                      <span className="testimonial4-text26">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial4-column2 thq-card thq-flex-column">
            <div className="testimonial4-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <span className="testimonial4-text13 thq-body-small">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial4-text29">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare.&quot;
                  </span>
                </Fragment>
              )}
            </span>
            <div className="testimonial4-avatar2">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial4-avatar-image2 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial4-avatar-content2">
                <span className="testimonial4-text14 thq-body-small">
                  {props.author2 ?? (
                    <Fragment>
                      <span className="testimonial4-text19">Author Name</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author2Position ?? (
                    <Fragment>
                      <span className="testimonial4-text21">
                        Position, Company name
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial4-column3 thq-card thq-flex-column">
            <div className="testimonial4-stars3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <span className="testimonial4-text16 thq-body-small">
              {props.review3 ?? (
                <Fragment>
                  <span className="testimonial4-text27">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Suspendisse varius enim in eros elementum tristique.
                    Duis cursus, mi quis viverra ornare.&quot;
                  </span>
                </Fragment>
              )}
            </span>
            <div className="testimonial4-avatar3">
              <img
                alt={props.author3Alt}
                src={props.author3Src}
                className="testimonial4-avatar-image3 thq-img-ratio-1-1 thq-img-round"
              />
              <div className="testimonial4-avatar-content3">
                <span className="testimonial4-text17 thq-body-small">
                  {props.author3 ?? (
                    <Fragment>
                      <span className="testimonial4-text25">Author Name</span>
                    </Fragment>
                  )}
                </span>
                <span className="thq-body-small">
                  {props.author3Position ?? (
                    <Fragment>
                      <span className="testimonial4-text22">
                        Position, Company name
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

Testimonial4.defaultProps = {
  author2: undefined,
  author1Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400',
  author2Position: undefined,
  author3Position: undefined,
  content1: undefined,
  review1: undefined,
  author3: undefined,
  author1Position: undefined,
  review3: undefined,
  heading1: undefined,
  author2Alt: 'Author Avatar',
  author3Alt: 'Author Avatar',
  author3Src:
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400',
  author1Alt: 'Author Avatar',
  review2: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
}

Testimonial4.propTypes = {
  author2: PropTypes.element,
  author1Name: PropTypes.element,
  author2Src: PropTypes.string,
  author2Position: PropTypes.element,
  author3Position: PropTypes.element,
  content1: PropTypes.element,
  review1: PropTypes.element,
  author3: PropTypes.element,
  author1Position: PropTypes.element,
  review3: PropTypes.element,
  heading1: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
  author1Src: PropTypes.string,
}

export default Testimonial4
