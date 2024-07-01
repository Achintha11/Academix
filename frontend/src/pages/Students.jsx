import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://192.168.1.5:3000/api/v1/students"
      );
      if (response.status === 200) {
        setStudents(response.data);
      }
    };
    fetchData();
  }, [students]);

  const handleAddStudent = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://192.168.1.5:3000/api/v1/students",
        {
          email,
          name,
          studentId,
        }
      );

      if (response.status === 200) {
        alert("New Student Added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteStudent = async (studentId) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.5:3000/api/v1/students/${studentId}`
      );
      if (response.status === 200) {
        alert("deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white container text-dark h-100 p-3">
      <div className="row my-3">
        <div className="col">
          <h1 className="text-muted">Students</h1>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-8">
          <form className="form-inline d-flex ">
            <div className="form-group mr-3 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group mr-3 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>

            <div className="form-group mr-3 mt-2">
              <input
                type="email"
                className="form-control"
                placeholder="Student Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              onClick={handleAddStudent}
              type="submit"
              className="btn-primary btn text-white btn-sm form-group mt-2"
            >
              Add Student
            </button>
          </form>
        </div>

        <div className="col ">
          <div className="form-group position-relative mx-2 mt-2">
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" />
            <input
              type="text"
              className="form-control pl-5"
              placeholder="Search Students"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Student ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.studentId}>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteStudent(student.studentId)}
                      className="btn btn-danger btn-sm"
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

export default Students;
