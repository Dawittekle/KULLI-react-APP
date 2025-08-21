import React, { useState } from 'react';
import './feature1.css';

const Features25 = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Feature data with your provided content
  const features = [
    {
      title: (
        <span className="about-customer-text26">
          1. A customer opens the app
        </span>
      ),
      description: (
        <span className="about-customer-text29">
          The rider enters their destination into the “Where to?” box; reviews each ride option for vehicle size, price, and estimated dropoff time; chooses the desired option; then confirms the pickup.
        </span>
      ),
      imgSrc: "/mudan%C3%A3%C2%A7as%20em%20goi%C3%A3%C2%A2nia%20com%20qualidade%20garantida_%20conhe%C3%A3%C2%A7a%20nossa%20empresa%20especializada-1200w.jpg",
      imgAlt: "Customer using ride app"
    },
    {
      title: (
        <span className="about-customer-text27">
          2. The customer is matched with a driver
        </span>
      ),
      description: (
        <span className="about-customer-text30">
          A nearby driver sees and chooses to accept the rider’s ride request. The rider is automatically notified when the driver’s vehicle is about a minute away.
        </span>
      ),
      imgSrc: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400",
      imgAlt: "Driver matching process"
    },
    {
      title: (
        <span className="about-customer-text28">
          3. The Customer takes the rider to the destination
        </span>
      ),
      description: (
        <span className="about-customer-text31">
          At the end of each trip, drivers and riders can rate each other from 1 to 5 stars. Riders also have the option to give the driver compliments and a tip directly in the app.
        </span>
      ),
      imgSrc: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400",
      imgAlt: "Ride completion"
    }
  ];

  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`features25-tab-horizontal${index + 1}`}
            >
              <div className={`features25-divider-container${index + 1}`}>
                {activeTab === index && <div className={`features25-container${index + 3}`}></div>}
              </div>
              <div className={`features25-content${index + 1}`}>
                <h2 className="thq-heading-2">{feature.title}</h2>
                <span className="thq-body-small">{feature.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="features25-image-container">
          <img
            alt={features[activeTab].imgAlt}
            src={features[activeTab].imgSrc}
            className={`features25-image${activeTab + 1} thq-img-ratio-16-9`}
          />
        </div>
      </div>
    </div>
  );
};

export default Features25;