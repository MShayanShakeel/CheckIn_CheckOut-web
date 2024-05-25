import React, { useState } from "react";
import firstimage from "../../Images/Banner.jpg";
import profile from "../../Images/Profileuiu.jpg";
import "./Banner2.css";
import { Link } from "react-router-dom";

const Banner2 = () => {
  const [getID, setGetID] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const checkInData = [
    {
      id: 1,
      imageSrc: firstimage,
      checkInName: "CheckIn Name",
      date: "12th Nov, 2022",
      owner: "John Doe",
      profileImgSrc: profile,
    },
    {
      id: 2,
      imageSrc: firstimage,
      checkInName: "CheckIn Name",
      date: "12th Nov, 2022",
      owner: "John Doe",
      profileImgSrc: profile,
    },
    {
      id: 3,
      imageSrc: firstimage,
      checkInName: "CheckIn Name",
      date: "12th Nov, 2022",
      owner: "John Doe",
      profileImgSrc: profile,
    },
    {
      id: 4,
      imageSrc: firstimage,
      checkInName: "CheckIn Name",
      date: "12th Nov, 2022",
      owner: "John Doe",
      profileImgSrc: profile,
    },
  ];
  console.log(getID, "getID");
  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body row modal-body-main">
                <div className="col-6 modal-body-left">
                  <span className="model-span">
                    <label>Booking ID</label>{" "}
                    <input type="number" style={{ width: "50%" }} />
                  </span>
                  <span className="model-span">
                    <label>Rooms</label>{" "}
                    <input type="number" style={{ width: "15%" }} />
                  </span>
                  <span className="model-span">
                    <label>Number of Guest</label>{" "}
                    <input type="number" style={{ width: "15%" }} />
                  </span>
                  <span className="model-span">
                    <label>Booked Date</label>{" "}
                    <input
                      type="date"
                      style={{ width: "60%", fontSize: "12px" }}
                    />
                  </span>
                </div>
                <div className="col-6 model-image-class">
                  {" "}
                  <img
                    src={getID?.imageSrc}
                    alt="Check-in"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  style={{
                    background: "transparent",
                    border: "2px solid #ebebeb",
                    color: "black",
                  }}
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row no-padding">
        <div className="col-12 Banner-2">
          {checkInData.map((item) => (
            <div className="Banner-2-main-content" key={item.id}>
              <div className="Banner-2-second-content">
                <div className="image-container">
                  <button
                    className="checkin-button"
                    onClick={() => {
                      setGetID(item);
                      handleShowModal();
                    }}
                  >
                    Checked In
                  </button>
                  <img src={item.imageSrc} alt="check-in" />
                </div>
                <h6>{item.checkInName}</h6>
                <p>{item.date}</p>
                <span className="Banner-span">
                  <img src={item.profileImgSrc} alt="profile" />
                  <h5>
                    <strong>Owner :</strong> {item.owner}
                  </h5>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner2;
