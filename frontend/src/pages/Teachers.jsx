import axios from "axios";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [email, setEmail] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.5:3000/api/v1/teachers"
        );
        if (response.status === 200) {
          setTeachers(response.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [teachers]);

  const handleAddTeacher = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.1.5:3000/api/v1/teachers",
        {
          email,
          teacherId,
          name,
        }
      );

      if (response.status === 200) {
        alert("teacher Added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTeacher = async (teacherId) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.5:3000/api/v1/teachers/${teacherId}`
      );
      if (response.status === 200) {
        alert("deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container bg-white h-100 p-3 ">
      <div className="row my-3">
        <div className="col">
          <h1 className="text-dark">Teachers</h1>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-8">
          <form className="form-inline d-flex ">
            <div className="form-group mr-3 mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Teacher Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mr-3 mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Teacher ID"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                required
              />
            </div>
            <div className="form-group mr-3 mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Teacher Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleAddTeacher}
              type="submit"
              className="btn btn-primary btn-sm text-white form-group mt-2"
            >
              Add Teacher
            </button>
          </form>
        </div>
        <div className="col">
          <div className="form-group position-relative mx-2 mt-2">
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-dark" />
            <input
              type="text"
              className="form-control pl-5"
              placeholder="Search Teachers"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Teacher ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.teacherId}>
                  <td>{teacher.teacherId}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.email}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteTeacher(teacher.teacherId)}
                      className="btn btn-sm btn-danger"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
