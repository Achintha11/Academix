/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUserFriends,
  faLaptopCode,
  faBookOpen,
  faBriefcase,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

import girlImg from "../assets/girl-with-laptop.png";
import courseList from "../assets/data";
import CourseCard from "../components/CourseCard";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="container border my-4 shadow-lg">
          <div className="row ">
            <div className="col-md-1"></div>
            <div className=" col-md-5 d-flex flex-column align-items-center justify-content-center text-center ">
              <h1 className="mb-4">Take Your Learning To The Next Level</h1>
              <p className="text-gray">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat fugit voluptatem, minus, eos corrupti repudiandae
                debitis vel possimus, iste sint maiores reprehenderit voluptas.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="container mt-3">
                <button className="btn btn-orange btn-primary px-4">
                  Get Started
                </button>
                <button className="btn ml-3 text-white border btn-border px-4 ">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="col-md-5 ">
              <img src={girlImg} className="img-fluid" alt="Girl with laptop" />
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 bg-gray ">
          <div className="container bg-gray border-bottom">
            <div className="row text-center text-dark bg-gray ">
              <div className="col-md-4 my-4 ">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="fa-3x text-orange mb-2 "
                />
                <h2 className="font-weight-bold text-dark-gray">40k+</h2>
                <h6 className="font-weight-bold text-dark-gray">
                  Happy Students
                </h6>
              </div>
              <div className="col-md-4 my-4 ">
                <FontAwesomeIcon
                  icon={faUserFriends}
                  className="fa-3x text-orange mb-2"
                />
                <h2 className="font-weight-bold text-dark-gray">12k+</h2>
                <h6 className="font-weight-bold text-dark-gray ">
                  Active Users
                </h6>
              </div>
              <div className="col-md-4 my-4 ">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="fa-3x text-orange mb-2"
                />
                <h2 className="font-weight-bold  text-dark-gray">2k+</h2>
                <h6 className="font-weight-bold text-dark-gray">
                  Online Courses
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid my-5">
          <div className="container ">
            <div className="row text-center">
              <h2 className="text-white ">Achieve Your Goals With AcademiX</h2>
              <div className="col-md-5 mx-auto text-dark d-flex flex-column align-items-center  text-center my-3">
                <p className="text-gray my-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis quae, hic sequi numquam assumenda veritatis!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                </p>
              </div>
              <div className="row my-4">
                <div className="col-md-3 mx-auto my-3 ">
                  <div className="card h-100 shadow-lg rounded py-4 px-4">
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      className="fa-2x text-pink mb-2  "
                    />
                    <h5 className="text-dark-gray font-weight-bold">
                      Learn The Latest Skills
                    </h5>
                    <p className="text-dark-gray">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vel.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 mx-auto my-3">
                  <div className="card h-100 shadow-lg rounded py-4 px-4">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="fa-2x text-blue mb-2"
                    />

                    <h5 className="text-dark-gray font-weight-bold">
                      Get Ready For a Career
                    </h5>
                    <p className="text-dark-gray">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vel.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 mx-auto my-3">
                  <div className="card h-100 shadow-lg rounded py-4 px-4">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="fa-2x text-green mb-2"
                    />

                    <h5 className="text-dark-gray font-weight-bold">
                      Earn a Certificate
                    </h5>
                    <p className="text-dark-gray">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid  border bg-gray">
          <div className="container ">
            <div className="row text-dark d-flex flex-column align-items-center my-5 text-center">
              <h2 className="text-dark-gray ">Popular Courses</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {courseList.map((course) => {
                const { id } = course;
                return <CourseCard key={id} {...course} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
