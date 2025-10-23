import { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portfolio">
      <div className="container text-center">
        <h2 className="pt-5 text-uppercase pb-3">portfolio component</h2>

        <div className="d-flex justify-content-center align-items-center line-contact mb-5">
          <div className="line-before-contact"></div>
          <i className="fa-solid fa-star"></i>
          <div className="line-after-contact"></div>
        </div>

        <div className="row g-5 pb-5">
          <div className="col-4">
            <div
              className="inner"
              onClick={() => handleImageClick("src/assets/poert1.png")}
            >
              <img
                className="w-100 rounded-3"
                src="src/assets/poert1.png"
                alt="portfolio item 1"
              />
              <div className="layer w-100 h-100 position-absolute top-0 start-0 rounded-3 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="inner"
              onClick={() => handleImageClick("src/assets/port2.png")}
            >
              <img
                className="w-100 rounded-3"
                src="src/assets/port2.png"
                alt="portfolio item 2"
              />
              <div className="layer w-100 h-100 position-absolute top-0 start-0 rounded-3 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="inner"
              onClick={() => handleImageClick("src/assets/port3.png")}
            >
              <img
                className="w-100 rounded-3"
                src="src/assets/port3.png"
                alt="portfolio item 3"
              />
              <div className="layer w-100 h-100 position-absolute top-0 start-0 rounded-3 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="inner"
              onClick={() => handleImageClick("src/assets/poert1.png")}
            >
              <img
                className="w-100 rounded-3"
                src="src/assets/poert1.png"
                alt="portfolio item 1"
              />
              <div className="layer w-100 h-100 position-absolute top-0 start-0 rounded-3 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="inner"
              onClick={() => handleImageClick("src/assets/port2.png")}
            >
              <img
                className="w-100 rounded-3"
                src="src/assets/port2.png"
                alt="portfolio item 2"
              />
              <div className="layer w-100 h-100 position-absolute top-0 start-0 rounded-3 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="inner"
              onClick={() => handleImageClick("src/assets/port3.png")}
            >
              <img
                className="w-100 rounded-3"
                src="src/assets/port3.png"
                alt="portfolio item 3"
              />
              <div className="layer w-100 h-100 position-absolute top-0 start-0 rounded-3 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying the selected image */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
