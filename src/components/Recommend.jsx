import React, { useState } from "react";
import styled from "styled-components";
import FilterOptions from "./FilterOption";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import Destination7 from "../assets/Destination7.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
// import Lightbox from "react-modal";

export default function Recommend() {

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null); 


  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      images: [
        Destination1,
        Destination1,
      ],
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
     
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
 
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
    },
    {
      image: Destination7,
      title: "London",
      subTitle: "London, the capital of England and the United",
    },
    {
      image: Destination7,
      title: "London",
      subTitle: "London, the capital of England and the United"
    },
    {
      image: Destination7,
      title: "London",
      subTitle: "London, the capital of England and the United" //you can add as many ass want and import images on top
    }
  ];

  const packages = [
    "Summer",
    "Winter",
    "Monsoon",
    "Friends",
    "Family",
    "Calm",
  ];

  

  const showMoreDetails = (place) => {
    setSelectedPlace(place);
    setSelectedImages(place.images);
  };

  const handleFilterOptionClick = (filter) => {
    setSelectedFilter(filter); // Update the selected filter
  };
  const filteredData = selectedFilter
    ? data.filter((destination) => destination.packages.includes(selectedFilter))
    : data;

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        
  <ul>
    {packages.map((pkg, index) => (
      <li
        key={index}
        className={active === index ? "active" : ""}
        onClick={() => setActive(index)}
      >
        {pkg}
      </li>
    ))}
  </ul>
</div>
      <div className="destinations">
      {filteredData.map((destination , index) => {
          return (
            <div className="destination" key={index}>
              <div className="content">
              <h3>{destination.title}</h3>
              <div className="image">
              <img src={destination.image}
               alt=""
               onClick={() => showMoreDetails(destination)}
              />
               </div>
              {/* <p>{destination.subTitle}</p> */}
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>{destination.duration}</span>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedImages.length > 0 && (
        <div className="image-gallery">
          {selectedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => showMoreDetails(selectedPlace)}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size : 4vh;
      justify-content: center;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
