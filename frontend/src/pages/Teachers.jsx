import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeachers,
  addTeacher,
  setEmail,
  setName,
  setTeacherId,
  removeTeacher,
} from "../../features/teacher/teacherSlice";

const Teachers = () => {
  const dispatch = useDispatch();
  const { teachers, name, email, teacherId } = useSelector(
    (store) => store.teachers
  );

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch, teachers]); // Now useEffect will run again whenever dispatch changes

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    dispatch(addTeacher({ email, name, teacherId }));
    dispatch(setName(""));
    dispatch(setEmail(""));
    dispatch(setTeacherId(""));
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
                onChange={(e) => dispatch(setName(e.target.value))}
                required
              />
            </div>
            <div className="form-group mr-3 mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Teacher ID"
                value={teacherId}
                onChange={(e) => dispatch(setTeacherId(e.target.value))}
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
                onChange={(e) => dispatch(setEmail(e.target.value))}
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
              {teachers.map((teacher) => {
                const { name, email, teacherId } = teacher;
                return (
                  <tr key={teacherId}>
                    <td>{teacherId}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <button
                        onClick={() => dispatch(removeTeacher(teacherId))}
                        className="btn btn-sm btn-danger"
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

export default Teachers;
