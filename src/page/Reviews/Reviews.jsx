import { useState, useRef, useEffect } from "react";
import "./reviews.scss";

const Reviews = () => {
  const fileInputRef = useRef();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");
  const [rating, setRating] = useState(2);
  const [reviews, setReviews] = useState([
    {
      name: "Franz",
      email: "franz@life.de",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Tof the word in classical literature, discovered the undoubtable source.",
      time: new Date(),
      photo: "images/person.png",
      // star: rating
    },
  ]);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setInputPhoto(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
      setInputPhoto(null);
    }
  }, [image]);

  const submitData = (e) => {
    e.preventDefault();
    if(inputName != '' && inputEmail != '' && inputText != '' && inputPhoto != '') {
        setReviews((prev) => {
          return [
            {
              name: inputName,
              email: inputEmail,
              text: inputText,
              time: new Date(),
              photo: inputPhoto,
              // star: rating
            },
            ...prev,
          ];
        });
    
        setInputName("");
        setInputEmail("");
        setInputText("");
        setInputPhoto("");
        setPreview("");
    }
  };

  return (
    <div className="reviews">
      <div className="reviews__container">
        <form
          action="#"
          className="reviews__form"
          onSubmit={(e) => submitData(e)}
        >
          <span className="reviews__title">Leave a Review</span>
          <label className="reviews__label">Your Name</label>
          <input
            type="text"
            name="name"
            className="reviews__input"
            placeholder="Name"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          />
          <label className="reviews__label">Your email</label>
          <input
            type="email"
            name="email"
            className="reviews__input"
            placeholder="Email"
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
          />
          <label className="reviews__label">Your review</label>
          <textarea
            name="text"
            className="reviews__textarea reviews__input"
            placeholder="Message"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          ></textarea>

          <div className="reviews__block">
            <label
              htmlFor="file"
              className="reviews__label reviews__label--file"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Your photo
              {preview ?
                <img src={preview} alt="photo" className="reviews__preview" />
                : null
              }
            </label>
            <input
              id="file"
              type="file"
              className="reviews__file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />

          </div>
              <div className="rating">
                {[...Array(5)].map((start, index) => {
                  return (
                    <>
                      <input type="radio" name="star" id={index} onClick={() => setRating(index)}/>
                      <label htmlFor={index} key={index}>&#9733;</label>
                    </>
                  )
                })}
              </div>


          <input
            className="reviews__submit btn-reset"
            type="submit"
            value="Submit"
          />
        </form>

        <ul className="reviews__list">
          {reviews.map((el) => (
            <li className="reviews__item" key={el.text}>
              <div className="reviews__photo">
                <img src={el.photo} alt="photo" className="reviews__image" />
              </div>
              <div className="reviews__info">
                <span className="reviews__name">{el.name}</span>
                <div className="reviews__text">{el.text}</div>

                <div className="rating-info">
                  {[...Array(5)].map((start, index) => {
                    return (
                      <>
                        <input type="radio" name="star-info" id={index} />
                        <label htmlFor={index} className={`${index == rating ? 'label' : ''}`}>&#9733;</label>
                      </>
                    )
                  })}
                </div>

                <time className="reviews__time">
                  {el.time.toLocaleString()}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
