"use client";
import { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ name, label }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  const handleButtonClick = () => {
    imageInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name} className={classes.input}>
        {label}
      </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="Picked" fill />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          className={classes.input}
          onChange={handleFileChange}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleButtonClick}
        >
          Choose Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
