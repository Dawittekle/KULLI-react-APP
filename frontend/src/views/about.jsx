import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Features25 from '../components/features25'
import Features1 from '../components/features1'
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
       
        <Footer />
      </div>
    </div>
  )
}

export default AboutCustomer
