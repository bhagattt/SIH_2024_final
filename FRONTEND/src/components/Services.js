import React from "react";
import service1 from "../components/images/service1.jpg";
import service2 from "../components/images/service2.jpg";
import service3 from "../components/images/service3.jpg";
import service4 from "../components/images/service4.jpg";
import service5 from "../components/images/service5.jpg";
import service6 from "../components/images/service6.jpg";

const servicesData = [
  {
    id: 1,
    img: service1,
    title: "Scholarship Guidance",
  },
  {
    id: 2,
    img: service2,
    title: "Motivational Workshop",
  },
  { id: 3, img: service3, title: "Motivational Mondays" },
  { id: 4, img: service4, title: "Mentor Consultation" },
  { id: 5, img: service5, title: "Financial Aid" },
  { id: 6, img: service6, title: "Mentor Chat" },
];

const Service = ({ img, title }) => (
  <div className="service">
    <img src={img} alt={`${title} Logo`} />
    <h2>{title}</h2>
    <button>Apply Now</button>
  </div>
);

const Services = () => (
  <div className="heas">
    <h1>SERVICES</h1>
    <div className="services">
      {servicesData.map((service) => (
        <Service key={service.id} img={service.img} title={service.title} />
      ))}
    </div>
  </div>
);

export default Services;
