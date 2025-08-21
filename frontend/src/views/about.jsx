import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Feature1 from '../components/feature1'
import Feature2 from '../components/feature2'
import Card1 from '../components/card1'
import Footer from '../components/main-components/footer'
import Header from '../components/main-components/header'
import './about-customer.css'

const AboutCustomer = (props) => {
  return (
    <div className="about-customer-container">
      <Helmet>
        <title>About - Kulli App</title>
        <meta property="og:title" content="About - Kulli App" />
      </Helmet>
      <Header />
      <h2 className="thq-heading-2">How to use the Kulli app</h2>
      <h2 className="thq-heading-2">
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="about-customer-text25">
          Our core service is developing technology that connects drivers and
          customer demand. Here’s how the app works, step by step:
        </span>
      </h2>
      <Feature1 />
      <Feature2 />
      <div className="about-customer-max-width2 max-width">
        <h1 className="about-customer-text44">It’s easier in the apps</h1>
        <div className="about-customer-cards-container">
          <Card1
            text2={
              <Fragment>
                <span className="about-customer-text45">
                  Download the Kulli app
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="about-customer-text46">Scan to download</span>
              </Fragment>
            }
            imageSrc="/New photos/image5webappswhichshowushowtomakeuseofqrcodesdiffe2914-r9cj-200h-300w.png"
            rootClassName="card1root-class-name"
          ></Card1>
          <Card1
            text2={
              <Fragment>
                <span className="about-customer-text47">
                  Download the Driver app
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="about-customer-text48">Scan to download</span>
              </Fragment>
            }
            imageSrc="/New photos/image5webappswhichshowushowtomakeuseofqrcodesdiffe2914-r9cj-200h-300w.png"
            rootClassName="card1root-class-name3"
          ></Card1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutCustomer
