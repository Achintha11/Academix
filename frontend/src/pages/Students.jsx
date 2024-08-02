import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  fetchStudents,
  removeStudent,
  setEmail,
  setName,
  setStudentId,
} from "../../features/student/studentSlice";

const Students = () => {
  const { name, email, studentId, students } = useSelector(
    (store) => store.students
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch, students]);

  const handleAddStudent = (e) => {
    e.preventDefault();
    dispatch(addStudent({ name, email, studentId }));
    dispatch(setName(""));
    dispatch(setEmail(""));
    dispatch(setStudentId(""));
  };

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const filteredStudents = students.filter(
  //   (student) =>
  //     student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     student.studentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     student.email.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // const handleDeleteStudent = async (studentId) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://192.168.1.5:3000/api/v1/students/${studentId}`
  //     );
  //     if (response.status === 200) {
  //       alert("deleted successfully");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                onChange={(e) => dispatch(setName(e.target.value))}
                required
              />
            </div>

            <div className="form-group mr-3 mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Student ID"
                value={studentId}
                onChange={(e) => dispatch(setStudentId(e.target.value))}
                required
              />
            </div>

            <div className="form-group mr-3 mt-2">
              <input
                type="email"
                className="form-control"
                placeholder="Student Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
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
              // value={searchQuery}
              // onChange={handleSearch}
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
              {students.map((student) => {
                const { studentId, name, email } = student;
                return (
                  <tr key={studentId}>
                    <td>{studentId}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button
                        onClick={() => dispatch(removeStudent(studentId))}
                        className="btn btn-danger btn-sm"
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
