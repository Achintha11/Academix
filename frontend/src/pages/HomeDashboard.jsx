import { FaUsers, FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addAnnouncement } from "../../features/announcement/announcementSlice";
import CustomAlert from "../components/CustomAlert";

const HomeDashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const announcement = {
      targetAudience: formData.get("targetAudience"),
      announcementTitle: formData.get("announcementTitle"),
      announcementMessage: formData.get("announcementMessage"),
      announcementDate: new Date(),
    };

    dispatch(addAnnouncement(announcement));
    e.target.reset();
  };

  return (
    <div className="container-fluid">
      <CustomAlert
        message={"Announcement sent successfully!"}
        type={"success"}
      />
      <div className="row shadow-sm py-4 bg-white">
        <div className="col-md-4 mb-3">
          <div className="card border-0 h-100">
            <div className="shadow card-round card-body d-flex justify-content-between align-items-center bg-purple-gradient">
              <div className="text-white p-3">
                <h3 className="my-3 font-weight-bold">5000</h3>
                <p className="my-3">Students</p>
              </div>
              <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center p-3">
                <FaUsers className="display-5" />
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
              <div className="bg-white rounded-circle p-3 mx-2">
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
        <div className="col-md-5 bg-white mr-3 shadow p-3">
          <h4 className="mb-1 text-muted">Dashboard Analytics</h4>
          <p>Additional analytics and features can be placed here.</p>
        </div>

        {user.role !== "student" && (
          <div className="col shadow bg-white p-3">
            <h4 className="mb-1 text-muted">Send Announcement</h4>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group d-flex align-items-center mt-3 mb-0">
                {user.role === "admin" && (
                  <select
                    name="targetAudience"
                    id="targetAudience"
                    className="form-control w-50"
                  >
                    <option value="students">for Students</option>
                    <option value="teachers">for Teachers</option>
                    <option value="all">for all</option>
                  </select>
                )}
                {user.role === "teacher" && (
                  <select
                    name="targetAudience"
                    id="targetAudience"
                    className="form-control w-50"
                  >
                    <option value="students">for Students</option>
                  </select>
                )}
              </div>
              <div className="form-group my-3">
                <label htmlFor="announcementTitle">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="announcementTitle"
                  name="announcementTitle"
                  placeholder="Enter announcement title"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="announcementMessage">Message</label>
                <textarea
                  className="form-control"
                  id="announcementMessage"
                  name="announcementMessage"
                  rows="4"
                  placeholder="Enter announcement message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary text-white">
                Send Announcement
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeDashboard;
