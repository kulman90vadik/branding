import { useState } from "react";
import "./reviews.scss";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    setReviews((prev) => {
      return [
        {
          name: inputName,
          email: inputEmail,
          text: inputText,
        },
        ...prev,
      ];
    });

    console.log(inputPhoto);

    setInputName("");
    setInputEmail("");
    setInputText("");
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
            placeholder="name"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          />
          <label className="reviews__label">Your email</label>
          <input
            type="email"
            name="email"
            className="reviews__input"
            placeholder="email"
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail}
          />
          <label className="reviews__label">Your review</label>
          <textarea
            name="text"
            className="reviews__textarea reviews__input"
            placeholder="text"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          ></textarea>
          <label htmlFor="file" className="reviews__label reviews__label--file">
            Your photo
            <input
              id="file"
              type="file"
              className="reviews__file"
              onChange={(e) => setInputPhoto(e.target.value)}
              value={inputPhoto}
            />
            <span></span>
          </label>
          <input
            className="reviews__submit btn-reset"
            type="submit"
            value="Submit"
          />
        </form>

        <div className="reviews__list">
          {reviews.map((el) => (
            <li>{el.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
