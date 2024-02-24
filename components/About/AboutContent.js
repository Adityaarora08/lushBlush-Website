import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/aboutImg.jpg"
                  alt="image"
                  className="rounded-10"
                />

                <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                   L&B Pharmaceuticals is one of the largest privately held pharmaceutical companies in India, headquartered at Naraingarh, Haryana. We are WHO & GMP Certified pharma Franchise Company in India. Over the last decade, the company has been developing and manufacturing Pharmaceutical Products in India and selling and distributing them all over India.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                  We are quality oriented pharmaceutical company in India and have a Product portfolio that covers all major therapy area, including Anti –infective, Nutritional Supplements, Gastrointestinal, Pain management, Cardiovascular & Diabetes, Dermatology, Urology and central Nervous System (CNS).
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    But I must explain to you how all this started. We have been manufacturing and distributing pharmaceutical products from almost a decade now. We also have in-house packaging of the products as well and so we've always had scope of customization for our clients and distributors.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission and Core values</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Innovation - We must discover, develop and successfully market pharmaceutical products to prevent, diagnose, alleviate and cure diseases.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                     Integrity - The quality of being honest and of always having high moral principles and always focusing on the quality of what we provide/manufacture as working in a highly sensitive field of medicines.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Accountability – Being responsible for the effects of your actions, and being willing to explain or be criticized for them. We take full ownership of what we deliver/produce and always take the responsiblity to provide more than satisfactory products which suits well to our clients.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
