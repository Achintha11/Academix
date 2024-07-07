/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setShowAlert } from "../../features/announcement/announcementSlice";

const CustomAlert = ({ type, message }) => {
  const dispatch = useDispatch();
  const { showAlert } = useSelector((store) => store.announcements);
  const duration = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setShowAlert(false));
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, duration, showAlert]);

  return (
    <>
      {showAlert && (
        <div
          className=" position-fixed top-0 start-50 translate-middle-x mt-4 p-0   "
          style={{ minWidth: "350px" }}
        >
          <div
            className={` alert alert-${type} d-flex align-items-center  my-auto show  col-md-12 opacity-75`}
            role="alert"
          >
            <FaCheckCircle className="mx-2" style={{ fontSize: "1.5rem" }} />
            <div className="flex-grow-1 font-weight-bold">{message}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomAlert;
