import React from "react";
import Link from "next/link";

const servicesData = [
  // {
  //   iconName: "pe-7s-comment bg-13c4a1",
  //   title: "IT Consultancy",
  //   shortText:
  //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  //   viewDetails: "/service-details",
  //   aosDelay: "100",
  // },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Pharma Franchise",
    shortText:
      "L&B Pharmaceuticals is one of the Top Pharmaceutical Franchise companies in India. We Provide PCD Pharma Franchise In India, Where You Can Be Your Own Boss In Your Territory, No Politics, No Work Pressure, Only Results And Rewards To Complete Your Dreams.",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  // {
  //   iconName: "pe-7s-light bg-ffb700",
  //   title: "Digital Marketing",
  //   shortText:
  //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  //   viewDetails: "/service-details",
  //   aosDelay: "300",
  // },
  // {
  //   iconName: "pe-7s-phone bg-fc3549",
  //   title: "Mobile App Development",
  //   shortText:
  //     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  //   viewDetails: "/service-details",
  //   aosDelay: "400",
  // },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Products",
    shortText:
      "L&B pharmaceuticals is one of the leading manufacturers of pharmaceutical and health supplements in India. Our superior quality medicines are trusted and recommended by both medical experts as well as our customers. With an innovative approach, we are able to provide over 1000 formulations in our supreme quality products.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Third-party manufacturing",
    shortText:
      "Since our inception, we are specialized in manufacturing of pharmaceutical products using the latest technologies and highest quality at competitive prices.In the pharmaceuticals segment, we offer manufacturing facilities for general tablets, general capsules, liquid oral and external preparations.",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
];

const OurServices = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              How we provide value to you
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div 
                  className="col-lg-4 
                  col-sm-6" 
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
