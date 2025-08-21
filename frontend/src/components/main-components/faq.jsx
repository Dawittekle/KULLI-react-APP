import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How do I book a truck?",
      answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
      question: "Is Kulli available in my area?",
      answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
      question: "Can I track my shipment in real time?",
      answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
      question: "Do you have an iOS or Android app?",
      answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    },
    {
      question: "How do I register as a truck owner?",
      answer: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home-max-width6 max-width">
      <div className="home-faq">
        <div className="home-questions">
          <span className="home-text45 beforeHeading">faq</span>
          <h1 className="home-text46">
            <span className="home-text47">
              Frequently Asked
              <span dangerouslySetInnerHTML={{ __html: " " }} />
            </span>
            <br />
            <span className="home-text49">Questions</span>
          </h1>
          
          {faqItems.map((item, index) => (
            <div key={index} data-role="Accordion" className="question">
              <div 
                data-type="accordion-header" 
                className={`home-trigger${index + 1}`}
                onClick={() => toggleAccordion(index)}
                style={{cursor: 'pointer'}}
              >
                <span className={`home-text${50 + index * 2}`}>{item.question}</span>
                <svg 
                  viewBox="0 0 1024 1024" 
                  className={`home-icon${20 + index * 2}`}
                  style={{ 
                    transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                </svg>
              </div>
              <div 
                data-type="accordion-content" 
                className="question-content"
                style={{
                  display: activeIndex === index ? 'block' : 'none',
                  maxHeight: activeIndex === index ? '100px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease'
                }}
              >
                <span className={`home-text${51 + index * 2}`}>
                  {item.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
        <img
          alt="image"
          src="/New photos/major%20differences%20between%20local%20moving%20and%20long%20distance%20moving%20_%20zip%20moving%20%26%20storage-1200w.jpg"
          className="home-image6"
        />
        <div className="home-container7"></div>
      </div>
    </div>
  );
};

export default FAQSection;