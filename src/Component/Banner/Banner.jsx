import React, { useEffect, useState } from "react";
import banner from "../../Images/bannner1.jpg";
import "./Banner.css";
import { IoMdCloudUpload } from "react-icons/io";
import { imageUploade } from "../../Auth";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const handleUploadPicture = () => {
    if (img == null) return;

    const imageRef = ref(imageUploade, `files/${v4()}`);
    uploadBytes(imageRef, img)
      .then((snapshot) => {
        console.log("Uploaded file!", snapshot);
      })
      .catch((error) => {
        console.error("Upload failed", error);
      });
  };

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(imageUploade, "files");
      const res = await listAll(listRef);

      const urls = await Promise.all(
        res.items.map((item) => getDownloadURL(item))
      );

      setImgUrl(urls);
    };

    fetchImages();
  }, []);

  console.log(img);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  console.log(showModal, "showModal", imgUrl);
  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Check In</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <h5>Title</h5>
                <input type="text" placeholder="Enter title" />

                <h5>Upload Image</h5>
                <div className="file-input-wrapper">
                  <input
                    className="Upload-image"
                    type="file"
                    id="fileInput"
                    multiple
                    // onChange={(e) => setImg(e.target.files[0])}
                    onChange={handleFileChange}
                  />
                  <label htmlFor="fileInput" className="custom-file-label">
                    <IoMdCloudUpload />
                  </label>
                  <div className="placeholder-text">
                    <h6 style={{ color: "black" }}>
                      Click or drag file to this are to upload{" "}
                    </h6>
                    Support for a single or bulk upload, Strictly prohibit from
                    uploading company data or other banned files
                  </div>
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleUploadPicture}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row">
        <div
          className="col-12 Banner-Main"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="Banner-content">
            <h1>Hi 👋 James Doe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button onClick={handleOpenModal}>Add Check In</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
