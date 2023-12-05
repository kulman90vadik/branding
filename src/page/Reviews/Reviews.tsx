import { useState, useRef, useEffect, Fragment, ChangeEvent, FormEvent } from "react";
import "./reviews.scss";

const Reviews = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | any>();
  const [preview, setPreview] = useState<any>();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputPhoto, setInputPhoto] = useState<any>("");
  const [rating, setRating] = useState<number>(0);
  

  type ReviewsType = { name: string, email: string, text: string, time: any, photo: string, star: number }[];
  
  const [reviews, setReviews] = useState<ReviewsType>([
    {
      name: "Franz",
      email: "franz@live.de",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Tof the word in classical literature, discovered the undoubtable source.",
      time: new Date(),
      photo: "images/person.png",
      star: rating
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
      setInputPhoto('images/person.png');
    }
  }, [image]);

  const submitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputName !== '' && inputEmail !== '' && inputText !== '') {
        setReviews((prev) => {
          return [
            {
              name: inputName,
              email: inputEmail,
              text: inputText,
              time: new Date(),
              photo: inputPhoto,
              star: rating
            },
            ...prev,
          ];
        });
    
        setInputName("");
        setInputEmail("");
        setInputText("");
        setInputPhoto("");
        setPreview("");
        // setRating(-1);
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
              onClick={(event: React.MouseEvent<HTMLLabelElement>) => {
                event.preventDefault();
                fileInputRef.current?.click();
              }}
            >
              Your photo
              {preview ?
                <img src={preview} alt="photography of clothes" className="reviews__preview" />
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
              onChange={(event: ChangeEvent) => {

                // const e = event as ChangeEvent;
                // const file = e.target.files[0];
                const e = event.target as HTMLInputElement;
                const file: File = (e.files as FileList)[0];


                if (file && file.type.substr(0, 5) === "image") {
                  setImage(file);
                } else {
                  setImage('');
                }
              }}
            />

          </div>
              <div className="rating">
                {[...Array(5)].map((start, index) => {
                  return (
                    <Fragment key={index}>
                      <input type="radio" name="star" id={String(index)} onClick={() => setRating(index)}/>
                      <label htmlFor={String(index)} key={index}>&#9733;</label>
                    </Fragment>
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
                <img src={el.photo} alt="photography of clothes" className="reviews__image" />
              </div>
              <div className="reviews__info">
                <span className="reviews__name">{el.name}</span>
                <div className="reviews__text">{el.text}</div>

                <div className="rating-info">
                  {[...Array(5)].map((start, index) => {
                    return (
                      <Fragment key={index}>
                        <input type="radio" name={el.text} id={String(index)} defaultChecked={index === el.star} />
                        <label htmlFor={String(index)} >&#9733;</label>
                      </Fragment>
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
