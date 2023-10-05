import React from "react";
import { useParams } from "react-router-dom";

export default function DestinationDetails({ data }) {
  const { destinationId } = useParams();

  const selectedDestination = data.find(
    (destination) => destination.title === destinationId
  );

  if (!selectedDestination) {
    return <div>Destination not found.</div>;
  }

  return (
    <div className="destination-details">
      <div className="image-gallery">
        {selectedDestination.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="description">
        <h3>{selectedDestination.title}</h3>
        <p>{selectedDestination.subTitle}</p>
        {/* Add cost and duration information */}
      </div>
    </div>
  );
}
