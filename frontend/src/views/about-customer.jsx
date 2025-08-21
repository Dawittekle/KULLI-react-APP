import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Features25 from '../components/features25'
import Features1 from '../components/features1'
import Card1 from '../components/card1'
import Footer3 from '../components/main-components/footer'
import './about-customer.css'

const AboutCustomer = (props) => {
  return (
    <div className="about-customer-container">
      <Helmet>
        <title>About - Kulli App</title>
        <meta property="og:title" content="About - Kulli App" />
      </Helmet>
      <div className="about-customer-navbar navbar-container">
        <div className="max-width">
          <header
            data-thq="thq-navbar"
            className="about-customer-navbar-interactive"
          >
            <div className="about-customer-logo1">
              <img
                alt="image"
                src="/New photos/7952195_delivery_truck_shipping_courier_cargo_icon.svg"
                loading="lazy"
                className="about-customer-image1"
              />
              <span className="brandName">
                <span className="about-customer-text11">K</span>
                <span>ulli</span>
              </span>
            </div>
            <div
              data-thq="thq-navbar-nav"
              className="about-customer-desktop-menu"
            >
              <div className="about-customer-links1">
                <span className="about-customer-text13 navbarLink">Book</span>
                <span className="about-customer-text14 navbarLink">
                  Drivers
                </span>
                <span className="about-customer-text15 navbarLink">About</span>
                <button className="button-secondary button">Log in</button>
                <button className="button button-primary">Sign up</button>
              </div>
            </div>
            <div
              data-thq="thq-burger-menu"
              className="about-customer-burger-menu"
            >
              <svg viewBox="0 0 1024 1024" className="about-customer-icon10">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div
              data-thq="thq-mobile-menu"
              className="about-customer-mobile-menu"
            >
              <div className="about-customer-nav">
                <div className="about-customer-top">
                  <div className="about-customer-logo2">
                    <img
                      alt="image"
                      src="/group%202.svg"
                      className="about-customer-image2"
                    />
                    <span className="brandName">
                      <span className="about-customer-text17">UP -</span>
                      <span> START</span>
                    </span>
                  </div>
                  <div
                    data-thq="thq-close-menu"
                    className="about-customer-close-menu"
                  >
                    <svg
                      viewBox="0 0 1024 1024"
                      className="about-customer-icon12"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="about-customer-links2">
                  <span className="about-customer-text19 navbarLink">
                    About
                  </span>
                  <span className="about-customer-text20 navbarLink">
                    Features
                  </span>
                  <span className="about-customer-text21 navbarLink">
                    Pricing
                  </span>
                  <span className="about-customer-text22 navbarLink">Team</span>
                  <span className="about-customer-text23 navbarLink">Blog</span>
                </nav>
                <div className="about-customer-buttons">
                  <button className="button-secondary button">Log in</button>
                  <button className="button button-primary">Get started</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="about-customer-icon14"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="about-customer-icon16"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="about-customer-icon18"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
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
      <Features25
        feature1Title={
          <Fragment>
            <span className="about-customer-text26">
              1. A customer opens the app
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-customer-text27">
              2. The customer is matched with a driver
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-customer-text28">
              3. The Customer takes the rider to the destination
            </span>
          </Fragment>
        }
        feature1ImgSrc="/mudan%C3%A3%C2%A7as%20em%20goi%C3%A3%C2%A2nia%20com%20qualidade%20garantida_%20conhe%C3%A3%C2%A7a%20nossa%20empresa%20especializada-1200w.jpg"
        feature1Description={
          <Fragment>
            <span className="about-customer-text29">
              The rider enters their destination into the “Where to?” box;
              reviews each ride option for vehicle size, price, and estimated
              dropoff time; chooses the desired option; then confirms the
              pickup.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-customer-text30">
              A nearby driver sees and chooses to accept the rider’s ride
              request. The rider is automatically notified when the driver’s
              vehicle is about a minute away.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-customer-text31">
              At the end of each trip, drivers and riders can rate each other
              from 1 to 5 stars. Riders also have the option to give the driver
              compliments and a tip directly in the app.
            </span>
          </Fragment>
        }
      ></Features25>
      <Features1
        mainAction={
          <Fragment>
            <span className="about-customer-text32">Book Now</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-customer-text33">
              What Size Vehicle Should I Choose?
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-customer-text34">Box Truck</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-customer-text35">Cargo Van</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-customer-text36">Pickup Truck</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-customer-text37">Sign up</span>
          </Fragment>
        }
        feature1ImageSrc="/New photos/%C3%B8%C2%B4%C3%B8%C2%B1%C3%B9%C2%83%C3%B8%C2%A9%20%C3%B9%C2%86%C3%B9%C2%82%C3%B9%C2%84%20%C3%B8%C2%A7%C3%B8%C2%AB%C3%B8%C2%A7%C3%B8%C2%AB-1200w.jpg"
        feature2ImageSrc="/New photos/deliveryvanwithopendoorandhome12352-ohwn-300h-300h.png"
        feature3ImageSrc="/New photos/bedfordkb2612459-btob-300h-300h.png"
        sectionDescription={
          <Fragment>
            <span className="about-customer-text38">
              <span className="about-customer-text39">K</span>
              <span>
                ulli allows you to select from four different vehicle sizes,
                depending on your needs. Picking the correct vehicle is
                important. Larger vehicles have a higher rate. However, if you
                select a vehicle that is too small for your job, it may require
                multiple trips, and you’ll end up spending more than your
                estimate. Use the information on this page to pick the correct
                vehicle size for your project.
              </span>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-customer-text41">
              The box truck is the largest vehicle on GoShare’s platform. Box
              trucks typically range between 12 – 26 ft. Box trucks are ideal
              for apartment moves, pallets, or multiple pieces of large
              furniture.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-customer-text42">
              Cargo Vans typically have a bed length between 10 and 14 ft. Cargo
              vans provide the additional benefit of having an enclosed cargo
              space, protecting your items against the weather. Cargo vans are
              ideal for large pieces of furniture or moves that involve many
              boxes, which can be stacked in the van’s interior. Cargo vans can
              also be used for a single pallet.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-customer-text43">
              Pickup trucks have a bed length of 5 ft – 7.5 ft and a bed width
              of 4.5 ft – 5.5 ft. They are ideal for moving small pieces of
              furniture, small appliances, boxes, and big-screen televisions.
            </span>
          </Fragment>
        }
      ></Features1>
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
        <Footer3
          text={
            <Fragment>
              <span className="about-customer-text49">
                <span className="about-customer-text50">K</span>
                <span>ULLI</span>
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="about-customer-text52">Book</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="about-customer-text53">Drivers</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="about-customer-text54">About</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="about-customer-text55">FAQ</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="about-customer-text56">Download App</span>
            </Fragment>
          }
          termsLink={
            <Fragment>
              <span className="about-customer-text57">Terms of Service</span>
            </Fragment>
          }
          cookiesLink={
            <Fragment>
              <span className="about-customer-text58">Cookies Settings</span>
            </Fragment>
          }
          privacyLink={
            <Fragment>
              <span className="about-customer-text59">Privacy Policy</span>
            </Fragment>
          }
        ></Footer3>
      </div>
    </div>
  )
}

export default AboutCustomer
