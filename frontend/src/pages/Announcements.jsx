import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { getAllAnnouncements } from "../../features/announcement/announcementSlice";
import AnnouncementCard from "../components/AnnouncementCard";

const Announcements = () => {
  const { announcements } = useSelector((store) => store.announcements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnnouncements());
  }, [dispatch, announcements]);
  return (
    <div className="container bg-white h-100 p-3">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-muted">All Announcements</h2>
        </div>
        <div className="col-md-6 ">
          <div className="form-group position-relative mx-2 mt-2">
            <FaSearch className="text-dark position-absolute top-50 start-0 translate-middle-y ms-3" />
            <input
              type="text"
              className="form-control pl-5"
              placeholder="Search Announcements"
              // value={searchQuery}
              // onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4 ">
        {announcements.length > 0 ? (
          announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.announcementId}
              {...announcement}
            />
          ))
        ) : (
          <div className="col text-center">
            <p className="text-muted">No announcements available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;
