import React from "react";

const funFactsData = [
  {
    iconName: "fa-solid fa-list-check",
    number: "2546",
    title: "Project Complate",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-users",
    number: "2495",
    title: "Happy Clients",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-people-group",
    number: "172",
    title: "Qualified Staffs",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-trophy",
    number: "07",
    title: "Winning Awards",
    aosDelay: "400",
  },
];

const FunFacts = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.map((value, i) => (
                <div className="col-lg-3 col-sm-6 col-md-6" key={i}>
                  <div
                    className="dm-funfacts-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.number}</h3>
                    <span className="sub-title">{value.title}</span>
                    <img
                      src="/images/digital-marketing/border1.png"
                      alt="image"
                      className="shape"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
