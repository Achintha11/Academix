import React from "react";

const TeacherCard = () => {
  return (
    <div className="d-flex align-items-center  border my-3">
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s"
        }
        alt="User Profile"
        className="rounded-circle border"
        style={{ width: "40px", height: "40px" }}
      />
      <div className="ms-2 text-dark-gray">
        <span className="font-weight-bold">Achintha Peiris</span>
        <br />
      </div>
    </div>
  );
};

export default TeacherCard;
