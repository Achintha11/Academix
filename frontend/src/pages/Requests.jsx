import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RequestCard from "../components/RequestCard";
import { getEnrollmentRequests } from "../../features/enrollment/enrollmentSlice";

const Requests = () => {
  const { requests, status } = useSelector((store) => store.enrollments);
  console.log(requests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEnrollmentRequests());
  }, [dispatch]);

  return (
    <>
      {requests && (
        <div className="container-fluid bg-white  p-3 h-90  ">
          <div className="row ">
            <div className="col">
              <h2 className="text-muted">Requests</h2>
            </div>
          </div>
          <div className="row mt-4   ">
            {requests.map((request) => (
              <div key={request._id} className="col-md-12 mb-3">
                <RequestCard {...request} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Requests;
