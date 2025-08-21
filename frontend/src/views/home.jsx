import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import Card1 from '../components/card1'
import Footer from '../components/main-components/footer'
import Header from '../components/main-components/header'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Kulli App</title>
        <meta property="og:title" content="Kulli App" />
      </Helmet>
      <Header />
      <div className="hero-container section-container">
        <div className="home-max-width2 max-width">
          <div className="home-content1">
            <h1 className="home-title1">
              <span>
                Ship Anything, Anytime, Everywhere with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text25">Kulli</span>
            </h1>
            <span className="home-description">
              Efficient, Dependable, and Cost-Effective On-Demand Delivery and
              Moving Services for Businesses and Individuals Nationwide.
            </span>
            <div className="home-container2">
              <button className="button button-transparent">Sign up</button>
              <button className="home-button6 button button-transparent">
                Book Now
              </button>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="/New photos/concepto%20de%20mudanza%20de%20casa%20de%20dise%C3%A3%C2%B1o%20plano%20con%20cami%C3%A3%C2%B3n%20_%20vector%20gratis%20(1)-600w.jpg"
              className="home-hero-image1"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width3 max-width">
          <div className="home-image4">
            <img
              alt="image"
              src="/New photos/driving11917-cudg-600w-1200w.png"
              className="home-hero-image2"
            />
          </div>
          <div className="home-content2">
            <h1 className="home-text26">
              <span>
                Drive when you want, Make
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text28">Extra</span>
              <span> money</span>
            </h1>
            <span className="home-text30">
              Earn money on your schedule by using your truck to transport loads
              for nearby customers in need of shipping services.
            </span>
            <div className="home-container3">
              <button className="home-button7 button-secondary button bg-transparent">
                Get Started
              </button>
              <button className="button-secondary button bg-transparent">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-image5">
            <img
              alt="image"
              src="/New photos/shipmenttruckillustration111563-tocb-700w-1200w.png"
              className="home-hero-image3"
            />
          </div>
          <div className="home-content3">
            <span className="home-text31">Our Services</span>
            <h1 className="home-text32">
              All moves can be scheduled in advance, or same day!
            </h1>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text33">1</span>
              </div>
              <div className="home-container4">
                <span className="home-title2">
                  <span>Home and Office Moves</span>
                  <br></br>
                </span>
                <span className="home-text36">
                  Got a new place? Use Kulli for home and apartment moves. Let
                  our drivers help with the loading, transportation, and
                  unloading of your furniture including beds, tables, couches,
                  and more.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text37">2</span>
              </div>
              <div className="home-container5">
                <span className="home-title3">B2B Logistics</span>
                <span className="home-text38">
                  Whether you&apos;re delivering from warehouses and
                  distribution centers to storefronts or transferring products
                  between stores, Kulli can help your business keep moving.
                </span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-number3">
                <span className="home-text39">3</span>
              </div>
              <div className="home-container6">
                <span className="home-title4">
                  <span>Construction and Jobsites</span>
                  <br></br>
                </span>
                <span className="home-text42">
                  Deliver supplies, equipment, building materials, heavy
                  machinery, and more to jobsites with Kull
                </span>
              </div>
            </div>
            <a href="/about">
              <button className="home-button9 button button-transparent">
              Learn more
            </button>
            </a>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width5 max-width">
          <span className="home-text43 beforeHeading">Truck Types</span>
          <h1 className="home-text44">Delivery &amp; Moving on Demand</h1>
          <div className="home-cards-container1">
            <Card text="Box Truck" rootClassName="cardroot-class-name"></Card>
            <Card
              text="Cargo Van"
              text1="Great for cargo that need to be kept dry, 1-4 big box items, studio apartments, queen mattress w/ box"
              rootClassName="cardroot-class-name2"
            ></Card>
            <Card
              text="Pickup Truck"
              text1="Great for 1-2 big box items, single pieces of furniture, lumber &amp; home improvement"
              rootClassName="cardroot-class-name1"
            ></Card>
          </div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-max-width7 max-width">
          <div className="home-container8"></div>
          <div className="home-max-width8 max-width">
            <h1 className="home-text60">It’s easier in the apps</h1>
            <div className="home-cards-container2">
              <Card1
                text2={
                  <Fragment>
                    <span className="home-text61">Download the Kulli app</span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="home-text62">Scan to download</span>
                  </Fragment>
                }
                imageSrc="/New photos/image5webappswhichshowushowtomakeuseofqrcodesdiffe2914-r9cj-200h-300w.png"
                rootClassName="card1root-class-name1"
              ></Card1>
              <Card1
                text2={
                  <Fragment>
                    <span className="home-text63">Download the Driver app</span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="home-text64">Scan to download</span>
                  </Fragment>
                }
                imageSrc="/New photos/image5webappswhichshowushowtomakeuseofqrcodesdiffe2914-r9cj-200h-300w.png"
                rootClassName="card1root-class-name2"
              ></Card1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
