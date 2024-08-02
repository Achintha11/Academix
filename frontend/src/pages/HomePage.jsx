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
import { motion } from "framer-motion";

import girlImg from "../assets/girl-with-laptop.png";
import courseList from "../assets/data";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: secondSectionRef, inView: secondSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: thirdSectionRef, inView: thirdSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: fourthSectionRef, inView: fourthSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
      transition: {
        duration: 0.3,
        yoyo: Infinity, // Repeat the animation forever
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <main>
        <motion.div
          ref={firstSectionRef}
          initial={{ opacity: 0 }}
          animate={firstSectionInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="container border my-4 shadow-lg"
        >
          <div className="row">
            <div className="col-md-1"></div>
            <motion.div
              ref={firstSectionRef}
              initial={{ opacity: 0, x: -300 }}
              animate={firstSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5 }}
              className="col-md-5 d-flex flex-column align-items-center justify-content-center text-center"
            >
              <h1 className="mb-4">Take Your Learning To The Next Level</h1>
              <p className="text-gray">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Placeat fugit voluptatem, minus, eos corrupti repudiandae
                debitis vel possimus, iste sint maiores reprehenderit voluptas.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="container mt-3">
                <motion.button
                  onClick={() => navigate("/signin")}
                  className="btn-orange px-4"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="btn ml-3 text-white border btn-border px-4"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
            <div className="col-md-5">
              <motion.img
                ref={firstSectionRef}
                src={girlImg}
                className="img-fluid"
                alt="Girl with laptop"
                initial={{ x: 300, opacity: 0 }}
                animate={firstSectionInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </motion.div>

        <div className="container-fluid mt-5 bg-gray">
          <div className="container bg-gray border-bottom">
            <div className="row text-center text-dark bg-gray">
              <motion.div
                ref={secondSectionRef}
                initial={{ opacity: 0 }}
                animate={secondSectionInView ? { opacity: 1 } : {}}
                transition={{ duration: 2 }}
                className="col-md-4 my-4"
              >
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="fa-3x text-orange mb-2"
                />
                <h2 className="font-weight-bold text-dark-gray">40k+</h2>
                <h6 className="font-weight-bold text-dark-gray">
                  Happy Students
                </h6>
              </motion.div>
              <motion.div
                ref={secondSectionRef}
                initial={{ opacity: 0 }}
                animate={secondSectionInView ? { opacity: 1 } : {}}
                transition={{ duration: 2 }}
                className="col-md-4 my-4"
              >
                <FontAwesomeIcon
                  icon={faUserFriends}
                  className="fa-3x text-orange mb-2"
                />
                <h2 className="font-weight-bold text-dark-gray">12k+</h2>
                <h6 className="font-weight-bold text-dark-gray">
                  Active Users
                </h6>
              </motion.div>
              <motion.div
                ref={secondSectionRef}
                initial={{ opacity: 0 }}
                animate={secondSectionInView ? { opacity: 1 } : {}}
                transition={{ duration: 2 }}
                className="col-md-4 my-4"
              >
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="fa-3x text-orange mb-2"
                />
                <h2 className="font-weight-bold text-dark-gray">2k+</h2>
                <h6 className="font-weight-bold text-dark-gray">
                  Online Courses
                </h6>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container-fluid my-5">
          <div className="container">
            <div className="row text-center">
              <motion.h2
                ref={thirdSectionRef}
                className="text-white"
                initial={{ opacity: 0 }}
                animate={thirdSectionInView ? { opacity: 1 } : {}}
                transition={{ duration: 1 }}
              >
                Achieve Your Goals With AcademiX
              </motion.h2>
              <div className="col-md-5 mx-auto text-dark d-flex flex-column align-items-center text-center my-3">
                <motion.p
                  ref={thirdSectionRef}
                  className="text-gray my-1"
                  initial={{ opacity: 0 }}
                  animate={thirdSectionInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis quae, hic sequi numquam assumenda veritatis!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                </motion.p>
              </div>

              {/* Third section */}
              <div className="row my-4">
                <motion.div
                  className="col-md-3 mx-auto my-3"
                  initial="hidden"
                  animate={thirdSectionInView ? "visible" : "hidden"}
                  transition={{ duration: 1.5 }}
                  variants={cardVariants}
                >
                  <div className="card h-100 shadow-lg rounded py-4 px-4">
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      className="fa-2x text-pink mb-2"
                    />
                    <h5 className="text-dark-gray font-weight-bold">
                      Learn The Latest Skills
                    </h5>
                    <p className="text-dark-gray">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, vel.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-md-3 mx-auto my-3"
                  initial="hidden"
                  animate={thirdSectionInView ? "visible" : "hidden"}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  variants={cardVariants}
                >
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
                </motion.div>
                <motion.div
                  className="col-md-3 mx-auto my-3"
                  initial="hidden"
                  animate={thirdSectionInView ? "visible" : "hidden"}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  variants={cardVariants}
                >
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
                </motion.div>
              </div>

              {/* Third section end */}
            </div>
          </div>
        </div>

        <div className="container-fluid border bg-gray">
          <div className="container">
            <div className="row text-dark d-flex flex-column align-items-center my-5 text-center">
              <motion.h2
                ref={fourthSectionRef}
                initial={{ opacity: 0 }}
                animate={fourthSectionInView ? { opacity: 1 } : {}}
                transition={{ duration: 1.5 }}
                className="text-dark-gray"
              >
                Popular Courses
              </motion.h2>
            </div>
            <motion.div
              ref={fourthSectionRef}
              initial={{ opacity: 0 }}
              animate={fourthSectionInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5 }}
              className="row row-cols-1 row-cols-md-3 g-4"
            >
              {courseList.map((course) => {
                const { id } = course;
                return <CourseCard key={id} {...course} />;
              })}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
