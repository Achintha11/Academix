/* eslint-disable react/prop-types */
import { FaBullhorn } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnnouncement } from "../../features/announcement/announcementSlice";

const AnnouncementCard = ({
  announcementMessage,
  announcementTitle,
  announcementDate,
  _id,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((Store) => Store.auth);
  return (
    <div className="col-md-6 mb-4">
      <div className="card border user-course-card">
        <div className="card-body d-flex justify-content-between align-items-start">
          <div>
            <div className="d-flex align-items-center mb-2">
              <FaBullhorn
                className="mr-3"
                style={{ fontSize: "1.5rem", color: "#007bff" }}
              />
              <h5 className="card-title mb-0">{announcementTitle}</h5>
            </div>
            <p className="card-text">{announcementMessage}</p>
            <small className="text-muted">
              {new Date(announcementDate).toLocaleString()}
            </small>
          </div>
          {user.role === "admin" && (
            <button
              className="btn btn-danger btn-sm "
              onClick={() => dispatch(deleteAnnouncement(_id))}
            >
              <RiDeleteBin6Line style={{ fontSize: "1.2rem" }} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
