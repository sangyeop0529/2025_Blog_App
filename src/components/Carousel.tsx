import { useState } from "react";

const IMAGE_1_URL =
  "https://images.unsplash.com/photo-1749738155703-b4650f21387b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const IMAGE_2_URL =
  "https://plus.unsplash.com/premium_photo-1749544311043-3a6a0c8d54af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8";

const IMAGE_3_URL =
  "https://images.unsplash.com/photo-1745874864678-f464940bb513?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          <input
            type="radio"
            name="radio-buttons"
            id="img-1"
            checked={activeImage === 1}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 1" src={IMAGE_1_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-prev">
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-next">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type="radio"
            name="radio-buttons"
            id="img-2"
            checked={activeImage === 2}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 2" src={IMAGE_2_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-prev">
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(3)}
                className="carousel__slide-next">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input
            type="radio"
            name="radio-buttons"
            id="img-3"
            checked={activeImage === 3}
            readOnly
          />
          <li className="carousel__slide-container">
            <div className="carousel__slide-img">
              <img alt="scenery 3" src={IMAGE_3_URL} />
            </div>
            <div className="carousel__controls">
              <label
                onClick={() => setActiveImage(2)}
                className="carousel__slide-prev">
                <span>&lsaquo;</span>
              </label>
              <label
                onClick={() => setActiveImage(1)}
                className="carousel__slide-next">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <div className="carousel__dots">
            <label
              onClick={() => setActiveImage(1)}
              className="carousel__dot"
              id="img-dot-1"></label>
            <label
              onClick={() => setActiveImage(2)}
              className="carousel__dot"
              id="img-dot-2"></label>
            <label
              onClick={() => setActiveImage(3)}
              className="carousel__dot"
              id="img-dot-3"></label>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
