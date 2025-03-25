import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Card from '../components/card'
import Card1 from '../components/card1'
import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Up Start Finance</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <div className="home-navbar navbar-container">
        <div className="max-width">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <div className="home-logo1">
              <img
                alt="image"
                src="/New photos/7952195_delivery_truck_shipping_courier_cargo_icon.svg"
                loading="lazy"
                className="home-image1"
              />
              <span className="brandName">
                <span className="home-text11">K</span>
                <span>ulli</span>
              </span>
            </div>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <div className="home-links1">
                <span className="home-text13 navbarLink">Book</span>
                <span className="home-text14 navbarLink">Drivers</span>
                <span className="home-text15 navbarLink">About</span>
                <button className="button-secondary button">Log in</button>
                <button className="button button-primary">Sign up</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <div className="home-logo2">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="home-image2"
                    />
                    <span className="brandName">
                      <span className="home-text17">UP -</span>
                      <span> START</span>
                    </span>
                  </div>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links2">
                  <span className="home-text19 navbarLink">About</span>
                  <span className="home-text20 navbarLink">Features</span>
                  <span className="home-text21 navbarLink">Pricing</span>
                  <span className="home-text22 navbarLink">Team</span>
                  <span className="home-text23 navbarLink">Blog</span>
                </nav>
                <div className="home-buttons">
                  <button className="button-secondary button">Log in</button>
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
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
            <button className="home-button9 button button-transparent">
              Learn more
            </button>
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
        <div className="home-max-width6 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text45 beforeHeading">faq</span>
              <h1 className="home-text46">
                <span className="home-text47">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text49">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text50">How do I book a truck?</span>
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text51">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text52">
                    Is Kulli available in my area?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text53">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text54">
                    Can I track my shipment in real time?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text55">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger4">
                  <span className="home-text56">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text57">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger5">
                  <span className="home-text58">
                    How do I register as a truck owner?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon28">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text59">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/New photos/major%20differences%20between%20local%20moving%20and%20long%20distance%20moving%20_%20zip%20moving%20%26%20storage-1200w.jpg"
              className="home-image6"
            />
            <div className="home-container7"></div>
          </div>
        </div>
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
        <Footer3
          text={
            <Fragment>
              <span className="home-text65">
                <span className="home-text66">K</span>
                <span>ULLI</span>
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text68">Book</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text69">Drivers</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text70">About</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text71">FAQ</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text72">Download App</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="home-text73">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="home-text74">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="home-text75">Privacy Policy</span>
            </Fragment>
          }
        ></Footer3>
      </div>
    </div>
  )
}

export default Home
