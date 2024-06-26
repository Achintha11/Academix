/* eslint-disable react/prop-types */
import React from "react";

const CourseCard = ({ imageUrl }) => {
  return (
    <div className="col-md-3 my-3">
      <div className="card h-100 shadow rounded">
        <img src={imageUrl} className="card-img-top " alt="..." />
      </div>
    </div>
  );
};

export default CourseCard;
