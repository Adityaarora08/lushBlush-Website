import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
      <>
        <FsLightbox
          toggler={toggler}
          sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
        />

        <div 
          className="hero-banner it-banner overly bg-fixed" 
          style={{ 
            backgroundImage: `url(/images/bckImgh.jpeg)` 
            // backgroundImage: `url(/images/warehouse.jpg)` 
          }}
        >
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1
                        data-aos="fade-up" 
                        data-aos-duration="1200" 
                        data-aos-delay="100"
                        // style={{fontFamily: 'fantasy'}}
                      >
                        L&B Pharmaceuticals Pvt. Ltd.
                      </h1>

                      <p
                        data-aos="fade-up" 
                        data-aos-duration="1200" 
                        data-aos-delay="200"
                      >
                        Top PCD(Propaganda cum Distribution) Pharma Franchise Company
                      </p>

                      <div
                        data-aos="fade-up" 
                        data-aos-duration="1300" 
                        data-aos-delay="300"
                      >
                        <Link href="/contact" className="btn btn-primary">
                          Send Enquiry
                        </Link>

                        <button
                          className="btn btn-secondary" 
                          onClick={() => setToggler(!toggler)}
                        >
                          <i className="fa-solid fa-play me-1"></i> How it works
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div
                      className="animate-banner-image"
                      data-aos="zoom-in"
                      data-aos-duration="1200"
                    >
                      <img
                        // src="/images/uncle.jpg"
                        src="/images/capsule.jpg"
                        alt="Animate image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="oval-shape">
            <img 
              src="/images/oval-shape.png" 
              alt="Shape" 
            />
          </div>
        </div>
      </>
   );
  }
  
export default MainBanner;