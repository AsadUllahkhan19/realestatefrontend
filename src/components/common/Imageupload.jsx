import React, { useContext } from "react";
import { useState } from "react";
import { Store } from "../../context/store";
import { ReactComponent as Cross } from "../../assets/svgs/cross.svg";

const Imageupload = ({ images, setImages, setUpdateImage, updateImage }) => {
  const { state } = useContext(Store);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };

  const handleUpdateImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setUpdateImage([...updateImage, ...selectedImages]);
  };

  return (
    <div className="mt-2 mb-7">
      <form>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={
            state?.updatePropertyToggle
              ? handleUpdateImageChange
              : handleImageChange
          }
          className="hidden"
          id="imageInput"
        />
        <label
          htmlFor="imageInput"
          className="bg-yellow-400 hover:bg-yellow-300 text-white py-2 px-4 rounded cursor-pointer"
        >
          Select Images
        </label>
      </form>

      {images?.length > 0 && (
        <div className="mt-4">
          <h2>Selected Images:</h2>
          <div className="flex flex-wrap">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-1/4 p-2 relative"
                onClick={() => {
                  const array = [...images];
                  array.splice(index, 1);
                  setImages(array);
                }}
              >
                <Cross
                  className="absolute right-0 rounded-full bg-slate-200"
                  height={12}
                  width={12}
                />
                <img
                  src={
                    state?.updatePropertyToggle
                      ? `${process.env.REACT_APP_SERVERURL}/static/${image}`
                      : URL?.createObjectURL(image)
                  }
                  alt={`Image ${index}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Imageupload;
