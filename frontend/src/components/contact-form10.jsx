import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form10.css'

const ContactForm10 = (props) => {
  return (
    <div className="contact-form10-contact11 thq-section-padding">
      <div className="contact-form10-max-width thq-section-max-width">
        <div className="contact-form10-section-title thq-card">
          <span className="thq-body-small">
            {props.content2 ?? (
              <Fragment>
                <span className="contact-form10-text27">Prop Content</span>
              </Fragment>
            )}
          </span>
          <div className="contact-form10-content1">
            <h2 className="thq-heading-2">
              {props.contactTitle ?? (
                <Fragment>
                  <span className="contact-form10-text21">Contact us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact-form10-text24">Prop Content</span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact-form10-content2">
          <form className="contact-form10-form thq-card">
            <div className="contact-form10-input1">
              <label htmlFor="contact-form-10-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-10-name"
                placeholder="Full Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form10-input2">
              <label htmlFor="contact-form-10-email" className="thq-body-small">
                Email
              </label>
              <input
                type="text"
                id="contact-form-10-email"
                required="true"
                placeholder="Email"
                className="contact-form10-text-input2 thq-input"
              />
            </div>
            <div className="contact-form10-container">
              <div className="contact-form10-input3">
                <label
                  htmlFor="contact-form-10-options"
                  className="thq-body-small"
                >
                  Choose one topic
                </label>
                <select
                  id="contact-form-10-options"
                  placeholder="Select one"
                  className="thq-select"
                >
                  <option value="Option 1">Feature request</option>
                  <option value="Option 1">Customer Service</option>
                </select>
              </div>
            </div>
            <div className="contact-form10-input4">
              <label
                htmlFor="contact-form-10-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-10-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form10-checkbox1">
              <input
                type="checkbox"
                id="contact-form-10-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-10-check" className="thq-body-small">
                I accept the Terms
              </label>
            </div>
            <button type="submit" className="thq-button-filled">
              <span className="thq-body-small">
                {props.submitAction ?? (
                  <Fragment>
                    <span className="contact-form10-text23">Submit</span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
          <div className="contact-form10-content3 thq-card">
            <div className="contact-form10-row1 thq-flex-row">
              <div className="contact-form10-content4">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form10-icon1 thq-icon-small"
                >
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <div className="contact-form10-contact-info1">
                  <h3 className="thq-heading-3">Email</h3>
                  <span className="thq-body-small">
                    {props.email ?? (
                      <Fragment>
                        <span className="contact-form10-text25">
                          hello@teleporthq.io
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="contact-form10-content5">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form10-icon3 thq-icon-small"
                >
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <div className="contact-form10-contact-info2">
                  <h3 className="thq-heading-3">Phone</h3>
                  <span className="thq-body-small">
                    {props.phone ?? (
                      <Fragment>
                        <span className="contact-form10-text26">
                          +1 (555) 000-0000
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form10-icon5 thq-icon-small"
                >
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <div className="contact-form10-contact-info3">
                  <h3 className="thq-heading-3">Office</h3>
                  <span className="thq-body-small">
                    {props.address ?? (
                      <Fragment>
                        <span className="contact-form10-text22">
                          456 Test Ave, Bucharest
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-flex-row contact-form10-row2">
              <iframe
                src={props.location1GoogleMap}
                title="Map"
                className="contact-form10-iframe thq-img-ratio-16-9"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactForm10.defaultProps = {
  contactTitle: undefined,
  address: undefined,
  location1GoogleMap:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro',
  submitAction: undefined,
  content1: undefined,
  email: undefined,
  phone: undefined,
  content2: undefined,
}

ContactForm10.propTypes = {
  contactTitle: PropTypes.element,
  address: PropTypes.element,
  location1GoogleMap: PropTypes.string,
  submitAction: PropTypes.element,
  content1: PropTypes.element,
  email: PropTypes.element,
  phone: PropTypes.element,
  content2: PropTypes.element,
}

export default ContactForm10
