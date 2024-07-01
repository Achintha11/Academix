import React from "react";
import { FaUsers, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const HomeDashboard = () => {
  return (
    <div className="container h-100 ">
      <div className="row shadow-sm py-4 bg-white">
        <div className="col-md-4 mb-3 ">
          <div className="card border-0 h-100  ">
            <div className="shadow card-round card-body d-flex justify-content-between align-items-center bg-purple-gradient">
              <div className="text-white p-3">
                <h3 className="my-3 font-weight-bold">5000</h3>
                <p className="my-3">Students</p>
              </div>
              <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center p-3 ">
                <FaUsers className="display-5 " />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-0 h-100">
            <div className="shadow card-round card-body d-flex justify-content-between align-items-center bg-orange-gradient">
              <div className="text-white p-3">
                <h3 className="my-3 font-weight-bold">300</h3>
                <p className="my-3">Teachers</p>
              </div>
              <div className=" bg-white rounded-circle p-3 mx-2">
                <FaChalkboardTeacher className="text-orange-icon display-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card border-0 h-100">
            <div className="shadow card-round card-body d-flex justify-content-between align-items-center bg-blue-gradient">
              <div className="text-white p-3">
                <h3 className="my-3 font-weight-bold">50</h3>
                <p className="my-3">Courses</p>
              </div>
              <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center p-3">
                <FaBook className="text-blue-icon display-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="shadow col-md-5 bg-white mr-3 "></div>

        <div className="col shadow bg-white p-3">
          <h4 className="mb-1 text-muted">Send Announcement</h4>
          <form className="form">
            <div className="form-group">
              <label htmlFor="announcementTitle">Title</label>
              <input
                type="text"
                className="form-control"
                id="announcementTitle"
                placeholder="Enter announcement title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="announcementMessage">Message</label>
              <textarea
                className="form-control"
                id="announcementMessage"
                rows="4"
                placeholder="Enter announcement message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary text-white">
              Send Announcement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
