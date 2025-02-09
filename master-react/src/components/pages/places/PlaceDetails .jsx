import { useParams } from "react-router-dom";
import React from "react";



const PlaceDetails = () => {
  const { category } = useParams();

  return (
    <div>
      <h1> "تفاصيل المكان"</h1>
    </div>
  );
};

export default PlaceDetails;
